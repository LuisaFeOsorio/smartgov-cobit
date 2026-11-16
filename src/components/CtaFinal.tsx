import Link from "next/link";
import type { ReactNode } from "react";

/** Franja con CTA reutilizable al final de cada página */
export default function CtaFinal({
  texto,
  ctaHref = "/contacto",
  ctaTexto = "Solicitar una demo",
  children,
}: {
  texto: string;
  ctaHref?: string;
  ctaTexto?: string;
  children?: ReactNode;
}) {
  return (
    <div className="cta-final">
      <p>{texto}</p>
      {children}
      <Link href={ctaHref} className="btn btn-solid">
        {ctaTexto}
      </Link>
    </div>
  );
}
