"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* Enlaces visibles en la barra (pocos, para no perderse) */
const enlacesPrincipales = [
  { href: "/", texto: "Inicio" },
  { href: "/contexto", texto: "Contexto" },
  { href: "/producto", texto: "Producto" },
  { href: "/diagnostico", texto: "Demo", demo: true },
];

/* Todo el resto de información vive en el menú hamburguesa */
const gruposMenu = [
  {
    titulo: "El servicio",
    enlaces: [
      { href: "/producto", texto: "Qué es SmartGov COBIT", detalle: "El producto en una página" },
      { href: "/fases", texto: "Las 3 fases", detalle: "Diagnóstico · Hoja de ruta · Seguimiento" },
      { href: "/fases/diagnostico", texto: "Fase 1 · Diagnóstico", detalle: "Con IA, en horas" },
      { href: "/fases/hoja-de-ruta", texto: "Fase 2 · Hoja de ruta", detalle: "Plan priorizado" },
      { href: "/fases/seguimiento", texto: "Fase 3 · Seguimiento", detalle: "KPIs y asesoría" },
      { href: "/metodo", texto: "Nuestro método", detalle: "IA lee, el experto valida" },
      { href: "/precios", texto: "Planes y precios", detalle: "Suscripción + proyectos" },
    ],
  },
  {
    titulo: "Conócenos",
    enlaces: [
      { href: "/contexto", texto: "Contexto y problema", detalle: "Por qué existe la plataforma" },
      { href: "/clientes", texto: "Perfil del cliente", detalle: "Para quién es" },
      { href: "/casos", texto: "Casos ilustrativos", detalle: "3 escenarios reales del sector" },
      { href: "/equipo", texto: "El equipo", detalle: "Técnica · Consultiva · Administrativa" },
      { href: "/proyecto", texto: "El proyecto", detalle: "Privado e intangible" },
    ],
  },
  {
    titulo: "Recursos",
    enlaces: [
      { href: "/diagnostico", texto: "Probar la demo", detalle: "Sin registro, con datos de ejemplo" },
      { href: "/diagnostico/historial", texto: "Historial", detalle: "Diagnósticos guardados" },
      { href: "/glosario", texto: "Glosario COBIT", detalle: "15 términos en lenguaje sencillo" },
      { href: "/preguntas", texto: "Preguntas frecuentes", detalle: "Las 10 de siempre" },
      { href: "/contacto", texto: "Contacto", detalle: "Escríbenos" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Cierra el menú al cambiar de página
  useEffect(() => {
    setMenuAbierto(false);
  }, [pathname]);

  // Evita el scroll del fondo mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAbierto]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">SG</span>
          <span className="logo-text">
            SmartGov <em>COBIT</em>
          </span>
        </Link>

        <nav className="nav-links">
          {enlacesPrincipales.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={`${e.demo ? "demo-cta " : ""}${pathname === e.href ? "activo" : ""}`}
            >
              {e.texto}
            </Link>
          ))}
        </nav>

        <button
          className="menu-btn"
          aria-label="Abrir menú"
          onClick={() => setMenuAbierto(true)}
        >
          ☰
        </button>
      </div>

      {menuAbierto && (
        <>
          <div className="menu-overlay" onClick={() => setMenuAbierto(false)} />
          <div className="menu-panel">
            <div className="menu-cabecera">
              <strong>Todo el sitio</strong>
              <button
                className="menu-cerrar"
                aria-label="Cerrar menú"
                onClick={() => setMenuAbierto(false)}
              >
                ✕
              </button>
            </div>
            {gruposMenu.map((g) => (
              <div className="menu-grupo" key={g.titulo}>
                <p className="menu-grupo-titulo">{g.titulo}</p>
                {g.enlaces.map((e) => (
                  <Link key={e.href} href={e.href}>
                    {e.texto}
                    <span>{e.detalle}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
