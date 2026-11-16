"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/contexto", texto: "Contexto" },
  { href: "/producto", texto: "Producto" },
  { href: "/metodo", texto: "Método" },
  { href: "/casos", texto: "Casos" },
  { href: "/precios", texto: "Precios" },
  { href: "/diagnostico", texto: "Demo" },
  { href: "/contacto", texto: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo" onClick={() => setAbierto(false)}>
          <span className="logo-mark">SG</span>
          <span className="logo-text">
            SmartGov <em>COBIT</em>
          </span>
        </Link>

        <button
          className="menu-btn"
          aria-label="Abrir menú"
          onClick={() => setAbierto(!abierto)}
        >
          ☰
        </button>

        <nav className={`nav-links ${abierto ? "abierto" : ""}`}>
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={`${e.href === "/diagnostico" ? "demo-cta " : ""}${
                pathname === e.href ? "activo" : ""
              }`}
              onClick={() => setAbierto(false)}
            >
              {e.texto}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
