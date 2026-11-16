import { NextResponse } from "next/server";
import { guardarDiagnostico, listarDiagnosticos } from "@/lib/db";
import type { Analisis } from "@/lib/pln";

export const runtime = "nodejs";

/** Lista los diagnósticos guardados */
export async function GET() {
  return NextResponse.json({ diagnosticos: listarDiagnosticos() });
}

/** Guarda un análisis nuevo */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { nombre?: string; analisis: Analisis };
    if (!body?.analisis?.npos) {
      return NextResponse.json(
        { error: "Falta el análisis a guardar." },
        { status: 400 }
      );
    }
    const fecha = new Date().toLocaleString("es-CO", { dateStyle: "medium", timeStyle: "short" });
    const nombre = body.nombre?.trim() || `Diagnóstico ${fecha}`;
    const id = guardarDiagnostico(nombre, body.analisis);
    return NextResponse.json({ id });
  } catch (error) {
    console.error("Error al guardar diagnóstico:", error);
    return NextResponse.json(
      { error: "No se pudo guardar el diagnóstico." },
      { status: 500 }
    );
  }
}
