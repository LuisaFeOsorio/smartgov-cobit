import type { ReactNode } from "react";

/**
 * Caja de explicación: qué está pasando en este punto de la demo.
 */
export function Explica({ titulo = "¿Qué está pasando aquí?", children }: { titulo?: string; children: ReactNode }) {
  return (
    <div className="explica">
      <p className="explica-titulo">💡 {titulo}</p>
      <div className="explica-cuerpo">{children}</div>
    </div>
  );
}

/**
 * Caja "al 100%": qué haría la plataforma cuando todas las funciones estén activas.
 * color: clase de tema (verde, azul, amarillo, rojo).
 */
export function AlCien({
  color = "azul",
  titulo = "Si la plataforma estuviera al 100%",
  items,
}: {
  color?: "verde" | "azul" | "amarillo" | "rojo";
  titulo?: string;
  items: string[];
}) {
  return (
    <div className={`al100 al100-${color}`}>
      <p className="al100-titulo">🚀 {titulo}</p>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
