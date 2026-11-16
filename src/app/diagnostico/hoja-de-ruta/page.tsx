import Link from "next/link";
import ProgresoPasos from "@/components/ProgresoPasos";
import HojaRutaCliente from "@/components/HojaRutaCliente";
import { Explica, AlCien } from "@/components/Explica";
import type { PasoDemo } from "@/components/ProgresoPasos";

export const metadata = { title: "Diagnóstico · Paso 3 de 4 — Hoja de ruta | SmartGov COBIT" };

const pasos: PasoDemo[] = [
  { n: 1, texto: "Carga de documentos", href: "/diagnostico" },
  { n: 2, texto: "Extracción de NPO", href: "/diagnostico/resultado" },
  { n: 3, texto: "Hoja de ruta", href: "/diagnostico/hoja-de-ruta" },
  { n: 4, texto: "Seguimiento", href: "/diagnostico/seguimiento" },
];

export default async function HojaRutaDemoPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/producto">Producto</Link> <span>›</span>{" "}
        <Link href="/diagnostico">Diagnóstico</Link> <span>›</span> Hoja de ruta
      </p>

      <div className="hero hero-amarillo" style={{ padding: "34px 28px 30px" }}>
        <h1>
          Paso 3 · <span>Tu hoja de ruta</span>
        </h1>
        <p>
          Del diagnóstico al plan: iniciativas priorizadas por impacto y
          esfuerzo, organizadas en un plan de corto, mediano y largo plazo.
        </p>
      </div>

      <ProgresoPasos pasos={pasos} actual={3} />

      {id && (
        <div className="chip-historial">
          📁 Diagnóstico guardado #{id} · <a href="/diagnostico/historial">volver al historial</a>
        </div>
      )}

      <Explica titulo="¿Cómo se construyó esta hoja de ruta?">
        <p>
          Cada grupo de hallazgos del paso 2 se convierte en una{" "}
          <strong>iniciativa</strong> concreta. Su <strong>impacto</strong>{" "}
          depende de la gravedad de los problemas evidenciados, y su{" "}
          <strong>esfuerzo</strong> de la complejidad típica de ese objetivo
          COBIT. Las que están <strong>arriba a la izquierda</strong> son las
          ganancias rápidas: máximo beneficio con mínimo esfuerzo, y por donde
          conviene empezar. Los consultores expertos validan esta priorización
          antes de entregarla.
        </p>
      </Explica>

      <HojaRutaCliente id={id} />

      <AlCien
        color="amarillo"
        titulo="Al 100%, este paso también podría:"
        items={[
          "Permitir arrastrar cada iniciativa entre las celdas de la matriz y recomputar el plan al instante",
          "Estimar el costo y el tiempo de cada iniciativa con datos históricos de proyectos similares",
          "Asignar responsables, fechas y presupuesto, y exportar el plan como informe para la junta",
          "Los expertos validarían y ajustarían la priorización en sesiones dentro de la propia plataforma",
        ]}
      />

      <div className="navegacion-fases">
        <Link href="/diagnostico/resultado" className="btn btn-borde">
          ← Paso 2: análisis con IA
        </Link>
        <Link href="/diagnostico/seguimiento" className="btn btn-solid">
          Siguiente: seguimiento →
        </Link>
      </div>
    </>
  );
}
