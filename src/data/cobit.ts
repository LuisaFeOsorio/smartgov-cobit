// Datos mock de COBIT 2019 para el flujo de diagnóstico (demo con datos de ejemplo)

export const dominios = [
  { id: "EDM", nombre: "Evaluar, Dirigir y Monitorear", color: "azul" },
  { id: "APO", nombre: "Alinear, Planear y Organizar", color: "verde" },
  { id: "BAI", nombre: "Construir, Adquirir e Implementar", color: "amarillo" },
  { id: "DSS", nombre: "Entregar, dar Servicio y Soporte", color: "naranja" },
  { id: "MEA", nombre: "Monitorear, Evaluar y Analizar", color: "rojo" },
] as const;

export type Npo = {
  id: string;
  tipo: "Necesidad" | "Problema" | "Oportunidad";
  texto: string;
  documento: string;
  objetivos: string[]; // Objetivos COBIT 2019 relacionados
  confianza: number; // 0-100, mock
};

// Mock: NPOs que la IA "extraería" de los documentos cargados
export const nposMock: Npo[] = [
  {
    id: "NPO-001",
    tipo: "Problema",
    texto: "Los incidentes de seguridad se reportan por correo sin un registro centralizado.",
    documento: "informe-ti-2025.pdf",
    objetivos: ["DSS05", "MEA02"],
    confianza: 92,
  },
  {
    id: "NPO-002",
    tipo: "Necesidad",
    texto: "La junta exige reportes trimestrales de inversión en TI justificados ante Superfinanciera.",
    documento: "acta-junta-03.docx",
    objetivos: ["EDM01", "EDM05"],
    confianza: 88,
  },
  {
    id: "NPO-003",
    tipo: "Oportunidad",
    texto: "Migración a la nube pendiente permitiría estandarizar servicios de infraestructura.",
    documento: "plan-tecnologico.pdf",
    objetivos: ["BAI05", "APO02"],
    confianza: 85,
  },
  {
    id: "NPO-004",
    tipo: "Problema",
    texto: "No existen acuerdos de nivel de servicio con los proveedores críticos de software.",
    documento: "contratos-proveedores.docx",
    objetivos: ["APO10", "DSS01"],
    confianza: 90,
  },
  {
    id: "NPO-005",
    tipo: "Necesidad",
    texto: "El personal nuevo no recibe capacitación formal en políticas de gobierno de TI.",
    documento: "rrhh-procesos.pdf",
    objetivos: ["APO07"],
    confianza: 78,
  },
];

// Mock: factores de diseño COBIT 2019 (11 en total, resumidos para la demo)
export const factoresDiseno = [
  "Estrategia de la empresa",
  "Metas de la empresa",
  "Perfil de riesgo",
  "Escenario regulatorio",
  "Modelo de negocio",
  "Rol de la TI",
  "Rol de la contratación/sourcing",
  "Tamaño de la empresa",
  "Tecnología implementada",
  "Competencias de TI",
  "Cultura",
];

// Mock: madurez actual vs. objetivo por objetivo COBIT (escala 0-5)
export type Madurez = {
  objetivo: string;
  nombre: string;
  dominio: string;
  actual: number;
  objetivoNivel: number;
};

export const madurezMock: Madurez[] = [
  { objetivo: "EDM01", nombre: "Marco de gobierno", dominio: "EDM", actual: 1.8, objetivoNivel: 3.5 },
  { objetivo: "EDM05", nombre: "Cartera de inversiones", dominio: "EDM", actual: 2.2, objetivoNivel: 3.0 },
  { objetivo: "APO02", nombre: "Estrategia", dominio: "APO", actual: 1.5, objetivoNivel: 3.0 },
  { objetivo: "APO07", nombre: "Gestión del talento", dominio: "APO", actual: 2.0, objetivoNivel: 2.5 },
  { objetivo: "APO10", nombre: "Proveedores", dominio: "APO", actual: 1.2, objetivoNivel: 3.0 },
  { objetivo: "BAI05", nombre: "Infraestructura", dominio: "BAI", actual: 2.4, objetivoNivel: 3.5 },
  { objetivo: "DSS01", nombre: "Servicios de operación", dominio: "DSS", actual: 2.6, objetivoNivel: 3.0 },
  { objetivo: "DSS05", nombre: "Seguridad", dominio: "DSS", actual: 1.4, objetivoNivel: 4.0 },
  { objetivo: "MEA02", nombre: "Desempeño interno", dominio: "MEA", actual: 1.9, objetivoNivel: 3.0 },
];

// Mock: matriz impactos vs. esfuerzo para la hoja de ruta
export type Iniciativa = {
  id: string;
  nombre: string;
  impacto: number; // 1-10
  esfuerzo: number; // 1-10
  horizonte: "Corto plazo" | "Mediano plazo" | "Largo plazo";
};

export const iniciativasMock: Iniciativa[] = [
  { id: "IN-01", nombre: "Registro centralizado de incidentes", impacto: 8, esfuerzo: 3, horizonte: "Corto plazo" },
  { id: "IN-02", nombre: "Tablero de KPIs para la junta", impacto: 7, esfuerzo: 4, horizonte: "Corto plazo" },
  { id: "IN-03", nombre: "Marco de acuerdos con proveedores", impacto: 8, esfuerzo: 6, horizonte: "Mediano plazo" },
  { id: "IN-04", nombre: "Programa de capacitación en gobierno de TI", impacto: 5, esfuerzo: 4, horizonte: "Mediano plazo" },
  { id: "IN-05", nombre: "Migración a la nube por etapas", impacto: 9, esfuerzo: 9, horizonte: "Largo plazo" },
  { id: "IN-06", nombre: "Plan de seguridad alineado a regulación", impacto: 10, esfuerzo: 7, horizonte: "Mediano plazo" },
];

// Mock: KPIs para la fase de seguimiento
export const kpisMock = [
  { nombre: "Tiempo promedio de respuesta a incidentes", valor: "4,2 h", meta: "≤ 2 h", tendencia: "down-good" },
  { nombre: "Incidencias registradas en plataforma", valor: "87%", meta: "100%", tendencia: "up-good" },
  { nombre: "Nivel de madurez promedio", valor: "1,9", meta: "3,0", tendencia: "up-good" },
  { nombre: "Cumplimiento de reportes regulatorios", valor: "On time", meta: "On time", tendencia: "flat" },
];
