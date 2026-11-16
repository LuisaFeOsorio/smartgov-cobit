# Roadmap del MVP — SmartGov COBIT

## Iteración 0 · Estructura y navegación ✅

- [x] Estructura Next.js (App Router, TypeScript)
- [x] Navbar y footer con navegación completa
- [x] Landing con las 4 ramas del mapa mental
- [x] Páginas de contexto, producto, 3 fases, clientes, proyecto, contacto
- [x] Demo del diagnóstico en 4 pasos con barra de progreso
- [x] Datos mock centralizados en `src/data/`
- [x] Explicaciones en cada paso + cajas "Al 100%" con la visión completa

## Iteración 1 · Funcionalidad del diagnóstico (Fase 1) ✅

- [x] Carga real de archivos (PDF, Word `.docx`, `.txt`, `.md`, `.csv`)
- [x] Extracción de texto: `pdf-parse` (PDF) y `mammoth` (Word)
- [x] Motor de PLN por reglas en español (`src/lib/pln.ts`): señales por tipo
      (Necesidad / Problema / Oportunidad), sin APIs externas ni costos
- [x] Mapeo de NPO a los objetivos COBIT 2019 con nivel de confianza y señales
- [x] Cálculo de madurez por objetivo (línea base ajustada por hallazgos)
- [x] Generación de la hoja de ruta (iniciativas con impacto/esfuerzo/horizonte)
- [x] KPIs calculados con los resultados reales del análisis
- [x] API `POST /api/analizar` (multipart con archivos o `{"demo": true}`)
- [x] El análisis viaja entre los pasos vía `sessionStorage`; si no hay
      documentos propios, la demo sigue funcionando con datos de ejemplo

## Iteración 2 · Historial, base de datos y matriz interactiva ✅

- [x] Base de datos SQLite (`better-sqlite3`) para guardar diagnósticos
- [x] APIs del historial: guardar (POST), listar, obtener por id y eliminar
- [x] Página `/diagnostico/historial` con tabla de diagnósticos guardados
- [x] Reabrir cualquier diagnóstico con `?id=` en los pasos 2, 3 y 4
- [x] Matriz de impactos vs. esfuerzo interactiva: arrastrar iniciativas
      entre celdas para repriorizar
- [ ] Plan editable: cambiar horizonte/costos y persistir los cambios
- [ ] KPIs conectados a sistemas reales de la empresa

## Iteración 3 · Cuentas y modelo de negocio

- [ ] Autenticación (login por empresa)
- [ ] Roles: admin, consultor, cliente
- [ ] Planes de suscripción SaaS
- [ ] Panel de consultor para validar diagnósticos

## Iteración 4 · Producción

- [ ] Despliegue (Vercel / nube propia)
- [ ] Analítica y métricas de producto
- [ ] Endurecimiento de seguridad y privacidad de documentos
