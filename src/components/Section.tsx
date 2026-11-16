import type { ReactNode } from "react";

type Props = {
  titulo?: string;
  subtitulo?: string;
  children: ReactNode;
};

export function Section({ titulo, subtitulo, children }: Props) {
  return (
    <section className="section">
      {titulo && <h2 className="section-title">{titulo}</h2>}
      {subtitulo && <p className="section-sub muted">{subtitulo}</p>}
      {children}
    </section>
  );
}

export function Card({
  titulo,
  children,
  badge,
}: {
  titulo?: string;
  children: ReactNode;
  badge?: string;
}) {
  return (
    <div className="card">
      {(titulo || badge) && (
        <div className="card-head">
          {titulo && <h3>{titulo}</h3>}
          {badge && <span className="badge">{badge}</span>}
        </div>
      )}
      {children}
    </div>
  );
}

export function ValorList({ items }: { items: string[] }) {
  return (
    <div className="valor">
      <span className="valor-label">★ Propuesta de valor</span>
      <ul className="valor-list">
        {items.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
