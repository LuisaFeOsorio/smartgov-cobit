import Link from "next/link";
import { Section, ValorList } from "@/components/Section";
import { producto } from "@/data/producto";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Las 3 fases — SmartGov COBIT" };

export default function FasesPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/producto">Producto</Link> <span>›</span> Fases
      </p>

      <div className="hero">
        <h1>
          Las <span>3 fases</span> del servicio
        </h1>
        <p>
          De la lectura automática de documentos al acompañamiento continuo.
          Cada fase responde una pregunta distinta del cliente.
        </p>
      </div>

      <Section>
        <div className="timeline">
          {producto.fases.map((f) => (
            <div className="fase" key={f.id}>
              <div className="fase-num">{f.numero}</div>
              <div>
                <h3>{f.titulo}</h3>
                <p>{f.descripcion}</p>
                <div className="fase-pasos">
                  {f.pasos.map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
              </div>
              <Link href={`/fases/${f.id}`} className="fase-link">
                Ver detalle →
              </Link>
            </div>
          ))}
        </div>
        <ValorList items={producto.propuestaValor} />
      </Section>

      <Section titulo="Cómo se conectan" subtitulo="Cada fase entrega lo que la siguiente necesita">
        <div className="grid grid-3">
          <div className="card card-verde">
            <h3>Diagnóstico → Hoja de ruta</h3>
            <ul>
              <li>Los hallazgos validados se convierten en iniciativas</li>
              <li>La madurez actual define el punto de partida</li>
            </ul>
          </div>
          <div className="card card-amarillo">
            <h3>Hoja de ruta → Seguimiento</h3>
            <ul>
              <li>Las iniciativas del plan se convierten en KPIs</li>
              <li>El horizonte define los checkpoints</li>
            </ul>
          </div>
          <div className="card card-azul">
            <h3>Seguimiento → nuevo Diagnóstico</h3>
            <ul>
              <li>La reevaluación periódica mide el avance real</li>
              <li>El ciclo de mejora continua nunca termina</li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaFinal texto="¿Listo para empezar por la fase 1?" ctaHref="/diagnostico" ctaTexto="Probar el diagnóstico" />
    </>
  );
}
