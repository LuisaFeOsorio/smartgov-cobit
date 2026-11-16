"use client";

import { useEffect, useState } from "react";
import type { Analisis } from "@/lib/pln";
import { nposMock, madurezMock, iniciativasMock, kpisMock } from "@/data/cobit";

export const CLAVE_ANALISIS = "smartgov-analisis";

/** Análisis de ejemplo (mocks) cuando aún no se han cargado documentos */
export const analisisEjemplo: Analisis = {
  documentos: [
    { nombre: "informe-ti-2025.pdf", caracteres: 2100, frases: 12, hallazgos: 3 },
    { nombre: "acta-junta-03.docx", caracteres: 1800, frases: 10, hallazgos: 3 },
    { nombre: "plan-tecnologico.pdf", caracteres: 1900, frases: 11, hallazgos: 2 },
    { nombre: "contratos-proveedores.docx", caracteres: 900, frases: 6, hallazgos: 2 },
  ],
  npos: nposMock.map((n) => ({ ...n, senales: [] })),
  madurez: madurezMock,
  iniciativas: iniciativasMock.map((i) => ({ ...i, objetivos: [] })),
  kpis: kpisMock,
  fuente: "ejemplo",
};

/**
 * Lee el análisis: primero por id de historial (si viene), luego el guardado
 * en sessionStorage por el paso 1; si no hay ninguno, muestra los de ejemplo.
 */
export function useAnalisis(id?: string) {
  const [analisis, setAnalisis] = useState<Analisis | null>(null);
  const [cargando, setCargando] = useState(true);
  const [fuente, setFuente] = useState<"historial" | "sesion" | "ejemplo">("ejemplo");

  useEffect(() => {
    let vivo = true;
    (async () => {
      if (id) {
        try {
          const res = await fetch(`/api/diagnosticos/${id}`);
          if (res.ok) {
            const data = await res.json();
            if (vivo) {
              setAnalisis(data.diagnostico.analisis as Analisis);
              setFuente("historial");
              setCargando(false);
              return;
            }
          }
        } catch {
          // si falla, cae a los demás modos
        }
      }
      try {
        const raw = sessionStorage.getItem(CLAVE_ANALISIS);
        if (raw) {
          const a = JSON.parse(raw) as Analisis;
          if (vivo) {
            setAnalisis(a);
            setFuente("sesion");
          }
        }
      } catch {
        // datos corruptos: se muestran los de ejemplo
      }
      if (vivo) setCargando(false);
    })();
    return () => {
      vivo = false;
    };
  }, [id]);

  return { analisis: analisis ?? analisisEjemplo, esEjemplo: !cargando && fuente === "ejemplo", cargando, fuente };
}

/** Aviso que se muestra cuando se están viendo datos de ejemplo */
export function AvisoEjemplo() {
  return (
    <div className="aviso-ejemplo">
      <strong>Estás viendo datos de ejemplo.</strong> Ve al{" "}
      <a href="/diagnostico">paso 1 · carga de documentos</a> y sube tus
      archivos (PDF, Word o texto) para ver tu propio análisis con IA.
    </div>
  );
}
