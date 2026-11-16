import Link from "next/link";
import { Section, Card } from "@/components/Section";
import CtaFinal from "@/components/CtaFinal";

export default function Home() {
  return (
    <>
      {/* Hero profesional: título en bloque azul, subtítulo en bloque blanco */}
      <div className="hero-bloque">
        <div className="hero-principal">
          <h1>
            Diagnósticos de gobierno de TI con <span>COBIT 2019</span> en horas,
            no en semanas
          </h1>
        </div>
        <div className="hero-sub">
          <p>
            SmartGov COBIT combina inteligencia artificial y consultores
            expertos. Pruébalo ahora mismo con datos de ejemplo, sin registro.
          </p>
          <div className="hero-cta">
            <Link href="/diagnostico" className="btn btn-solid">
              ▶ Probar la demo ahora
            </Link>
            <Link href="/producto" className="btn btn-borde">
              Conocer el producto
            </Link>
          </div>
        </div>
      </div>

      {/* La demo en 4 pasos: lo funcional, primero */}
      <Section
        titulo="La demo en 4 pasos"
        subtitulo="Del documento al plan de acción, todo dentro de la plataforma"
      >
        <div className="grid grid-4">
          <Card titulo="1 · Carga tus documentos">
            <ul>
              <li>Plan tecnológico, informes, actas y contratos</li>
              <li><Link href="/diagnostico"><strong>Empezar aquí →</strong></Link></li>
            </ul>
          </Card>
          <Card titulo="2 · La IA analiza">
            <ul>
              <li>Extrae necesidades, problemas y oportunidades</li>
              <li><Link href="/diagnostico/resultado">Ver el análisis →</Link></li>
            </ul>
          </Card>
          <Card titulo="3 · Recibe tu hoja de ruta">
            <ul>
              <li>Matriz de impactos y plan priorizado</li>
              <li><Link href="/diagnostico/hoja-de-ruta">Ver la hoja de ruta →</Link></li>
            </ul>
          </Card>
          <Card titulo="4 · Da seguimiento">
            <ul>
              <li>KPIs y asesoría continua de expertos</li>
              <li><Link href="/diagnostico/seguimiento">Ver el seguimiento →</Link></li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* El método, de un vistazo (visual, sin mucho texto) */}
      <Section titulo="El método en un vistazo" subtitulo="La IA lee tus documentos; el experto valida y prioriza">
        <div className="img-par">
          <img src="/img/fase-hoja-ruta.svg" alt="Camino azul con hitos: la hoja de ruta" />
          <div>
            <p style={{ marginBottom: 10 }}>
              <strong>Diagnóstico con IA</strong> en minutos, cada hallazgo
              trazado a su documento de origen.
            </p>
            <p>
              <strong>Plan priorizado</strong> por impacto y esfuerzo, con
              seguimiento por KPIs.
            </p>
            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/metodo" className="btn btn-borde btn-mini">
                Ver el método
              </Link>
              <Link href="/fases" className="btn btn-borde btn-mini">
                Ver las 3 fases
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Más información, sin bloquear: enlaces compactos */}
      <Section titulo="¿Quieres más detalle?" subtitulo="Todo disponible desde el menú ☰, o directo desde aquí">
        <div className="grid grid-4">
          <Card titulo="Contexto y problema">
            <ul>
              <li>Por qué existe la plataforma</li>
              <li><Link href="/contexto">Leer →</Link></li>
            </ul>
          </Card>
          <Card titulo="Casos ilustrativos">
            <ul>
              <li>3 escenarios del sector real</li>
              <li><Link href="/casos">Ver →</Link></li>
            </ul>
          </Card>
          <Card titulo="Glosario COBIT">
            <ul>
              <li>15 términos en lenguaje sencillo</li>
              <li><Link href="/glosario">Consultar →</Link></li>
            </ul>
          </Card>
          <Card titulo="Preguntas frecuentes">
            <ul>
              <li>Las 10 de siempre, respondidas</li>
              <li><Link href="/preguntas">Ver →</Link></li>
            </ul>
          </Card>
        </div>
      </Section>

      <CtaFinal
        texto="¿Listo para ver la plataforma en acción?"
        ctaHref="/diagnostico"
        ctaTexto="▶ Probar la demo"
      />
    </>
  );
}
