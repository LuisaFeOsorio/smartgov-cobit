// Capa de datos: SQLite con better-sqlite3 (corre solo en el servidor).
// En producción (Vercel) el disco es efímero: se usa /tmp y, si SQLite
// no está disponible, se cae a un respaldo en memoria para que las APIs
// nunca fallen.
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import type { Analisis } from "@/lib/pln";

export type DiagnosticoGuardado = {
  id: number;
  nombre: string;
  fecha: string;
  analisis: Analisis;
};

/* ---------- Intento 1: SQLite real ---------- */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Database: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let db: any = null;

try {
  const req = createRequire(fileURLToPath(import.meta.url));
  Database = req("better-sqlite3");

  // En Vercel solo /tmp es escribible; en local usamos la raíz del proyecto.
  const enNube = Boolean(process.env.VERCEL);
  const ruta = enNube
    ? path.join("/tmp", "smartgov.db")
    : path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "smartgov.db");

  db = new Database(ruta);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS diagnosticos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      fecha TEXT NOT NULL,
      analisis TEXT NOT NULL
    );
  `);
} catch (error) {
  console.warn(
    "SQLite no disponible, usando respaldo en memoria:",
    error instanceof Error ? error.message : error
  );
  db = null;
}

export const dbDisponible = db !== null;

/* ---------- Respaldo en memoria ---------- */

const memoria = new Map<number, DiagnosticoGuardado>();
let siguienteId = 1;

function guardarEnMemoria(nombre: string, analisis: Analisis): number {
  const id = siguienteId++;
  memoria.set(id, { id, nombre, fecha: new Date().toISOString(), analisis });
  return id;
}

function listarEnMemoria(): DiagnosticoGuardado[] {
  return [...memoria.values()].sort((a, b) => b.id - a.id);
}

function obtenerEnMemoria(id: number): DiagnosticoGuardado | null {
  return memoria.get(id) ?? null;
}

function eliminarEnMemoria(id: number): boolean {
  return memoria.delete(id);
}

/* ---------- API pública (igual para ambos modos) ---------- */

/** Guarda un análisis y devuelve su id */
export function guardarDiagnostico(nombre: string, analisis: Analisis): number {
  if (db) {
    const result = db
      .prepare("INSERT INTO diagnosticos (nombre, fecha, analisis) VALUES (?, ?, ?)")
      .run(nombre, new Date().toISOString(), JSON.stringify(analisis));
    return Number(result.lastInsertRowid);
  }
  return guardarEnMemoria(nombre, analisis);
}

export function listarDiagnosticos(): DiagnosticoGuardado[] {
  if (db) {
    return db
      .prepare("SELECT id, nombre, fecha, analisis FROM diagnosticos ORDER BY id DESC")
      .all()
      .map((row: unknown) => {
        const r = row as { id: number; nombre: string; fecha: string; analisis: string };
        return { ...r, analisis: JSON.parse(r.analisis) as Analisis };
      });
  }
  return listarEnMemoria();
}

export function obtenerDiagnostico(id: number): DiagnosticoGuardado | null {
  if (db) {
    const row = db
      .prepare("SELECT id, nombre, fecha, analisis FROM diagnosticos WHERE id = ?")
      .get(id) as { id: number; nombre: string; fecha: string; analisis: string } | undefined;
    if (!row) return null;
    return { ...row, analisis: JSON.parse(row.analisis) as Analisis };
  }
  return obtenerEnMemoria(id);
}

export function eliminarDiagnostico(id: number): boolean {
  if (db) {
    const result = db.prepare("DELETE FROM diagnosticos WHERE id = ?").run(id);
    return result.changes > 0;
  }
  return eliminarEnMemoria(id);
}
