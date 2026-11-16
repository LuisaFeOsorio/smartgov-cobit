"use client";

import { Section, Card } from "@/components/Section";
import { AvisoEjemplo, useAnalisis } from "@/lib/useAnalisis";

/** Paso 4: KPIs de seguimiento, calculados con el análisis propio o de ejemplo */
export default function SeguimientoCliente({ id }: { id?: string }) {
  const { analisis, esEjemplo, cargando } = useAnalisis(id);

  if (cargando) {
    return (
      <div className="estado-analisis">
        <span className="cargando">⏳</span> Cargando seguimiento…
      </div>
    );
  }

  return (
    <>
      {esEjemplo && <AvisoEjemplo />}

      <Section titulo="Tablero de KPIs" subtitulo="Calculados a partir de tu diagnóstico">
        <div className="grid grid-4">
          {analisis.kpis.map((k) => (
            <div className="kpi" key={k.nombre}>
              <small>{k.nombre}</small>
              <span className="kpi-valor">{k.valor}</span>
              <p className="kpi-meta">Meta: {k.meta}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section titulo="Registro de asesoría" subtitulo="Bitácora de sesiones con los consultores expertos">
        <div className="grid grid-2">
          <Card titulo="Sesión 1 · Enero 2026">
            <ul>
              <li>Revisión del plan de seguridad alineado a regulación</li>
              <li>Compromiso: definir responsables de incidentes</li>
            </ul>
          </Card>
          <Card titulo="Sesión 2 · Marzo 2026">
            <ul>
              <li>Avance del tablero de KPIs para la junta</li>
              <li>Compromiso: completar acuerdos con proveedores</li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
