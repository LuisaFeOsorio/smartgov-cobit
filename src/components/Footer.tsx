import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div style={{ maxWidth: 260 }}>
          <p className="logo-text footer-logo">
            SmartGov <em>COBIT</em>
          </p>
          <p className="muted" style={{ fontSize: "0.88rem" }}>
            Consultoría híbrida inteligente: la IA hace el trabajo pesado, los
            expertos aportan contexto y criterio.
          </p>
        </div>
        <div className="footer-cols">
          <div>
            <p className="footer-titulo">Producto</p>
            <Link href="/producto">Qué es</Link>
            <Link href="/fases">Las 3 fases</Link>
            <Link href="/fases/diagnostico">Fase 1 · Diagnóstico</Link>
            <Link href="/fases/hoja-de-ruta">Fase 2 · Hoja de ruta</Link>
            <Link href="/fases/seguimiento">Fase 3 · Seguimiento</Link>
            <Link href="/metodo">Nuestro método</Link>
            <Link href="/precios">Planes y precios</Link>
          </div>
          <div>
            <p className="footer-titulo">Conócenos</p>
            <Link href="/contexto">Contexto y problema</Link>
            <Link href="/clientes">Perfil del cliente</Link>
            <Link href="/casos">Casos ilustrativos</Link>
            <Link href="/equipo">El equipo</Link>
            <Link href="/proyecto">El proyecto</Link>
          </div>
          <div>
            <p className="footer-titulo">Recursos</p>
            <Link href="/diagnostico">Diagnóstico con IA</Link>
            <Link href="/diagnostico/historial">Historial</Link>
            <Link href="/glosario">Glosario COBIT</Link>
            <Link href="/preguntas">Preguntas frecuentes</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
          <div>
            <p className="footer-titulo">En la demo</p>
            <Link href="/diagnostico/resultado">Informe de brechas</Link>
            <Link href="/diagnostico/hoja-de-ruta">Matriz de priorización</Link>
            <Link href="/diagnostico/seguimiento">Seguimiento con KPIs</Link>
          </div>
        </div>
      </div>
      <p className="footer-copy muted">
        Demo con datos de ejemplo · © {new Date().getFullYear()} SmartGov COBIT
      </p>
    </footer>
  );
}
