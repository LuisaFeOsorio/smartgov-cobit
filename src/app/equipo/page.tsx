import Link from "next/link";
import { Section, Card, ValorList } from "@/components/Section";
import { proyecto } from "@/data/proyecto";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "El equipo — SmartGov COBIT" };

export default function EquipoPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> Equipo
      </p>

      <div className="hero">
        <h1>
          El equipo: <span>tres unidades, una plataforma</span>
        </h1>
        <p>
          Un equipo pequeño y multidisciplinario atiende muchos clientes porque
          la IA hace el trabajo pesado y los humanos aportan lo que la máquina
          no puede: criterio, contexto y confianza.
        </p>
      </div>

      <Section>
        <div className="img-par">
          <img src="/img/equipo.svg" alt="Ilustración del equipo: tres unidades" />
          <div>
            <p style={{ marginBottom: 12 }}>
              <strong>Unidad técnica.</strong> Construye y mantiene la
              plataforma: la aplicación web, el motor de PLN y la infraestructura
              en la nube. Es la que hace que un documento cargado se convierta en
              un hallazgo con evidencia.
            </p>
            <p style={{ marginBottom: 12 }}>
              <strong>Unidad consultiva.</strong> Consultores senior certificados
              en COBIT. Validan cada diagnóstico, sostienen las sesiones de
              asesoría y acompañan la ejecución de la hoja de ruta.
            </p>
            <p>
              <strong>Unidad administrativa.</strong> Ventas, jurídico y
              operación: acercan el producto a las empresas, formalizan los
              contratos y mantienen la caja.
            </p>
          </div>
        </div>
      </Section>

      <Section titulo="Roles por unidad" subtitulo="Qué hace cada pieza del rompecabezas">
        <div className="grid grid-3">
          {proyecto.equipo.unidades.map((u, idx) => (
            <Card key={u.nombre} titulo={u.nombre} badge={u.descripcion}>
              <ul>
                {u.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section titulo="Cómo trabajamos juntos" subtitulo="El ciclo de una entrega tipo">
        <div className="grid grid-4">
          <Card titulo="1. El cliente carga">
            <ul>
              <li>La empresa sube sus documentos</li>
              <li>La unidad técnica asegura el proceso</li>
            </ul>
          </Card>
          <Card titulo="2. La IA analiza">
            <ul>
              <li>El motor detecta y clasifica hallazgos</li>
              <li>Todos con evidencia trazable</li>
            </ul>
          </Card>
          <Card titulo="3. El experto valida">
            <ul>
              <li>La unidad consultiva revisa y ajusta</li>
              <li>Entrega el informe aprobado</li>
            </ul>
          </Card>
          <Card titulo="4. El plan se ejecuta">
            <ul>
              <li>Seguimiento con KPIs</li>
              <li>Administrativa sostiene la relación</li>
            </ul>
          </Card>
        </div>
        <ValorList items={proyecto.propuestaValor} />
      </Section>

      <CtaFinal texto="¿Quieres conocer cómo empieza un proyecto?" ctaHref="/metodo" ctaTexto="Ver el método" />
    </>
  );
}
