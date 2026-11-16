// Producto o servicio: qué ofrecemos (rama 2 del mapa mental)

export type Fase = {
  id: string;
  numero: string;
  titulo: string;
  descripcion: string;
  pasos: string[];
};

export const producto = {
  queEs: {
    titulo: "Qué es SmartGov COBIT",
    items: [
      "Plataforma SaaS en la nube",
      "Consultoría híbrida inteligente",
      "IA + consultores expertos",
    ],
  },
  fases: [
    {
      id: "diagnostico",
      numero: "01",
      titulo: "Fase 1 · Diagnóstico con IA",
      descripcion:
        "La plataforma lee los documentos de la empresa y construye un diagnóstico inicial de brechas hacia COBIT 2019.",
      pasos: [
        "Carga de documentos",
        "Extracción de NPO con PLN",
        "Mapeo a factores de diseño COBIT",
      ],
    },
    {
      id: "hoja-de-ruta",
      numero: "02",
      titulo: "Fase 2 · Hoja de ruta",
      descripcion:
        "Los expertos validan el diagnóstico y se construye un plan priorizado y realista de mejora.",
      pasos: [
        "Validación con expertos",
        "Matriz de impactos vs. esfuerzo",
        "Plan a corto, mediano y largo plazo",
      ],
    },
    {
      id: "seguimiento",
      numero: "03",
      titulo: "Fase 3 · Seguimiento",
      descripcion:
        "Acompañamiento continuo durante la ejecución del plan, con métricas visibles para TI y el negocio.",
      pasos: ["Asesoría en la ejecución", "Monitoreo con KPIs", "Evaluación continua"],
    },
  ] as Fase[],
  propuestaValor: [
    "60% menos tiempo (horas vs. 6 semanas)",
    "Trazabilidad algorítmica",
    "Control humano ético, sin alucinaciones",
  ],
};
