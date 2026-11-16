"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/Section";
import { AvisoEjemplo, useAnalisis } from "@/lib/useAnalisis";
import type { Iniciativa } from "@/lib/pln";

/** Celdas de la matriz de priorización */
type Celda = "ganancia" | "desafio" | "minor" | "relleno";

/** Clasificación automática de una iniciativa según impacto y esfuerzo */
export function clasificar(impacto: number, esfuerzo: number): Celda {
  if (impacto >= 6 && esfuerzo <= 5) return "ganancia";
  if (impacto >= 6 && esfuerzo > 5) return "desafio";
  if (impacto < 6 && esfuerzo <= 5) return "minor";
  return "relleno";
}

const CELDAS: Record<Celda, string[]> = {
  ganancia: ["Ganancia rápida", "Hacer primero"],
  desafio: ["Proyectos grandes", "Planear con cuidado"],
  minor: ["Apoyo", "Hacer si hay tiempo"],
  relleno: ["Por ahora no", "Reevaluar luego"],
};

/** Paso 3: matriz interactiva (arrastrar y soltar) + plan por horizontes */
export default function HojaRutaCliente({ id }: { id?: string }) {
  const { analisis, esEjemplo, cargando } = useAnalisis(id);
  const [posiciones, setPosiciones] = useState<Record<string, Celda>>({});
  const [arrastrando, setArrastrando] = useState<string | null>(null);

  // Recalcular la matriz cuando cambia el análisis
  useEffect(() => {
    const inicial: Record<string, Celda> = {};
    analisis.iniciativas.forEach((i) => {
      inicial[i.id] = clasificar(i.impacto, i.esfuerzo);
    });
    setPosiciones(inicial);
  }, [analisis]);

  if (cargando) {
    return (
      <div className="estado-analisis">
        <span className="cargando">⏳</span> Cargando hoja de ruta…
      </div>
    );
  }

  const iniciativas: Iniciativa[] = analisis.iniciativas;

  function soltar(e: React.DragEvent, celda: Celda) {
    e.preventDefault();
    if (arrastrando) {
      setPosiciones((p) => ({ ...p, [arrastrando]: celda }));
    }
    setArrastrando(null);
  }

  return (
    <>
      {esEjemplo && <AvisoEjemplo />}

      {iniciativas.length === 0 ? (
        <div className="estado-analisis">
          No se generaron iniciativas: los documentos no evidenciaron hallazgos
          mapeables. Prueba con los documentos de ejemplo del paso 1.
        </div>
      ) : (
        <>
          <Section
            titulo="Matriz de impactos vs. esfuerzo"
            subtitulo="Arrastra cada iniciativa a otra celda para repriorizarla"
          >
            <div className="matriz">
              <div className="matriz-eje-y">IMPACTO ↑</div>
              <div className="matriz-grid">
                {(["ganancia", "desafio", "minor", "relleno"] as Celda[]).map((celda) => (
                  <div
                    className={`matriz-celda mc-${celda} ${arrastrando ? "matriz-drop" : ""}`}
                    key={celda}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => soltar(e, celda)}
                  >
                    <h4>{CELDAS[celda][0]}</h4>
                    {iniciativas
                      .filter((i) => (posiciones[i.id] ?? clasificar(i.impacto, i.esfuerzo)) === celda)
                      .map((i) => (
                        <div
                          className="matriz-item"
                          key={i.id}
                          draggable
                          onDragStart={() => setArrastrando(i.id)}
                          onDragEnd={() => setArrastrando(null)}
                          title="Arrastra para cambiar de celda"
                        >
                          {i.nombre}
                          <div className="matriz-horizonte">
                            {i.horizonte} · impacto {i.impacto} · esfuerzo {i.esfuerzo}
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
                <div className="matriz-eje-x">ESFUERZO →</div>
              </div>
            </div>
            <p className="muted" style={{ marginTop: 12, fontSize: "0.85rem" }}>
              La celda donde caiga cada iniciativa define su prioridad: arriba a
              la izquierda = hacer primero. El horizonte de la lista de abajo
              conserva el plan original.
            </p>
          </Section>

          <Section titulo="El plan por horizontes" subtitulo="La misma priorización, organizada como plan de trabajo">
            <div className="grid grid-3">
              {(["Corto plazo", "Mediano plazo", "Largo plazo"] as const).map((h, idx) => (
                <div className={`card ${["card-verde", "card-amarillo", "card-azul"][idx]}`} key={h}>
                  <h3>{h}</h3>
                  <ul>
                    {iniciativas
                      .filter((i) => i.horizonte === h)
                      .map((i) => (
                        <li key={i.id}>{i.nombre}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}
    </>
  );
}
