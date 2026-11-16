// Motor de PLN por reglas (español) — 100% local, sin APIs externas.
// Extrae NPO (Necesidades, Problemas, Oportunidades) de documentos en texto
// y las mapea a los objetivos de COBIT 2019.

export type TipoNpo = "Necesidad" | "Problema" | "Oportunidad";

export type Npo = {
  id: string;
  tipo: TipoNpo;
  texto: string;
  documento: string;
  objetivos: string[];
  confianza: number;
  senales: string[];
};

export type DocumentoResumen = {
  nombre: string;
  caracteres: number;
  frases: number;
  hallazgos: number;
  error?: string;
};

export type Madurez = {
  objetivo: string;
  nombre: string;
  dominio: string;
  actual: number;
  objetivoNivel: number;
};

export type Iniciativa = {
  id: string;
  nombre: string;
  impacto: number;
  esfuerzo: number;
  horizonte: string;
  objetivos: string[];
};

export type Kpi = {
  nombre: string;
  valor: string;
  meta: string;
  tendencia: string;
};

export type Analisis = {
  documentos: DocumentoResumen[];
  npos: Npo[];
  madurez: Madurez[];
  iniciativas: Iniciativa[];
  kpis: Kpi[];
  fuente: "documentos" | "ejemplo";
};

/** Quita tildes y pasa a minúsculas para comparar sin distinguir acentos */
function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Señales del texto que revelan el tipo de hallazgo */
const SENALES: { tipo: TipoNpo; frases: string[] }[] = [
  {
    tipo: "Problema",
    frases: [
      "no existe",
      "no hay",
      "no se cuenta",
      "no está alineada",
      "falta",
      "falla",
      "incumple",
      "incumplimiento",
      "sin control",
      "sin registro",
      "sin soporte",
      "retraso",
      "retrasos",
      "se pierden",
      "queja",
      "quejas",
      "vulnerabilidad",
      "riesgo alto",
      "riesgo",
      "supera lo pactado",
      "superan",
      "preocupación",
      "error",
      "desviación",
    ],
  },
  {
    tipo: "Necesidad",
    frases: [
      "necesita",
      "necesitan",
      "requiere",
      "requieren",
      "se requiere",
      "se requiere",
      "debe",
      "deben",
      "se exige",
      "exige",
      "exigencias",
      "pendiente",
      "hay que",
      "compromiso",
      "se acordó",
      "obligatorio",
      "meta",
      "establece",
    ],
  },
  {
    tipo: "Oportunidad",
    frases: [
      "oportunidad",
      "podría",
      "permitiría",
      "posibilidad",
      "mejorar",
      "mejora",
      "optimizar",
      "automatizar",
      "ahorro",
      "consolidación",
      "propone",
      "se recomienda",
      "nueva tecnología",
      "eficiencia",
    ],
  },
];

/** Mapeo de señales del negocio → objetivos COBIT 2019 */
const MAPA_COBIT: { claves: string[]; objetivos: string[] }[] = [
  { claves: ["seguridad", "incidente", "vulnerabilidad", "respaldo", "copia de seguridad"], objetivos: ["DSS05", "MEA02"] },
  { claves: ["junta", "inversión", "presupuesto", "regulatori", "superfinanciera", "mintic", "cumplimiento", "auditor", "justific"], objetivos: ["EDM01", "EDM05"] },
  { claves: ["nube", "migración", "infraestructura", "centro de datos", "licencia", "respaldo"], objetivos: ["BAI05", "APO02"] },
  { claves: ["proveedor", "contrato", "acuerdo de niveles", "niveles de servicio", "soporte", "penalidad"], objetivos: ["APO10", "DSS01"] },
  { claves: ["talento", "capacitación", "certificación", "personal", "rrhh", "contratación"], objetivos: ["APO07"] },
  { claves: ["riesgo", "falla", "tiempo de respuesta", "disponibilidad", "monitoreo", "indicadores de desempeño"], objetivos: ["MEA02"] },
  { claves: ["estrategia", "negocio", "metas del negocio", "kpi", "desempeño"], objetivos: ["APO02", "MEA02"] },
  { claves: ["compra", "adquisición", "estandarizar", "adquisiciones"], objetivos: ["APO10"] },
];

const NOMBRES_OBJETIVO: Record<string, { nombre: string; dominio: string }> = {
  EDM01: { nombre: "Marco de gobierno", dominio: "EDM" },
  EDM05: { nombre: "Cartera de inversiones", dominio: "EDM" },
  APO02: { nombre: "Estrategia", dominio: "APO" },
  APO07: { nombre: "Gestión del talento", dominio: "APO" },
  APO10: { nombre: "Proveedores", dominio: "APO" },
  BAI05: { nombre: "Infraestructura", dominio: "BAI" },
  DSS01: { nombre: "Servicios de operación", dominio: "DSS" },
  DSS05: { nombre: "Seguridad", dominio: "DSS" },
  MEA02: { nombre: "Desempeño interno", dominio: "MEA" },
};

/** Madurez semilla (línea base del sector) sobre la que se ajusta con los hallazgos */
const MADUREZ_BASE: Record<string, { actual: number; objetivoNivel: number }> = {
  EDM01: { actual: 2.0, objetivoNivel: 3.5 },
  EDM05: { actual: 2.2, objetivoNivel: 3.0 },
  APO02: { actual: 2.0, objetivoNivel: 3.0 },
  APO07: { actual: 2.0, objetivoNivel: 2.5 },
  APO10: { actual: 2.0, objetivoNivel: 3.0 },
  BAI05: { actual: 2.4, objetivoNivel: 3.5 },
  DSS01: { actual: 2.6, objetivoNivel: 3.0 },
  DSS05: { actual: 2.0, objetivoNivel: 4.0 },
  MEA02: { actual: 1.9, objetivoNivel: 3.0 },
};

const ESFUERZO_OBJETIVO: Record<string, number> = {
  EDM01: 7,
  EDM05: 6,
  APO02: 8,
  APO07: 4,
  APO10: 6,
  BAI05: 9,
  DSS01: 3,
  DSS05: 7,
  MEA02: 4,
};

const NOMBRE_INICIATIVA: Record<string, string> = {
  EDM01: "Implantar un marco de gobierno de TI para la junta",
  EDM05: "Ordenar la cartera de inversiones de TI",
  APO02: "Actualizar la estrategia de TI alineada al negocio",
  APO07: "Lanzar programa de capacitación en gobierno de TI",
  APO10: "Formalizar acuerdos de nivel de servicio con proveedores",
  BAI05: "Modernizar la infraestructura (migración a la nube)",
  DSS01: "Mejorar los servicios de operación de TI",
  DSS05: "Fortalecer la seguridad de la información",
  MEA02: "Implementar tablero de indicadores de desempeño",
};

/** Divide el texto en frases analizables */
function dividirFrases(texto: string): string[] {
  return texto
    .split(/\n+|(?<=[.!?])\s+/)
    .map((f) => f.trim())
    .filter((f) => f.length >= 30 && f.length <= 420);
}

/** Encuentra los objetivos COBIT relacionados con una frase */
function mapearObjetivos(fraseNorm: string): string[] {
  const encontrados = new Set<string>();
  for (const regla of MAPA_COBIT) {
    if (regla.claves.some((c) => fraseNorm.includes(normalizar(c)))) {
      regla.objetivos.forEach((o) => encontrados.add(o));
    }
  }
  return encontrados.size > 0 ? [...encontrados] : ["APO02"];
}

/** Analiza un documento (texto plano) y extrae sus NPO */
export function extraerNpos(texto: string, documento: string): Npo[] {
  const resultados: Npo[] = [];
  const vistas = new Set<string>();

  for (const frase of dividirFrases(texto)) {
    const fraseNorm = normalizar(frase);

    let mejorTipo: TipoNpo | null = null;
    let mejorHits = 0;
    const senales: string[] = [];

    for (const grupo of SENALES) {
      const hits = grupo.frases.filter((p) => fraseNorm.includes(normalizar(p)));
      if (hits.length > mejorHits) {
        mejorHits = hits.length;
        mejorTipo = grupo.tipo;
      }
      if (hits.length > 0) senales.push(...hits);
    }

    if (!mejorTipo || mejorHits === 0) continue;

    const clave = fraseNorm.slice(0, 80);
    if (vistas.has(clave)) continue;
    vistas.add(clave);

    resultados.push({
      id: "",
      tipo: mejorTipo,
      texto: frase.length > 220 ? frase.slice(0, 217) + "…" : frase,
      documento,
      objetivos: mapearObjetivos(fraseNorm),
      confianza: Math.min(95, 55 + 8 * (mejorHits - 1)),
      senales: [...new Set(senales)].slice(0, 4),
    });
  }

  return resultados
    .sort((a, b) => b.confianza - a.confianza)
    .slice(0, 20);
}

/** Construye el análisis completo a partir de una lista de documentos */
export function analizarDocumentos(
  documentos: { nombre: string; texto: string }[],
  fuente: "documentos" | "ejemplo"
): Analisis {
  // 1) Extraer NPO de cada documento
  const npos: Npo[] = [];
  const resumenDocs: DocumentoResumen[] = [];

  for (const doc of documentos) {
    const hallazgos = extraerNpos(doc.texto, doc.nombre);
    npos.push(...hallazgos);
    resumenDocs.push({
      nombre: doc.nombre,
      caracteres: doc.texto.length,
      frases: dividirFrases(doc.texto).length,
      hallazgos: hallazgos.length,
    });
  }

  npos.forEach((n, i) => {
    n.id = `NPO-${String(i + 1).padStart(3, "0")}`;
  });

  // 2) Calcular madurez por objetivo a partir de los hallazgos
  const conteo: Record<string, { problemas: number; oportunidades: number }> = {};
  for (const n of npos) {
    for (const obj of n.objetivos) {
      if (!NOMBRES_OBJETIVO[obj]) continue;
      conteo[obj] ??= { problemas: 0, oportunidades: 0 };
      if (n.tipo === "Problema") conteo[obj].problemas++;
      if (n.tipo === "Oportunidad") conteo[obj].oportunidades++;
    }
  }

  const madurez: Madurez[] = Object.keys(MADUREZ_BASE)
    .filter((obj) => NOMBRES_OBJETIVO[obj])
    .map((obj) => {
      const base = MADUREZ_BASE[obj];
      const c = conteo[obj] ?? { problemas: 0, oportunidades: 0 };
      const ajuste = c.problemas * 0.35 - c.oportunidades * 0.2;
      const actual = Math.min(4.9, Math.max(0.5, base.actual - ajuste));
      return {
        objetivo: obj,
        nombre: NOMBRES_OBJETIVO[obj].nombre,
        dominio: NOMBRES_OBJETIVO[obj].dominio,
        actual: Math.round(actual * 10) / 10,
        objetivoNivel: base.objetivoNivel,
      };
    });

  // 3) Generar iniciativas para la hoja de ruta
  const objetivosConHallazgos = new Set<string>();
  npos.forEach((n) => n.objetivos.forEach((o) => objetivosConHallazgos.add(o)));

  const iniciativas: Iniciativa[] = [];
  let n = 1;
  for (const obj of objetivosConHallazgos) {
    if (!NOMBRES_OBJETIVO[obj]) continue;
    const c = conteo[obj] ?? { problemas: 0, oportunidades: 0 };
    const impacto = Math.min(10, Math.round(5 + c.problemas * 1.2 + c.oportunidades * 0.6));
    const esfuerzo = ESFUERZO_OBJETIVO[obj] ?? 5;
    const horizonte =
      impacto >= 6 && esfuerzo <= 5
        ? "Corto plazo"
        : esfuerzo >= 8
          ? "Largo plazo"
          : "Mediano plazo";
    iniciativas.push({
      id: `IN-${String(n++).padStart(2, "0")}`,
      nombre: NOMBRE_INICIATIVA[obj],
      impacto,
      esfuerzo,
      horizonte,
      objetivos: [obj],
    });
  }

  // 4) KPIs de seguimiento calculados con los hallazgos
  const confianzaProm = npos.length
    ? Math.round(npos.reduce((s, n) => s + n.confianza, 0) / npos.length)
    : 0;

  const kpis: Kpi[] = [
    {
      nombre: "Hallazgos (NPO) detectados",
      valor: String(npos.length),
      meta: "Validación de expertos pendiente",
      tendencia: npos.length > 0 ? "up-good" : "flat",
    },
    {
      nombre: "Objetivos COBIT con brecha",
      valor: `${iniciativas.length} de ${madurez.length}`,
      meta: "Plan en hoja de ruta",
      tendencia: "up-good",
    },
    {
      nombre: "Confianza promedio del análisis",
      valor: `${confianzaProm}%`,
      meta: "≥ 80%",
      tendencia: confianzaProm >= 80 ? "up-good" : "flat",
    },
    {
      nombre: "Documentos analizados",
      valor: String(documentos.length),
      meta: "Todos los de la empresa",
      tendencia: "flat",
    },
  ];

  return { documentos: resumenDocs, npos, madurez, iniciativas, kpis, fuente };
}
