import Link from "next/link";
import { Section } from "@/components/Section";
import HistorialCliente from "@/components/HistorialCliente";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Historial de diagnósticos — SmartGov COBIT" };

export default function HistorialPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/diagnostico">Diagnóstico</Link> <span>›</span> Historial
      </p>

      <div className="hero hero-sec" style={{ padding: "34px 28px 30px" }}>
        <h1>
          Historial de <span>diagnósticos</span>
        </h1>
        <p>
          Todos los análisis que hayas guardado quedan en la base de datos de la
          plataforma: puedes abrirlos, revisar su hoja de ruta o eliminarlos.
        </p>
      </div>

      <Section titulo="Diagnósticos guardados">
        <HistorialCliente />
      </Section>

      <CtaFinal
        texto="¿Quieres hacer un diagnóstico nuevo?"
        ctaHref="/diagnostico"
        ctaTexto="Ir al paso 1 · carga de documentos"
      />
    </>
  );
}
