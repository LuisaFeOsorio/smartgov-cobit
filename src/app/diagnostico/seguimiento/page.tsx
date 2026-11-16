import Link from "next/link";
import { Section, Card } from "@/components/Section";
import ProgresoPasos from "@/components/ProgresoPasos";
import SeguimientoCliente from "@/components/SeguimientoCliente";
import { Explica, AlCien } from "@/components/Explica";
import type { PasoDemo } from "@/components/ProgresoPasos";

export const metadata = { title: "Diagnóstico · Paso 4 de 4 — Seguimiento | SmartGov COBIT" };

const pasos: PasoDemo[] = [
  { n: 1, texto: "Carga de documentos", href: "/diagnostico" },
  { n: 2, texto: "Extracción de NPO", href: "/diagnostico/resultado" },
  { n: 3, texto: "Hoja de ruta", href: "/diagnostico/hoja-de-ruta" },
  { n: 4, texto: "Seguimiento", href: "/diagnostico/seguimiento" },
];

export default async function SeguimientoDemoPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/producto">Producto</Link> <span>›</span>{" "}
        <Link href="/diagnostico">Diagnóstico</Link> <span>›</span> Seguimiento
      </p>

      <div className="hero hero-rojo" style={{ padding: "34px 28px 30px" }}>
        <h1>
          Paso 4 · <span>Seguimiento continuo</span>
        </h1>
        <p>
          El gobierno de TI no termina con el plan: se mide, se evalúa y se
          ajusta de forma continua, con asesoría de expertos.
        </p>
      </div>

      <ProgresoPasos pasos={pasos} actual={4} />

      {id && (
        <div className="chip-historial">
          📁 Diagnóstico guardado #{id} · <a href="/diagnostico/historial">volver al historial</a>
        </div>
      )}

      <Explica titulo="¿Qué está pasando aquí?">
        <p>
          Una vez entregada la hoja de ruta, la plataforma pasa a modo{" "}
          <strong>monitoreo</strong>: los KPIs se calculan con los resultados de
          tu propio diagnóstico, la bitácora deja constancia de las sesiones de
          asesoría con los consultores expertos y el ciclo de mejora nunca se
          detiene.
        </p>
      </Explica>

      <SeguimientoCliente id={id} />

      <Section titulo="El ciclo de mejora continua" subtitulo="Cómo funciona el seguimiento mes a mes">
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
        titulo="Al 100%, este paso también podría:"
        items={[
          "Alertar por correo o celular cuando un KPI se desvía de su meta",
          "Programar y video-grabar las sesiones con expertos dentro de la plataforma",
          "Generar informes trimestrales automáticos listos para la junta y los reguladores",
          "Recalcular el nivel de madurez cada periodo para ver la evolución frente al diagnóstico inicial",
        ]}
      />

      <div className="navegacion-fases">
        <Link href="/diagnostico/hoja-de-ruta" className="btn btn-borde">
          ← Paso 3: hoja de ruta
        </Link>
        <Link href="/producto" className="btn btn-solid">
          ¡Terminaste la demo! Volver al producto →
        </Link>
      </div>
    </>
  );
}
