import Link from "next/link";
import { Section, Card, ValorList } from "@/components/Section";
import { contexto } from "@/data/contexto";
import { producto } from "@/data/producto";
import { clientes } from "@/data/clientes";
import { proyecto } from "@/data/proyecto";
import CtaFinal from "@/components/CtaFinal";

export default function Home() {
  return (
    <>
      <div className="hero hero-imagen">
        <img src="/img/hero-principal.svg" alt="" className="hero-fondo" />
        <div className="hero-contenido">
          <h1>
            Diagnósticos de gobierno de TI con <span>COBIT 2019</span> en horas,
            no en semanas
          </h1>
          <p>
            SmartGov COBIT combina inteligencia artificial y consultores expertos
            para cerrar la brecha entre TI y las metas del negocio, con
            trazabilidad total y control humano.
          </p>
          <div className="hero-cta">
            <Link href="/diagnostico" className="btn btn-solid">
              Ver demo del diagnóstico
            </Link>
            <Link href="/producto" className="btn btn-borde">
              Conocer el producto
            </Link>
          </div>
        </div>
      </div>

      <Section
        titulo="¿Cómo navegar esta plataforma?"
        subtitulo="Un recorrido guiado en 4 pasos, con datos de ejemplo para que entiendas todo el flujo"
      >
        <div className="grid grid-4">
          <Card titulo="1 · Carga tus documentos">
            <ul>
              <li>Plan tecnológico, informes, actas y contratos</li>
              <li><Link href="/diagnostico">Empezar aquí →</Link></li>
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

      <Section titulo="El método en un vistazo" subtitulo="Una jornada de tres fases, del análisis automático al acompañamiento continuo">
        <div className="img-par">
          <img src="/img/fase-hoja-ruta.svg" alt="Camino dorado con hitos: la hoja de ruta" />
          <div>
            <p style={{ marginBottom: 12 }}>
              <strong>Fase 1 · Diagnóstico con IA.</strong> La plataforma lee tus
              documentos y detecta brechas, necesidades y oportunidades en
              minutos, cada hallazgo trazado a su documento de origen.
            </p>
            <p style={{ marginBottom: 12 }}>
              <strong>Fase 2 · Hoja de ruta.</strong> Los expertos validan el
              diagnóstico y construyen el plan priorizado por impacto y esfuerzo.
            </p>
            <p>
              <strong>Fase 3 · Seguimiento.</strong> KPIs, asesoría continua y
              evaluación periódica hasta que la mejora sea sostenible.
            </p>
            <div style={{ marginTop: 16 }}>
              <Link href="/metodo" className="btn btn-borde">
                Ver el método en detalle →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        titulo="El problema"
        subtitulo="Por qué existe SmartGov COBIT"
      >
        <div className="grid grid-4">
          {contexto.problema.items.map((g) => (
            <Card key={g.grupo} titulo={g.grupo}>
              <ul>
                {g.puntos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <ValorList items={contexto.propuestaValor} />
      </Section>

      <Section titulo="El producto" subtitulo="Consultoría híbrida inteligente en tres fases">
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

      <Section titulo="Para quién" subtitulo="Perfil del cliente">
        <div className="grid grid-4">
          {[clientes.segmento, clientes.sectores, clientes.quienDecide, clientes.empresaIdeal].map(
            (g) => (
              <Card key={g.titulo} titulo={g.titulo}>
                <ul>
                  {g.items.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Card>
            )
          )}
        </div>
        <ValorList items={clientes.propuestaValor} />
      </Section>

      <Section titulo="El proyecto" subtitulo="Privado e intangible">
        <div className="grid grid-2">
          {proyecto.esencia.items.map((g) => (
            <Card key={g.grupo} titulo={g.grupo}>
              <ul>
                {g.puntos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
          <Card titulo={proyecto.modeloNegocio.titulo}>
            <ul>
              {proyecto.modeloNegocio.items.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Card>
          <Card titulo="Equipo">
            <ul>
              {proyecto.equipo.unidades.map((u) => (
                <li key={u.nombre}>
                  <strong>{u.nombre}:</strong> {u.descripcion}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <ValorList items={proyecto.propuestaValor} />
      </Section>

      <CtaFinal
        texto="¿Listo para pasar de 6 semanas de consultoría a un diagnóstico en horas?"
        ctaHref="/contexto"
        ctaTexto="Siguiente paso: entender el problema →"
      />
    </>
  );
}
