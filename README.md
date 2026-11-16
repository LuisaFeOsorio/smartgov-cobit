# SmartGov COBIT — MVP

Plataforma SaaS de **consultoría híbrida inteligente** (IA + consultores expertos)
para diagnósticos de gobierno de TI con **COBIT 2019**.

## Estado actual

**MVP navegable**: todas las secciones del mapa mental del proyecto son
navegables con datos de ejemplo (mock). La funcionalidad real (IA, autenticación,
persistencia) se agrega en iteraciones posteriores.

## Cómo ejecutar

```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## Estructura

```
src/
├── app/                  # Rutas (Next.js App Router)
│   ├── api/analizar/     # API: recibe archivos, extrae texto y analiza
│   ├── page.tsx          # Landing
│   ├── contexto/         # Rama 1: necesidad, problema u oportunidad
│   ├── producto/         # Rama 2: qué ofrecemos
│   ├── fases/            # Detalle de las 3 fases del producto
│   ├── diagnostico/      # Flujo real de diagnóstico en 4 pasos
│   ├── clientes/         # Rama 3: perfil del cliente
│   ├── proyecto/         # Rama 4: naturaleza del proyecto
│   └── contacto/         # Formulario visual
├── components/           # Navbar, Footer, tarjetas, barra de progreso, vistas
├── lib/
│   ├── pln.ts            # Motor de PLN por reglas (español) + generación de
│   │                     #   NPO, madurez, hoja de ruta y KPIs
│   └── useAnalisis.tsx   # Hook: análisis propio (sessionStorage) o de ejemplo
└── data/                 # Datos de ejemplo y documentos demo
```

## Cómo funciona el diagnóstico

1. **Paso 1** — El usuario sube archivos (PDF, Word, texto). La API extrae el
   texto con `pdf-parse` / `mammoth`.
2. **Paso 2** — El motor de PLN (`src/lib/pln.ts`) analiza el texto frase por
   frase: detecta señales de *Necesidad*, *Problema* u *Oportunidad*, las mapea
   a objetivos COBIT 2019 y calcula la madurez por objetivo.
3. **Paso 3** — Cada grupo de hallazgos se convierte en una iniciativa con
   impacto, esfuerzo y horizonte (matriz de priorización).
4. **Paso 4** — Los KPIs se calculan con los resultados reales del análisis.

El análisis corre 100% local: **los documentos no salen de la aplicación**.
Sin archivos propios, toda la demo funciona con documentos de ejemplo.

## Mapa de rutas

| Ruta | Contenido |
|---|---|
| `/` | Landing con las 4 ramas del mapa mental |
| `/contexto` | Problema, situación en Colombia, oportunidad |
| `/producto` | Qué es + 3 fases + propuesta de valor |
| `/fases/diagnostico` | Fase 1 · Diagnóstico con IA |
| `/fases/hoja-de-ruta` | Fase 2 · Hoja de ruta |
| `/fases/seguimiento` | Fase 3 · Seguimiento con KPIs |
| `/diagnostico` | Paso 1: carga real de documentos (PDF, Word, texto) |
| `/diagnostico/resultado` | Paso 2: NPO + informe de brechas |
| `/diagnostico/hoja-de-ruta` | Paso 3: matriz interactiva (arrastrar) |
| `/diagnostico/seguimiento` | Paso 4: KPIs y asesoría |
| `/diagnostico/historial` | Diagnósticos guardados en base de datos |
| `/clientes` | Segmento, sectores, decisores, empresa ideal |
| `/proyecto` | Privado/intangible, equipo, modelo de negocio |
| `/contacto` | Formulario demo |

## Próximos pasos

Ver `docs/ROADMAP.md`.
