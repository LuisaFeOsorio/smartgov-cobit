import Link from "next/link";
import { Section } from "@/components/Section";
import ProgresoPasos from "@/components/ProgresoPasos";
import DiagnosticoCarga from "@/components/DiagnosticoCarga";
import { Explica, AlCien } from "@/components/Explica";
import type { PasoDemo } from "@/components/ProgresoPasos";

export const metadata = { title: "Diagnóstico · Paso 1 de 4 — Carga de documentos | SmartGov COBIT" };

const pasos: PasoDemo[] = [
  { n: 1, texto: "Carga de documentos", href: "/diagnostico" },
  { n: 2, texto: "Extracción de NPO", href: "/diagnostico/resultado" },
  { n: 3, texto: "Hoja de ruta", href: "/diagnostico/hoja-de-ruta" },
  { n: 4, texto: "Seguimiento", href: "/diagnostico/seguimiento" },
];

export default function DiagnosticoPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> <Link href="/producto">Producto</Link> <span>›</span> Diagnóstico
      </p>

      <div className="hero hero-verde" style={{ padding: "34px 28px 30px" }}>
        <h1>
          Paso 1 · <span>Carga de documentos</span>
        </h1>
        <p>
          Aquí empieza el diagnóstico con IA: sube tus documentos de TI y la
          plataforma los leerá y analizará al instante.
        </p>
      </div>

      <ProgresoPasos pasos={pasos} actual={1} />

      <Explica>
        <p>
          <strong>¿Qué está pasando aquí?</strong> La plataforma necesita conocer
          cómo opera tu TI hoy. Para eso revisa los documentos que ya existen en
          tu empresa: planes, informes, actas de junta, contratos y políticas.
          Cuanto más documentación cargues, más completo será el diagnóstico.{" "}
          <strong>El análisis corre 100% en esta aplicación</strong>: los
          documentos no se envían a servicios externos.
        </p>
      </Explica>

      <DiagnosticoCarga />

      <Section titulo="Qué documentos sirven" subtitulo="Cuanto más completa sea tu documentación, mejor será el diagnóstico">
        <div className="grid grid-3">
          <div className="card card-verde">
            <h3>Planificación</h3>
            <ul>
              <li>Plan tecnológico y estratégico</li>
              <li>Presupuesto de TI</li>
              <li>Mapa de procesos</li>
            </ul>
          </div>
          <div className="card card-azul">
            <h3>Operación</h3>
            <ul>
              <li>Informes de TI y de incidentes</li>
              <li>Contratos con proveedores</li>
              <li>Políticas y manuales internos</li>
            </ul>
          </div>
          <div className="card card-amarillo">
            <h3>Gobierno</h3>
            <ul>
              <li>Actas de junta directiva</li>
              <li>Reportes a reguladores</li>
              <li>Auditorías previas</li>
            </ul>
          </div>
        </div>
      </Section>

      <AlCien
        color="verde"
        titulo="Al 100%, este paso también podría:"
        items={[
          "Conectar con tus repositorios (SharePoint, Google Drive, correo) para cargar documentos sin copiarlos a mano",
          "Leer archivos escaneados gracias a reconocimiento óptico de caracteres (OCR)",
          "Detectar automáticamente qué documentos faltan y pedírtelos con un checklist inteligente",
          "Guardar todo cifrado y con control de acceso por roles de tu empresa",
        ]}
      />

      <div className="navegacion-fases">
        <Link href="/producto" className="btn btn-borde">
          ← Volver al producto
        </Link>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/diagnostico/historial" className="btn btn-borde">
            📁 Historial
          </Link>
          <Link href="/diagnostico/resultado" className="btn btn-solid">
            Siguiente: la IA analiza tus documentos →
          </Link>
        </div>
      </div>
    </>
  );
}
