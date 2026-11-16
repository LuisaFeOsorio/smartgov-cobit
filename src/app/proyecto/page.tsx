import { Section, Card, ValorList } from "@/components/Section";
import { proyecto } from "@/data/proyecto";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Proyecto — SmartGov COBIT" };

export default function ProyectoPage() {
  return (
    <>
      <div className="hero hero-rojo">
        <h1>
          Naturaleza del proyecto: <span>privado e intangible</span>
        </h1>
        <p>
          SmartGov COBIT es una empresa privada que vende a empresas (B2B). Su
          producto es intangible: software en la nube, informes, matriz, hoja de
          ruta, conocimiento y asesoría experta.
        </p>
      </div>

      <Section titulo="Esencia del proyecto">
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
        </div>
      </Section>

      <Section titulo="Equipo" subtitulo="Tres unidades complementarias">
        <div className="grid grid-3">
          {proyecto.equipo.unidades.map((u) => (
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

      <Section titulo="Modelo de negocio">
        <div className="grid grid-3">
          {proyecto.modeloNegocio.items.map((i) => (
            <Card key={i}>
              <p style={{ fontWeight: 600 }}>{i}</p>
            </Card>
          ))}
        </div>
        <ValorList items={proyecto.propuestaValor} />
      </Section>

      <Section titulo="Escalabilidad" subtitulo="Por qué el modelo crece sin que los costos se disparen">
        <div className="grid grid-3">
          <Card titulo="La IA hace el trabajo pesado">
            <ul>
              <li>Lectura y análisis automático de documentos</li>
              <li>Consultores enfocados en validación y criterio</li>
            </ul>
          </Card>
          <Card titulo="Ingresos recurrentes">
            <ul>
              <li>Suscripción SaaS mensual o anual</li>
              <li>Proyectos de consultoría adicionales</li>
            </ul>
          </Card>
          <Card titulo="Costos desacoplados">
            <ul>
              <li>Un equipo pequeño atiende muchos clientes</li>
              <li>La plataforma escala en la nube</li>
            </ul>
          </Card>
        </div>
      </Section>

      <CtaFinal texto="¿Interesado en el proyecto o en una inversión?" ctaHref="/contacto" ctaTexto="Escríbenos" />
    </>
  );
}
