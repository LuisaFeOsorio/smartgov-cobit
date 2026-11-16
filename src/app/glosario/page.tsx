import Link from "next/link";
import { Section } from "@/components/Section";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Glosario COBIT — SmartGov COBIT" };

const terminos = [
  {
    t: "COBIT 2019",
    d: "Marco internacional de gobierno de TI publicado por ISACA. Define cómo dirigir y gestionar la tecnología de una empresa alineada con sus metas de negocio. Es el estándar de referencia en auditorías y regulación.",
  },
  {
    t: "Objetivo COBIT",
    d: "Cada una de las 40 metas concretas que el marco define. Por ejemplo, DSS05 (servicios de seguridad) o EDM01 (marco de gobierno). Se abrevian con el código del dominio + número.",
  },
  {
    t: "Dominio",
    d: "Los 5 grandes grupos que organizan los 40 objetivos: EDM (Evaluar, Dirigir y Monitorear), APO (Alinear, Planear y Organizar), BAI (Construir, Adquirir e Implementar), DSS (Entregar, dar Servicio y Soporte) y MEA (Monitorear, Evaluar y Analizar).",
  },
  {
    t: "Factores de diseño",
    d: "Los 11 contextos que hacen que el mismo marco se aplique distinto en cada empresa: estrategia, perfil de riesgo, regulación, tamaño, rol de la TI, cultura, entre otros. Determinan el nivel de madurez al que vale la pena apuntar.",
  },
  {
    t: "NPO",
    d: "Necesidad, Problema u Oportunidad. Es la unidad de hallazgo de nuestra plataforma: cada frase de tus documentos que evidencia algo que la empresa requiere (N), algo que está fallando (P) o algo que puede mejorar (O).",
  },
  {
    t: "Madurez (escala 0–5)",
    d: "El nivel de formalidad de un proceso: 0 inexistente, 1 inicial/ad hoc, 2 repetible pero intuitivo, 3 definido y documentado, 4 gestionado con métricas, 5 optimizado continuamente.",
  },
  {
    t: "Brecha",
    d: "La distancia entre tu madurez actual y el nivel objetivo recomendado. Si tu seguridad está en 1,4 y el objetivo es 4,0, esa brecha de 2,6 puntos es lo que el plan debe cerrar.",
  },
  {
    t: "PLN (procesamiento de lenguaje natural)",
    d: "La rama de la IA que entiende texto escrito. Nuestro motor analiza tus documentos frase por frase buscando señales lingüísticas de necesidades, problemas y oportunidades.",
  },
  {
    t: "Trazabilidad",
    d: "La garantía de que cada hallazgo puede rastrearse hasta su origen exacto: qué documento lo dijo, qué señales del texto lo dispararon y con qué confianza se detectó. Sin ella, un diagnóstico es una opinión.",
  },
  {
    t: "Control humano",
    d: "El principio de que la IA nunca decide sola: un consultor experto valida cada hallazgo antes de que llegue al informe. Protege contra errores e 'alucinaciones' de los algoritmos.",
  },
  {
    t: "Hoja de ruta",
    d: "El plan priorizado de iniciativas que cierra las brechas detectadas, organizado en corto (0–6 meses), mediano (6–18 meses) y largo plazo (18+ meses).",
  },
  {
    t: "Matriz impacto vs. esfuerzo",
    d: "Herramienta de priorización: cada iniciativa se ubica según cuánto mejora el gobierno (impacto) y cuánto cuesta implementarla (esfuerzo). Lo de arriba a la izquierda se hace primero.",
  },
  {
    t: "KPI (indicador clave de desempeño)",
    d: "Métrica que muestra si el plan está funcionando: tiempo de respuesta a incidentes, cumplimiento de reportes regulatorios, madurez promedio, entre otras.",
  },
  {
    t: "SaaS (Software como Servicio)",
    d: "Modelo de software en la nube: no se instala nada, se usa desde el navegador con una suscripción recurrente. SmartGov COBIT funciona así.",
  },
  {
    t: "Consultoría híbrida",
    d: "Nuestro modelo: la plataforma (IA + PLN) hace el trabajo pesado de lectura y análisis; los consultores expertos aportan criterio, contexto y validación. Más rápido y más barato que consultoría tradicional, más confiable que IA sola.",
  },
];

export default function GlosarioPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> Glosario
      </p>

      <div className="hero">
        <h1>
          Glosario <span>COBIT y del proyecto</span>
        </h1>
        <p>
          Todos los términos que necesitas para entender la plataforma, el marco
          y este proyecto, explicados en lenguaje sencillo.
        </p>
      </div>

      <Section>
        <div className="grid grid-2">
          {terminos.map((x) => (
            <div className="definicion" key={x.t}>
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaFinal
        texto="¿Quieres ver estos conceptos aplicados a documentos reales?"
        ctaHref="/diagnostico"
        ctaTexto="Probar el diagnóstico"
      />
    </>
  );
}
