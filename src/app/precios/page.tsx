import Link from "next/link";
import { Section } from "@/components/Section";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Planes y precios — SmartGov COBIT" };

export default function PreciosPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> Precios
      </p>

      <div className="hero">
        <h1>
          Planes <span>ilustrativos</span>
        </h1>
        <p>
          El modelo de negocio en dos piezas: suscripción SaaS recurrente por la
          plataforma, y tarifas por proyecto cuando se requiere consultoría
          adicional. Montos de referencia, a definir en la propuesta final.
        </p>
      </div>

      <Section>
        <div className="grid grid-3">
          <div className="plan">
            <p className="plan-nombre">Diagnóstico Express</p>
            <p className="plan-precio">
              1 proyecto <small>· pago único</small>
            </p>
            <ul>
              <li>Carga y análisis de hasta 10 documentos</li>
              <li>Informe de brechas con trazabilidad</li>
              <li>1 sesión de validación con experto</li>
              <li>Matriz de priorización y hoja de ruta</li>
              <li>Ideal para un primer acercamiento</li>
            </ul>
            <Link href="/contacto" className="btn btn-borde">
              Solicitar propuesta
            </Link>
          </div>

          <div className="plan plan-destacado">
            <p className="plan-nombre">SaaS Empresarial</p>
            <p className="plan-precio">
              Suscripción <small>· mensual o anual</small>
            </p>
            <ul>
              <li>Uso continuo de la plataforma</li>
              <li>Diagnósticos ilimitados por área</li>
              <li>Tablero de KPIs siempre activo</li>
              <li>Historial de todos tus diagnósticos</li>
              <li>Reevaluación periódica de madurez</li>
              <li>El plan recomendado para sostener la mejora</li>
            </ul>
            <Link href="/contacto" className="btn btn-solid">
              Solicitar propuesta
            </Link>
          </div>

          <div className="plan">
            <p className="plan-nombre">Consultoría Premium</p>
            <p className="plan-precio">
              Por proyecto <small>· cotización</small>
            </p>
            <ul>
              <li>Todo lo del plan SaaS Empresarial</li>
              <li>Sesiones mensuales con consultores senior</li>
              <li>Acompañamiento en la ejecución del plan</li>
              <li>Informes trimestrales para la junta y reguladores</li>
              <li>Soporte prioritario para tu equipo de TI</li>
            </ul>
            <Link href="/contacto" className="btn btn-borde">
              Solicitar propuesta
            </Link>
          </div>
        </div>
      </Section>

      <Section titulo="Por qué es más accesible" subtitulo="La escalabilidad de la IA, puesta en números">
        <div className="grid grid-4">
          <div className="kpi">
            <small>Trabajo pesado</small>
            <span className="kpi-valor">IA</span>
            <p className="kpi-meta">leer y analizar documentos</p>
          </div>
          <div className="kpi">
            <small>Criterio humano</small>
            <span className="kpi-valor">Expertos</span>
            <p className="kpi-meta">validar y asesorar</p>
          </div>
          <div className="kpi">
            <small>Tiempo de proyecto</small>
            <span className="kpi-valor">-60%</span>
            <p className="kpi-meta">horas vs. 6 semanas</p>
          </div>
          <div className="kpi">
            <small>Equipo</small>
            <span className="kpi-valor">1 : N</span>
            <p className="kpi-meta">un equipo atiende muchos clientes</p>
          </div>
        </div>
      </Section>

      <CtaFinal texto="Montos y alcances definitivos se definen en la propuesta." ctaHref="/contacto" ctaTexto="Pedir una cotización" />
    </>
  );
}
