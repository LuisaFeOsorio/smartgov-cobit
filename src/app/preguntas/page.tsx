import Link from "next/link";
import { Section } from "@/components/Section";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Preguntas frecuentes — SmartGov COBIT" };

const faqs = [
  {
    q: "¿Qué es exactamente SmartGov COBIT?",
    a: "Una plataforma en la nube que diagnostica el gobierno de TI de tu empresa con el marco COBIT 2019. La IA lee tus documentos y detecta necesidades, problemas y oportunidades; los consultores expertos validan y construyen contigo la hoja de ruta. Es consultoría híbrida: tecnología + criterio humano.",
  },
  {
    q: "¿Cuánto dura un diagnóstico?",
    a: "El análisis automático toma minutos. El proyecto completo, incluyendo la sesión de validación con el experto y la entrega del plan, se resuelve en semanas, no en los 6 meses que puede tomar una consultoría tradicional. La propuesta de valor concreta: 60% menos tiempo.",
  },
  {
    q: "¿Qué documentos necesito tener?",
    a: "Todo lo que ya exista en tu empresa: plan tecnológico, informes de TI, actas de junta, contratos con proveedores, políticas y manuales. Cuanta más documentación escrita tengas, más completo será el diagnóstico. Si no tienes todo, la plataforma te indica qué falta.",
  },
  {
    q: "¿Mis documentos están seguros?",
    a: "El análisis corre dentro de la aplicación: los documentos no se envían a servicios externos de terceros. Al 100% de la plataforma, todo se almacena cifrado y con control de acceso por roles.",
  },
  {
    q: "¿Por qué necesitamos COBIT 2019?",
    a: "Porque es el lenguaje estándar del gobierno de TI: los auditores, los reguladores (Superfinanciera, MinTIC) y las juntas directivas lo entienden. Hablar COBIT convierte tu esfuerzo técnico en evidencia que la alta dirección puede aprobar.",
  },
  {
    q: "¿La IA puede equivocarse?",
    a: "Puede, como cualquier algoritmo. Por eso el método es híbrido: cada hallazgo se detecta con señales claras del texto (tú puedes ver la evidencia) y un consultor experto lo valida antes de entregarlo. Control humano por diseño.",
  },
  {
    q: "¿Qué me entrega al final?",
    a: "Tres cosas: el informe de brechas con la madurez por objetivo COBIT, la matriz de priorización de iniciativas (impacto vs. esfuerzo) y el plan de corto, mediano y largo plazo. Todo trazado a tus documentos.",
  },
  {
    q: "¿Necesito contratar consultores aparte?",
    a: "No. El servicio incluye la validación y asesoría de consultores senior certificados en COBIT, según el plan que elijas.",
  },
  {
    q: "¿Sirve para empresas pequeñas?",
    a: "El foco inicial son medianas y grandes empresas de Colombia y Latinoamérica, porque son las que enfrentan presión regulatoria y no pueden pagar firmas multinacionales. El modelo es escalable: la IA hace el trabajo pesado, así que el costo no crece al ritmo del tamaño.",
  },
  {
    q: "¿Cómo se cobra?",
    a: "Con dos piezas: una suscripción SaaS recurrente por el uso de la plataforma, y tarifas por proyecto cuando se requiere consultoría adicional. Mira los planes ilustrativos en la sección Precios.",
  },
];

export default function PreguntasPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> Preguntas frecuentes
      </p>

      <div className="hero">
        <h1>
          Preguntas <span>frecuentes</span>
        </h1>
        <p>
          Las diez preguntas que respondería cualquier directivo antes de
          contratar, respondidas de frente.
        </p>
      </div>

      <Section>
        {faqs.map((f, i) => (
          <div className="pregunta" key={f.q}>
            <h3>
              {i + 1}. {f.q}
            </h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Section>

      <CtaFinal texto="¿Tu pregunta no está aquí?" ctaHref="/contacto" ctaTexto="Escríbenos directamente" />
    </>
  );
}
