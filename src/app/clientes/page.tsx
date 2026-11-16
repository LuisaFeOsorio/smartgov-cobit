import { Section, Card, ValorList } from "@/components/Section";
import { clientes } from "@/data/clientes";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Clientes — SmartGov COBIT" };

export default function ClientesPage() {
  const bloques = [
    clientes.segmento,
    clientes.sectores,
    clientes.quienDecide,
    clientes.empresaIdeal,
  ];

  return (
    <>
      <div className="hero hero-amarillo">
        <h1>
          Perfil del cliente: <span>a quién va dirigido</span>
        </h1>
        <p>
          Empresas medianas y grandes de Colombia y Latinoamérica, públicas y
          privadas, en sectores con exigencias regulatorias y presión por
          justificar la inversión en TI.
        </p>
      </div>

      <Section>
        <div className="grid grid-4">
          {bloques.map((b) => (
            <Card key={b.titulo} titulo={b.titulo}>
              <ul>
                {b.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <ValorList items={clientes.propuestaValor} />
      </Section>

      <Section titulo="Sectores objetivo" subtitulo="Focos iniciales de la estrategia comercial">
        <div className="grid grid-3">
          <Card titulo="Financiero y aseguradoras">
            <ul>
              <li>Supervisión directa de Superfinanciera</li>
              <li>Alta exigencia de evidencia y trazabilidad</li>
            </ul>
          </Card>
          <Card titulo="Educación superior y salud (IPS/EPS)">
            <ul>
              <li>Regulación de datos y continuidad de servicio</li>
              <li>Decisiones de TI justificadas ante consejos</li>
            </ul>
          </Card>
          <Card titulo="Logística, transporte y gobierno">
            <ul>
              <li>Operaciones críticas con múltiples proveedores</li>
              <li>Lineamientos de MinTIC para entidades públicas</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section titulo="¿Por qué compran?" subtitulo="Los tres roles que deciden la compra">
        <div className="grid grid-3">
          <Card titulo="Jefe de TI">
            <ul>
              <li>Necesita justificar lo que invierte</li>
              <li>Gana un tablero claro ante la junta</li>
            </ul>
          </Card>
          <Card titulo="Riesgo y auditoría">
            <ul>
              <li>Necesitan pruebas objetivas</li>
              <li>Trazabilidad algorítmica de cada hallazgo</li>
            </ul>
          </Card>
          <Card titulo="Planeación">
            <ul>
              <li>Une la TI con el negocio</li>
              <li>Hoja de ruta priorizada por impacto</li>
            </ul>
          </Card>
        </div>
      </Section>

      <CtaFinal texto="¿Tu empresa tiene los documentos y quieres una primera lectura con IA?" ctaHref="/contacto" />
    </>
  );
}
