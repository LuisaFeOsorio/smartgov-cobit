import Link from "next/link";

export type PasoDemo = {
  n: number;
  texto: string;
  href: string;
};

/**
 * Barra de progreso de la demo: chips clicables + barra de avance con %.
 * `actual` es el número del paso en el que está el usuario (1-4).
 */
export default function ProgresoPasos({
  pasos,
  actual,
}: {
  pasos: PasoDemo[];
  actual: number;
}) {
  const indice = Math.max(0, pasos.findIndex((p) => p.n === actual));
  const porcentaje = Math.round((indice / (pasos.length - 1)) * 100);
  const pasoActual = pasos[indice];

  return (
    <div className="progreso">
      <div className="progreso-chips">
        {pasos.map((p) => {
          const estado = p.n < actual ? "hecho" : p.n === actual ? "actual" : "pendiente";
          return (
            <Link
              key={p.n}
              href={p.href}
              className={`progreso-chip ${estado}`}
              title={
                estado === "hecho"
                  ? "Paso completado — volver a verlo"
                  : estado === "actual"
                    ? "Estás aquí"
                    : "Paso siguiente"
              }
            >
              <span className="progreso-num">{estado === "hecho" ? "✓" : p.n}</span>
              {p.texto}
            </Link>
          );
        })}
      </div>

      <div className="progreso-pista">
        <div className="progreso-lleno" style={{ width: `${porcentaje}%` }} />
      </div>

      <div className="progreso-info">
        <span>
          Paso <strong>{pasoActual.n}</strong> de <strong>{pasos.length}</strong>
        </span>
        <span className="progreso-pct">{porcentaje}% completado</span>
      </div>
    </div>
  );
}
