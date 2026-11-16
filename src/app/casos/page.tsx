import Link from "next/link";
import { Section, ValorList } from "@/components/Section";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Casos ilustrativos — SmartGov COBIT" };

const casos = [
  {
    sector: "Financiero · Aseguradora mediana",
    color: "card-rojo",
    situacion:
      "Una aseguradora con 800 empleados enfrentaba la exigencia de Superfinanciera de evidenciar el gobierno de su TI. Su diagnóstico anterior había costado 6 semanas de consultores y la junta pedía resultados más rápidos.",
    hallazgos:
      "El análisis con IA de 7 documentos detectó 18 hallazgos: 9 problemas (entre ellos, acuerdos de nivel de servicio inexistentes con proveedores críticos), 5 necesidades regulatorias y 4 oportunidades de automatización.",
    resultado:
      "La hoja de ruta priorizó 6 iniciativas. Las 3 de corto plazo (registro de incidentes, tablero de KPIs y plan de seguridad) quedaron en ejecución en el primer trimestre.",
  },
  {
    sector: "Educación superior · Universidad",
    color: "card-amarillo",
    situacion:
      "Un consejo académico exigía justificar cada inversión tecnológica. El área de TI tenía documentación abundante pero dispersa: contratos, planes y actas en carpetas que nadie había cruzado entre sí.",
    hallazgos:
      "Con 5 documentos cargados, la plataforma detectó 14 hallazgos y los mapeó a 8 objetivos COBIT. La brecha más severa estaba en gestión de proveedores y en indicadores de desempeño.",
    resultado:
      "La matriz de impactos vs. esfuerzo permitió explicar al consejo, en una sola página, por qué las 2 iniciativas de ganancia rápida iban primero.",
  },
  {
    sector: "Salud · IPS regional",
    color: "card-verde",
    situacion:
      "Una red de salud planeaba migrar sistemas a la nube, pero sin un diagnóstico de gobierno que respaldara la inversión ante su junta directiva.",
    hallazgos:
      "El análisis evidenció que los respaldos no se ejecutaban con la periodicidad definida y que faltaba capacitación formal en seguridad de la información para el personal nuevo.",
    resultado:
      "El plan de largo plazo incluyó la migración por etapas, y las ganancias rápidas (respaldos y capacitación) se ejecutaron en paralelo mientras se aprobaba el presupuesto mayor.",
  },
];

export default function CasosPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> Casos
      </p>

      <div className="hero">
        <h1>
          Casos <span>ilustrativos</span>
        </h1>
        <p>
          Escenarios típicos de nuestros sectores objetivo, construidos con
          datos de ejemplo. Así se vería un proyecto con SmartGov COBIT en
          empresas como las tuyas.
        </p>
      </div>

      <Section>
        <div className="grid grid-2">
          {casos.map((c) => (
            <div className={`card ${c.color}`} key={c.sector}>
              <h3>{c.sector}</h3>
              <p className="muted" style={{ fontSize: "0.9rem", marginBottom: 10 }}>
                <strong style={{ color: "var(--texto)" }}>La situación:</strong>{" "}
                {c.situacion}
              </p>
              <p className="muted" style={{ fontSize: "0.9rem", marginBottom: 10 }}>
                <strong style={{ color: "var(--texto)" }}>Lo que detectó la IA:</strong>{" "}
                {c.hallazgos}
              </p>
              <p className="muted" style={{ fontSize: "0.9rem" }}>
                <strong style={{ color: "var(--texto)" }}>El resultado:</strong>{" "}
                {c.resultado}
              </p>
            </div>
          ))}
        </div>
        <ValorList items={["Les ahorra tiempo y dinero", "Evidencia para auditorías y junta"]} />
      </Section>

      <Section titulo="Sectores donde más duele el problema" subtitulo="Y donde nuestra propuesta de valor se entiende sin explicaciones">
        <div className="grid grid-3">
          <div className="card card-rojo">
            <h3>Financiero y aseguradoras</h3>
            <ul>
              <li>Supervisión directa de Superfinanciera</li>
              <li>Alta exigencia de evidencia y trazabilidad</li>
            </ul>
          </div>
          <div className="card card-amarillo">
            <h3>Educación superior y salud (IPS/EPS)</h3>
            <ul>
              <li>Regulación de datos y continuidad de servicio</li>
              <li>Decisiones de TI justificadas ante consejos</li>
            </ul>
          </div>
          <div className="card card-azul">
            <h3>Logística, transporte y gobierno</h3>
            <ul>
              <li>Operaciones críticas con múltiples proveedores</li>
              <li>Lineamientos de MinTIC para entidades públicas</li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaFinal texto="Tu empresa puede ser el próximo caso." ctaHref="/contacto" />
    </>
  );
}
