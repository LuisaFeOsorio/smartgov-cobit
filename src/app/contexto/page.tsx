import { Section, Card, ValorList } from "@/components/Section";
import { contexto } from "@/data/contexto";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Contexto — SmartGov COBIT" };

export default function ContextoPage() {
  return (
    <>
      <div className="hero hero-verde">
        <h1>
          Necesidad, problema <span>u oportunidad</span>
        </h1>
        <p>
          Por qué existe el proyecto: el gobierno de TI es crítico, pero el
          método tradicional para diagnosticarlo es lento, caro y difícil de
          justificar.
        </p>
      </div>

      <Section>
        <div className="grid grid-2">
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

      <Section titulo="Cómo lo resolvemos" subtitulo="La IA y el PLN cambian la ecuación">
        <div className="grid grid-3">
          <Card titulo="Velocidad">
            <ul>
              <li>La IA lee documentos en minutos, no semanas</li>
              <li>Detección automática de brechas y NPO</li>
            </ul>
          </Card>
          <Card titulo="Trazabilidad">
            <ul>
              <li>Cada hallazgo cita su documento de origen</li>
              <li>Evidencia objetiva para auditorías y junta</li>
            </ul>
          </Card>
          <Card titulo="Control humano">
            <ul>
              <li>Expertos senior validan cada diagnóstico</li>
              <li>Ética por diseño, sin alucinaciones</li>
            </ul>
          </Card>
        </div>
      </Section>

      <CtaFinal
        texto="Ya entiendes el problema. El siguiente paso es conocer la solución."
        ctaHref="/producto"
        ctaTexto="Siguiente: el producto →"
      />
    </>
  );
}
