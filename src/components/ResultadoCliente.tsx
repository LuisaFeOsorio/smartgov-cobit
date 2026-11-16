"use client";

import { Section, Card } from "@/components/Section";
import { AvisoEjemplo, useAnalisis } from "@/lib/useAnalisis";

/** Paso 2: NPO detectadas + informe de brechas, del análisis propio o de ejemplo */
export default function ResultadoCliente({ id }: { id?: string }) {
  const { analisis, esEjemplo, cargando } = useAnalisis(id);

  if (cargando) {
    return (
      <div className="estado-analisis">
        <span className="cargando">⏳</span> Cargando análisis…
      </div>
    );
  }

  const dominios = [...new Set(analisis.madurez.map((m) => m.dominio))];

  return (
    <>
      {esEjemplo && <AvisoEjemplo />}

      <Section titulo="Documentos analizados" subtitulo="Lo que la IA leyó en este diagnóstico">
        <table className="tabla">
          <thead>
            <tr>
              <th>Documento</th>
              <th>Caracteres</th>
              <th>Frases analizadas</th>
              <th>Hallazgos</th>
            </tr>
          </thead>
          <tbody>
            {analisis.documentos.map((d) => (
              <tr key={d.nombre}>
                <td>{d.nombre}</td>
                <td>{d.caracteres.toLocaleString("es-CO")}</td>
                <td>{d.frases}</td>
                <td>
                  <strong>{d.hallazgos}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section titulo="NPO detectadas" subtitulo="Necesidades, problemas y oportunidades extraídas automáticamente">
        <table className="tabla">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Hallazgo</th>
              <th>Documento</th>
              <th>Objetivos COBIT</th>
              <th>Confianza</th>
            </tr>
          </thead>
          <tbody>
            {analisis.npos.map((n) => (
              <tr key={n.id}>
                <td>{n.id}</td>
                <td>
                  <span className={`tag tag-${n.tipo.toLowerCase()}`}>{n.tipo}</span>
                </td>
                <td>
                  {n.texto}
                  {n.senales.length > 0 && (
                    <div style={{ marginTop: 4, display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {n.senales.map((s) => (
                        <span key={s} className="senal">
                          🔍 {s}
                        </span>
                      ))}
                    </div>
                  )}
                </td>
                <td className="muted">{n.documento}</td>
                <td>{n.objetivos.join(", ")}</td>
                <td>
                  <span className="confianza" style={{ color: n.confianza >= 85 ? "#2e7d32" : "#f9a825" }}>
                    {n.confianza}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <span className="badge chip-azul">Necesidad: lo que la empresa requiere</span>
          <span className="badge tag-problema" style={{ padding: "3px 10px" }}>Problema: lo que está fallando</span>
          <span className="badge chip-verde">Oportunidad: lo que se puede mejorar</span>
        </div>
      </Section>

      <Section titulo="Informe de brechas" subtitulo="Madurez actual vs. nivel objetivo por objetivo COBIT 2019 (escala 0–5)">
        <div className="card">
          {analisis.madurez.map((m) => (
            <div className="barra-fila" key={m.objetivo}>
              <div className="barra-objetivo">
                {m.objetivo} <small>{m.nombre}</small>
              </div>
              <div className="barra-track">
                <div className="barra-actual" style={{ width: `${(m.actual / 5) * 100}%` }} />
                <div className="barra-meta" style={{ left: `${(m.objetivoNivel / 5) * 100}%` }} />
              </div>
              <div className="barra-valores">
                {m.actual.toFixed(1)} → {m.objetivoNivel.toFixed(1)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section titulo="Dominios COBIT involucrados" subtitulo="Cada hallazgo cae en uno de los 5 dominios del marco">
        <div className="grid grid-4">
          {dominios.map((d) => (
            <Card key={d}>
              <p style={{ fontWeight: 700, color: "var(--azul)" }}>{d}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
