import Link from "next/link";
import ProgresoPasos from "@/components/ProgresoPasos";
import ResultadoCliente from "@/components/ResultadoCliente";
import { Explica, AlCien } from "@/components/Explica";
import type { PasoDemo } from "@/components/ProgresoPasos";

export const metadata = { title: "Diagnóstico · Paso 2 de 4 — Análisis con IA | SmartGov COBIT" };

const pasos: PasoDemo[] = [
  { n: 1, texto: "Carga de documentos", href: "/diagnostico" },
  { n: 2, texto: "Extracción de NPO", href: "/diagnostico/resultado" },
  { n: 3, texto: "Hoja de ruta", href: "/diagnostico/hoja-de-ruta" },
  { n: 4, texto: "Seguimiento", href: "/diagnostico/seguimiento" },
];

export default async function ResultadoPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/producto">Producto</Link> <span>›</span>{" "}
        <Link href="/diagnostico">Diagnóstico</Link> <span>›</span> Análisis con IA
      </p>

      <div className="hero hero-azul" style={{ padding: "34px 28px 30px" }}>
        <h1>
          Paso 2 · <span>La IA analiza tus documentos</span>
        </h1>
        <p>
          El resultado: necesidades, problemas y oportunidades (NPO)
          detectadas, mapeadas a los objetivos COBIT 2019 y con su nivel de
          madurez actual.
        </p>
      </div>

      <ProgresoPasos pasos={pasos} actual={2} />

      {id && (
        <div className="chip-historial">
          📁 Diagnóstico guardado #{id} · <a href="/diagnostico/historial">volver al historial</a>
        </div>
      )}

      <Explica>
        <p>
          <strong>¿Qué está pasando aquí?</strong> El motor de PLN leyó cada
          documento frase por frase y extrajo los hallazgos con señales claras.
          Cada hallazgo dice de qué documento salió, a qué objetivos COBIT 2019
          afecta, qué señales del texto lo dispararon y con cuánta confianza lo
          detectó. Esta trazabilidad es la evidencia objetiva que tu junta y los
          auditores necesitan.
        </p>
      </Explica>

      <ResultadoCliente id={id} />

      <AlCien
        color="azul"
        titulo="Al 100%, este paso también podría:"
        items={[
          "Cubrir los 40 objetivos de COBIT 2019 completos, no solo una muestra",
          "Citar el párrafo exacto de cada documento que originó el hallazgo",
          "Comparar tu madurez contra empresas de tu mismo sector y tamaño",
          "Un consultor experto revisaría cada hallazgo antes de entregarlo: control humano ético, sin alucinaciones",
        ]}
      />

      <div className="navegacion-fases">
        <Link href="/diagnostico" className="btn btn-borde">
          ← Paso 1: carga de documentos
        </Link>
        <Link href="/diagnostico/hoja-de-ruta" className="btn btn-solid">
          Siguiente: tu hoja de ruta →
        </Link>
      </div>
    </>
  );
}
