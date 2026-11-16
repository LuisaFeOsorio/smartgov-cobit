import Link from "next/link";
import { Section, Card, ValorList } from "@/components/Section";
import { AlCien } from "@/components/Explica";
import { producto } from "@/data/producto";
import { kpisMock } from "@/data/cobit";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Fase 3 · Seguimiento — SmartGov COBIT" };

export default function FaseSeguimientoPage() {
  const fase = producto.fases[2];
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/producto">Producto</Link> <span>›</span> Fase 3
      </p>

      <div className="hero hero-rojo" style={{ padding: "34px 28px 30px" }}>
        <h1>
          <span>{fase.titulo}</span>
        </h1>
        <p>{fase.descripcion}</p>
      </div>

      <Section>
        <div className="img-par">
          <img src="/img/fase-seguimiento.svg" alt="Tablero con curvas ascendentes doradas" />
          <div>
            <p>
              <strong>El gobierno de TI no es un evento, es un hábito.</strong>{" "}
              Después de la entrega del plan, la plataforma entra en modo
              monitoreo: KPIs vivos, sesiones de asesoría documentadas y
              reevaluaciones periódicas de madurez para demostrar que la mejora
              es real y sostenida.
            </p>
          </div>
        </div>
      </Section>

      <Section titulo="Qué hace esta fase, paso a paso">
        <div className="grid grid-3">
          {fase.pasos.map((p, i) => (
            <Card key={p}>
              <span className="badge chip-rojo">Paso {i + 1}</span>
              <p style={{ fontWeight: 600, marginTop: 8 }}>{p}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section titulo="KPIs de ejemplo" subtitulo="Cómo se vería el monitoreo continuo con datos de prueba">
        <div className="grid grid-4">
          {kpisMock.map((k) => (
            <div className="kpi" key={k.nombre}>
              <small>{k.nombre}</small>
              <span className="kpi-valor">{k.valor}</span>
              <p className="kpi-meta">Meta: {k.meta}</p>
            </div>
          ))}
        </div>
        <ValorList items={[fase.pasos[1], fase.pasos[2]]} />
      </Section>

      <Section titulo="Ciclo de mejora continua">
        <div className="grid grid-4">
          <Card titulo="1. Medir">
            <ul>
              <li>KPIs conectados a los objetivos COBIT</li>
            </ul>
          </Card>
          <Card titulo="2. Evaluar">
            <ul>
              <li>Avance de la hoja de ruta y desviaciones</li>
            </ul>
          </Card>
          <Card titulo="3. Asesorar">
            <ul>
              <li>Sesiones con consultores expertos</li>
            </ul>
          </Card>
          <Card titulo="4. Ajustar">
            <ul>
              <li>Repriorización de iniciativas</li>
            </ul>
          </Card>
        </div>
      </Section>

      <AlCien
        color="rojo"
        titulo="Si la plataforma estuviera al 100%, esta fase haría:"
        items={[
          "Registrar el avance real de cada iniciativa de la hoja de ruta, con responsable y fecha",
          "Mostrar tableros de KPIs en vivo conectados a los sistemas de la empresa",
          "Alertar cuando un KPI se desvía de su meta y sugerir ajustes al plan",
          "Documentar cada sesión de asesoría experta con sus compromisos y seguimiento",
          "Generar informes trimestrales automáticos para la junta y los reguladores (Superfinanciera, MinTIC)",
          "Recalcular la madurez COBIT cada periodo para evidenciar la mejora frente al diagnóstico inicial",
        ]}
      />

      <div className="navegacion-fases">
        <Link href="/fases/hoja-de-ruta" className="btn btn-borde">
          ← Fase 2 · Hoja de ruta
        </Link>
        <Link href="/diagnostico" className="btn btn-solid">
          Volver a la demo →
        </Link>
      </div>

      <CtaFinal texto="El gobierno de TI no es un proyecto único: es un ciclo continuo." />
    </>
  );
}
