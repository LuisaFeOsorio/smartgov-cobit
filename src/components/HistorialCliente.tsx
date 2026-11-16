"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { DiagnosticoGuardado } from "@/lib/db";

export default function HistorialCliente() {
  const [diagnosticos, setDiagnosticos] = useState<DiagnosticoGuardado[] | null>(null);
  const [cargando, setCargando] = useState(true);

  async function cargar() {
    try {
      const res = await fetch("/api/diagnosticos");
      const data = await res.json();
      setDiagnosticos(data.diagnosticos ?? []);
    } catch {
      setDiagnosticos([]);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargar();
  }, []);

  async function eliminar(id: number) {
    if (!confirm(`¿Eliminar el diagnóstico #${id}? Esta acción no se puede deshacer.`)) return;
    await fetch(`/api/diagnosticos/${id}`, { method: "DELETE" });
    await cargar();
  }

  if (cargando) {
    return (
      <div className="estado-analisis">
        <span className="cargando">⏳</span> Cargando historial…
      </div>
    );
  }

  if (!diagnosticos || diagnosticos.length === 0) {
    return (
      <div className="estado-analisis">
        <strong>Aún no hay diagnósticos guardados.</strong> Completa el{" "}
        <Link href="/diagnostico">paso 1 · carga de documentos</Link> y pulsa
        “Guardar en el historial” cuando termine el análisis.
      </div>
    );
  }

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Documentos</th>
          <th>Hallazgos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {diagnosticos.map((d) => (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.nombre}</td>
            <td className="muted">{new Date(d.fecha).toLocaleString("es-CO", { dateStyle: "medium", timeStyle: "short" })}</td>
            <td>{d.analisis.documentos.length}</td>
            <td>
              <strong>{d.analisis.npos.length}</strong>
            </td>
            <td>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Link href={`/diagnostico/resultado?id=${d.id}`} className="btn btn-mini btn-solid">
                  Ver análisis
                </Link>
                <Link href={`/diagnostico/hoja-de-ruta?id=${d.id}`} className="btn btn-mini btn-borde">
                  Hoja de ruta
                </Link>
                <button className="btn btn-mini btn-peligro" onClick={() => eliminar(d.id)}>
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
