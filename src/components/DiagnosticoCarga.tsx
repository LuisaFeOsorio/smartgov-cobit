"use client";

import { useState } from "react";
import { CLAVE_ANALISIS } from "@/lib/useAnalisis";
import type { Analisis } from "@/lib/pln";

type Estado = "inicial" | "analizando" | "listo" | "error";

export default function DiagnosticoCarga() {
  const [archivos, setArchivos] = useState<File[]>([]);
  const [estado, setEstado] = useState<Estado>("inicial");
  const [mensaje, setMensaje] = useState("");
  const [resumen, setResumen] = useState<Analisis | null>(null);
  const [guardando, setGuardando] = useState(false);
  const [guardado, setGuardado] = useState<number | null>(null);

  async function guardar() {
    if (!resumen) return;
    setGuardando(true);
    try {
      const res = await fetch("/api/diagnosticos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analisis: resumen }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al guardar");
      setGuardado(data.id as number);
    } catch {
      setMensaje("No se pudo guardar en el historial. Intenta de nuevo.");
    } finally {
      setGuardando(false);
    }
  }


  async function analizar(body: FormData | string) {
    setEstado("analizando");
    setMensaje(body instanceof FormData ? "Leyendo y analizando tus documentos…" : "Analizando los documentos de ejemplo…");
    try {
      const res = await fetch("/api/analizar", {
        method: "POST",
        ...(body instanceof FormData ? { body } : { headers: { "Content-Type": "application/json" }, body }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al analizar");
      sessionStorage.setItem(CLAVE_ANALISIS, JSON.stringify(data.analisis));
      setResumen(data.analisis as Analisis);
      setEstado("listo");
      setMensaje("");
    } catch (e) {
      setEstado("error");
      setMensaje(e instanceof Error ? e.message : "Error inesperado");
    }
  }

  function alElegir(lista: FileList | null) {
    setArchivos(lista ? Array.from(lista) : []);
    setEstado("inicial");
    setResumen(null);
  }

  const confianzaProm = resumen?.npos.length
    ? Math.round(resumen.npos.reduce((s, n) => s + n.confianza, 0) / resumen.npos.length)
    : 0;

  return (
    <>
      <div className="dropzone">
        <strong>Arrastra aquí los documentos de la empresa</strong>
        <p className="muted">
          PDF, Word y texto plano · hasta 8 archivos de 10 MB cada uno
        </p>
        <label className="btn btn-solid zona-label">
          Seleccionar archivos
          <input
            type="file"
            multiple
            accept=".pdf,.docx,.txt,.md,.csv"
            onChange={(e) => alElegir(e.target.files)}
          />
        </label>
      </div>

      {archivos.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <p className="section-sub muted">Documentos seleccionados:</p>
          {archivos.map((f) => (
            <span className="doc-chip" key={f.name}>
              📄 {f.name} <span className="muted">· {(f.size / 1024).toFixed(0)} KB</span>
            </span>
          ))}
          <div style={{ marginTop: 14 }}>
            <button
              className="btn btn-solid"
              disabled={estado === "analizando"}
              onClick={() => {
                const fd = new FormData();
                archivos.forEach((f) => fd.append("archivos", f));
                analizar(fd);
              }}
            >
              Analizar {archivos.length} documento{archivos.length > 1 ? "s" : ""} con IA →
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: 18, textAlign: "center" }}>
        <p className="muted" style={{ fontSize: "0.85rem" }}>
          ¿No tienes documentos a mano? Prueba con los nuestros:
        </p>
        <button
          className="btn btn-borde"
          disabled={estado === "analizando"}
          onClick={() => analizar(JSON.stringify({ demo: true }))}
        >
          Usar documentos de ejemplo
        </button>
      </div>

      {estado === "analizando" && (
        <div className="estado-analisis">
          <span className="cargando">⏳</span> {mensaje}
        </div>
      )}

      {estado === "error" && (
        <div className="estado-analisis estado-error">⚠️ {mensaje}</div>
      )}

      {estado === "listo" && resumen && (
        <div className="estado-analisis estado-listo">
          <strong>✅ Análisis completado.</strong> Se leyeron{" "}
          {resumen.documentos.length} documento(s) y se detectaron{" "}
          {resumen.npos.length} hallazgos con {confianzaProm}% de confianza
          promedio.
          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/diagnostico/resultado" className="btn btn-solid">
              Ver el análisis en el paso 2 →
            </a>
            {!guardado ? (
              <button className="btn btn-borde" disabled={guardando} onClick={guardar}>
                {guardando ? "Guardando…" : "💾 Guardar en el historial"}
              </button>
            ) : (
              <>
                <span className="guardado-ok">Guardado como #{guardado} ✔</span>
                <a href="/diagnostico/historial" className="btn btn-borde">
                  Ver historial →
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
