import Link from "next/link";
import { Section, Card, ValorList } from "@/components/Section";
import { producto } from "@/data/producto";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Producto — SmartGov COBIT" };

export default function ProductoPage() {
  return (
    <>
      <div className="hero hero-azul">
        <h1>
          Producto o servicio: <span>qué ofrecemos</span>
        </h1>
        <p>
          Una plataforma SaaS en la nube de consultoría híbrida inteligente:
          la IA hace el trabajo pesado, los expertos aportan contexto y criterio.
        </p>
      </div>

      <Section titulo="Qué es">
        <div className="grid grid-3">
          {producto.queEs.items.map((item) => (
            <Card key={item}>
              <p style={{ fontWeight: 600 }}>{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section titulo="Cómo funciona" subtitulo="Tres fases, de diagnóstico a seguimiento continuo">
        <div className="img-par" style={{ marginBottom: 24 }}>
          <img src="/img/fase-diagnostico.svg" alt="Análisis automático de documentos" />
          <div>
            <p>
              <strong>Qué entregas.</strong> Software en la nube, informes, matriz
              y hoja de ruta, conocimiento y asesoría experta. Un producto
              intangible con un efecto muy tangible: decisiones de TI que se
              pueden defender ante cualquier junta o auditor.
            </p>
          </div>
        </div>
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

      <Section titulo="Propuesta de valor en números" subtitulo="Datos ilustrativos de la plataforma">
        <div className="grid grid-4">
          <Card>
            <p className="kpi-valor">60%</p>
            <small className="muted">menos tiempo: horas vs. 6 semanas</small>
          </Card>
          <Card>
            <p className="kpi-valor">100%</p>
            <small className="muted">trazabilidad algorítmica de hallazgos</small>
          </Card>
          <Card>
            <p className="kpi-valor">24/7</p>
            <small className="muted">disponibilidad SaaS en la nube</small>
          </Card>
          <Card>
            <p className="kpi-valor">0</p>
            <small className="muted">alucinaciones: control humano ético</small>
          </Card>
        </div>
      </Section>

      <CtaFinal
        texto="Ya conoces el producto. El siguiente paso es probarlo tú mismo, sin registro."
        ctaHref="/diagnostico"
        ctaTexto="Siguiente: probar la demo →"
      />
    </>
  );
}
