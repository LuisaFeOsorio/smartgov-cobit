import { Section, Card } from "@/components/Section";

export const metadata = { title: "Contacto — SmartGov COBIT" };

export default function ContactoPage() {
  return (
    <>
      <div className="hero hero-sec">
        <h1>
          Hablemos de tu <span>gobierno de TI</span>
        </h1>
        <p>
          Cuéntanos de tu empresa y te preparamos una demo con tus propios
          documentos. (El formulario es ilustrativo: en producción enviaría tu
          solicitud al equipo.)
        </p>
      </div>

      <Section>
        <div className="grid grid-2">
          <Card titulo="Formulario de contacto">
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 6 }}>
              <input className="campo" placeholder="Nombre completo" />
              <input className="campo" placeholder="Correo corporativo" />
              <input className="campo" placeholder="Empresa y cargo" />
              <select className="campo" defaultValue="">
                <option value="" disabled>
                  Sector
                </option>
                <option>Financiero y aseguradoras</option>
                <option>Educación superior y salud (IPS/EPS)</option>
                <option>Logística, transporte y gobierno</option>
                <option>Otro</option>
              </select>
              <textarea className="campo" rows={4} placeholder="¿Qué quieres resolver?" />
              <button className="btn btn-solid" type="button">
                Enviar solicitud (demo)
              </button>
              <p className="muted" style={{ fontSize: "0.78rem" }}>
                En producción, este formulario enviaría la solicitud al equipo comercial por correo / CRM.
              </p>
            </div>
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Card titulo="Qué sigue después del contacto">
              <ul>
                <li>Agenda una llamada de 30 minutos</li>
                <li>Revisamos 2 o 3 documentos de ejemplo</li>
                <li>Te mostramos un diagnóstico preliminar en vivo</li>
              </ul>
            </Card>
            <Card titulo="Contacto directo">
              <ul>
                <li>contacto@smartgovcobit.com (ejemplo)</li>
                <li>Bogotá, Colombia</li>
                <li>Lun–Vie, 8:00–18:00</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
