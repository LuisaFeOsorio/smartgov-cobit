import Link from "next/link";
import { Section, Card, ValorList } from "@/components/Section";
import { AlCien } from "@/components/Explica";
import { producto } from "@/data/producto";
import { factoresDiseno } from "@/data/cobit";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Fase 1 · Diagnóstico con IA — SmartGov COBIT" };

export default function FaseDiagnosticoPage() {
  const fase = producto.fases[0];
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/producto">Producto</Link> <span>›</span> Fase 1
      </p>

      <div className="hero hero-verde" style={{ padding: "34px 28px 30px" }}>
        <h1>
          <span>{fase.titulo}</span>
        </h1>
        <p>{fase.descripcion}</p>
      </div>

      <Section>
        <div className="img-par">
          <img src="/img/fase-diagnostico.svg" alt="Documentos siendo analizados por la IA" />
          <div>
            <p>
              <strong>La entrada:</strong> documentos que ya existen en tu
              empresa. <strong>El proceso:</strong> un motor de PLN que lee frase
              por frase buscando señales de necesidad, problema u oportunidad.{" "}
              <strong>La salida:</strong> hallazgos trazados a objetivos COBIT
              2019, con la evidencia a la mano.
            </p>
          </div>
        </div>
      </Section>

      <Section titulo="Qué hace esta fase, paso a paso">
        <div className="grid grid-3">
          {fase.pasos.map((p, i) => (
            <Card key={p}>
              <span className="badge chip-verde">Paso {i + 1}</span>
              <p style={{ fontWeight: 600, marginTop: 8 }}>{p}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        titulo="Qué analiza la IA"
        subtitulo="COBIT 2019 define 40 objetivos y 11 factores de diseño. Esta demo usa datos de ejemplo."
      >
        <div className="grid grid-2">
          <Card titulo="Factores de diseño considerados">
            <ul>
              {factoresDiseno.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Card>
          <Card titulo="Documentos de entrada (ejemplos)">
            <ul>
              <li>Plan tecnológico de la empresa</li>
              <li>Informe anual de TI</li>
              <li>Actas de junta directiva</li>
              <li>Contratos con proveedores</li>
              <li>Políticas y procesos internos</li>
            </ul>
          </Card>
        </div>
        <ValorList items={[fase.pasos[0], fase.pasos[1], fase.pasos[2]]} />
      </Section>

      <AlCien
        color="verde"
        titulo="Si la plataforma estuviera al 100%, esta fase haría:"
        items={[
          "Recibir tus documentos reales (PDF, Word, hojas de cálculo) con cifrado y control de acceso",
          "Leerlos completos con PLN en minutos, incluidos documentos escaneados gracias al OCR",
          "Extraer automáticamente cada necesidad, problema y oportunidad (NPO) que los documentos evidencian",
          "Mapear cada hallazgo a los 40 objetivos de COBIT 2019, citando el párrafo exacto de origen",
          "Calcular tu nivel de madurez actual y compararlo contra el nivel objetivo de tu sector y tamaño",
          "Entregar un borrador de diagnóstico que un consultor senior revisa y aprueba antes de publicarse",
        ]}
      />

      <div className="navegacion-fases">
        <Link href="/producto" className="btn btn-borde">
          ← Volver al producto
        </Link>
        <Link href="/diagnostico" className="btn btn-solid">
          Probar esta fase en la demo →
        </Link>
      </div>

      <CtaFinal
        texto="¿Quieres ver el resultado del diagnóstico?"
        ctaHref="/diagnostico/resultado"
        ctaTexto="Ver informe de brechas (demo)"
      />
    </>
  );
}
