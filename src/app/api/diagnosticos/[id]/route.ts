import { NextResponse } from "next/server";
import { obtenerDiagnostico, eliminarDiagnostico } from "@/lib/db";

export const runtime = "nodejs";

/** Obtiene un diagnóstico por id */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const diagnostico = obtenerDiagnostico(Number(id));
  if (!diagnostico) {
    return NextResponse.json({ error: "Diagnóstico no encontrado." }, { status: 404 });
  }
  return NextResponse.json({ diagnostico });
}

/** Elimina un diagnóstico por id */
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const ok = eliminarDiagnostico(Number(id));
  if (!ok) {
    return NextResponse.json({ error: "Diagnóstico no encontrado." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
