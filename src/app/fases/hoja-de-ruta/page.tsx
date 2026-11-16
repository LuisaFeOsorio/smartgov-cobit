import Link from "next/link";
import { Section, Card, ValorList } from "@/components/Section";
import { AlCien } from "@/components/Explica";
import { producto } from "@/data/producto";
import { iniciativasMock } from "@/data/cobit";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Fase 2 · Hoja de ruta — SmartGov COBIT" };

export default function FaseHojaRutaPage() {
  const fase = producto.fases[1];
  const porHorizonte = ["Corto plazo", "Mediano plazo", "Largo plazo"] as const;

  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/producto">Producto</Link> <span>›</span> Fase 2
      </p>

      <div className="hero hero-amarillo" style={{ padding: "34px 28px 30px" }}>
        <h1>
          <span>{fase.titulo}</span>
        </h1>
        <p>{fase.descripcion}</p>
      </div>

      <Section>
        <div className="img-par">
          <img src="/img/fase-hoja-ruta.svg" alt="Camino dorado con hitos hasta la meta" />
          <div>
            <p>
              <strong>Del hallazgo a la decisión.</strong> Los expertos revisan
              el diagnóstico y lo convierten en iniciativas concretas. La matriz
              de impactos vs. esfuerzo define el orden, y el plan de tres
              horizontes define el ritmo. El resultado es un camino que la junta
              puede aprobar en una reunión.
            </p>
          </div>
        </div>
      </Section>

      <Section titulo="Qué hace esta fase, paso a paso">
        <div className="grid grid-3">
          {fase.pasos.map((p, i) => (
            <Card key={p}>
              <span className="badge chip-amarillo">Paso {i + 1}</span>
              <p style={{ fontWeight: 600, marginTop: 8 }}>{p}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section titulo="Plan priorizado" subtitulo="Ejemplo con datos de prueba: iniciativas organizadas por horizonte">
        <div className="grid grid-3">
          {porHorizonte.map((h, idx) => (
            <Card key={h} titulo={h}>
              <ul>
                {iniciativasMock
                  .filter((ini) => ini.horizonte === h)
                  .map((ini) => (
                    <li key={ini.id}>{ini.nombre}</li>
                  ))}
              </ul>
            </Card>
          ))}
        </div>
        <ValorList items={[fase.pasos[1], fase.pasos[2]]} />
      </Section>

      <AlCien
        color="amarillo"
        titulo="Si la plataforma estuviera al 100%, esta fase haría:"
        items={[
          "Presentar el diagnóstico de la Fase 1 a tus consultores expertos para su revisión en la plataforma",
          "Sostener sesiones de validación con los expertos, agendadas y documentadas en línea",
          "Construir la matriz de impactos vs. esfuerzo con cada hallazgo convertido en iniciativa concreta",
          "Estimar costo, tiempo y responsable de cada iniciativa con datos de proyectos similares",
          "Generar el plan de corto, mediano y largo plazo como informe ejecutivo listo para la junta",
        ]}
      />

      <div className="navegacion-fases">
        <Link href="/fases/diagnostico" className="btn btn-borde">
          ← Fase 1 · Diagnóstico
        </Link>
        <Link href="/fases/seguimiento" className="btn btn-solid">
          Fase 3 · Seguimiento →
        </Link>
      </div>

      <CtaFinal
        texto="Explora la matriz de impactos vs. esfuerzo en la demo."
        ctaHref="/diagnostico/hoja-de-ruta"
        ctaTexto="Ver matriz (demo)"
      />
    </>
  );
}
