import Link from "next/link";
import { Section, Card, ValorList } from "@/components/Section";
import CtaFinal from "@/components/CtaFinal";

export const metadata = { title: "Nuestro método — SmartGov COBIT" };

export default function MetodoPage() {
  return (
    <>
      <p className="migas">
        <Link href="/">Inicio</Link> <span>›</span> Método
      </p>

      <div className="hero">
        <h1>
          Nuestro método: <span>la IA lee, el experto valida</span>
        </h1>
        <p>
          Ni consultores perdiendo semanas leyendo carpetas, ni algoritmos
          solos decidiendo sobre tu empresa. Un método híbrido donde cada quien
          hace lo que mejor sabe hacer.
        </p>
      </div>

      <Section titulo="El ciclo en detalle" subtitulo="Cuatro etapas, un solo objetivo: decisiones de TI que se puedan defender ante cualquier junta">
        <div className="grid grid-4">
          <Card titulo="1 · Carga">
            <ul>
              <li>La empresa sube sus documentos reales</li>
              <li>Planes, informes, actas, contratos y políticas</li>
              <li>La plataforma los ordena y prepara para el análisis</li>
            </ul>
          </Card>
          <Card titulo="2 · Análisis automático">
            <ul>
              <li>El motor de PLN lee cada frase buscando señales</li>
              <li>Clasifica hallazgos: necesidad, problema u oportunidad</li>
              <li>Mapea cada hallazgo a objetivos COBIT 2019</li>
            </ul>
          </Card>
          <Card titulo="3 · Validación experta">
            <ul>
              <li>Un consultor senior revisa cada hallazgo</li>
              <li>Ajusta, descarta o confirma con criterio de negocio</li>
              <li>Solo lo validado llega al informe final</li>
            </ul>
          </Card>
          <Card titulo="4 · Entrega y seguimiento">
            <ul>
              <li>Informe de brechas con trazabilidad total</li>
              <li>Hoja de ruta priorizada y plan por horizontes</li>
              <li>Monitoreo con KPIs y asesoría continua</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section titulo="Semana a semana" subtitulo="Así se ve un proyecto típico frente a las 6 semanas de la consultoría tradicional">
        <table className="tabla">
          <thead>
            <tr>
              <th>Semana</th>
              <th>Con SmartGov COBIT</th>
              <th>Entregable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1</strong></td>
              <td>Carga de documentos y análisis automático con IA</td>
              <td>Borrador de hallazgos (NPO) con evidencia</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>Sesión de validación con el consultor experto</td>
              <td>Diagnóstico aprobado y matriz de priorización</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>Construcción del plan corto, mediano y largo plazo</td>
              <td>Hoja de ruta ejecutiva lista para la junta</td>
            </tr>
            <tr>
              <td><strong>4+</strong></td>
              <td>Seguimiento con KPIs, asesoría y ajustes periódicos</td>
              <td>Evaluación continua de la madurez</td>
            </tr>
          </tbody>
        </table>
        <ValorList items={["60% menos tiempo (horas vs. 6 semanas)", "Trazabilidad algorítmica", "Control humano ético, sin alucinaciones"]} />
      </Section>

      <Section titulo="Quién hace qué" subtitulo="La división de trabajo que hace posible el ahorro">
        <div className="grid grid-2">
          <Card titulo="La plataforma hace" >
            <ul>
              <li>Leer miles de frases en minutos, sin cansarse</li>
              <li>Detectar señales de problemas y oportunidades</li>
              <li>Cruzar cada hallazgo con el marco COBIT 2019</li>
              <li>Calcular madurez, brechas y prioridades</li>
              <li>Guardar la evidencia: qué documento respalda qué hallazgo</li>
            </ul>
          </Card>
          <Card titulo="Los expertos aportan">
            <ul>
              <li>El contexto que no está en los documentos</li>
              <li>La lectura de negocio: qué importa y qué no</li>
              <li>La validación ética de cada conclusión</li>
              <li>La asesoría durante la ejecución del plan</li>
              <li>La confianza de un rostro humano frente al cliente</li>
            </ul>
          </Card>
        </div>
      </Section>

      <CtaFinal texto="¿Quieres ver el método funcionando con datos reales?" ctaHref="/diagnostico" ctaTexto="Probar el diagnóstico" />
    </>
  );
}
