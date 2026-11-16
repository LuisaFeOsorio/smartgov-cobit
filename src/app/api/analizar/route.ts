import { NextResponse } from "next/server";
import { analizarDocumentos } from "@/lib/pln";
import { documentosDemo } from "@/data/documentos-demo";

// La API necesita Node (mammoth y pdf-parse no corren en el edge)
export const runtime = "nodejs";

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB por archivo
const MAX_ARCHIVOS = 8;

/** Extrae el texto de un archivo según su extensión */
async function textoDeArchivo(nombre: string, buffer: Buffer): Promise<string> {
  const ext = nombre.toLowerCase().split(".").pop() ?? "";

  if (ext === "pdf") {
    const { PDFParse } = await import("pdf-parse");
    const parser = new PDFParse({ data: new Uint8Array(buffer) });
    try {
      const resultado = await parser.getText();
      return resultado.text;
    } finally {
      await parser.destroy();
    }
  }

  if (ext === "docx") {
    const mammoth = await import("mammoth");
    const resultado = await mammoth.extractRawText({ buffer });
    return resultado.value;
  }

  // .txt, .md, .csv y demás: texto plano UTF-8
  return buffer.toString("utf8");
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let documentos: { nombre: string; texto: string }[] = [];

  try {
    if (contentType.includes("application/json")) {
      // Modo demo: analizar los documentos de ejemplo incluidos
      const body = (await request.json()) as { demo?: boolean };
      if (body.demo) {
        documentos = documentosDemo;
      }
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const archivos = formData.getAll("archivos").filter((f): f is File => f instanceof File);

      if (archivos.length === 0) {
        return NextResponse.json(
          { error: "No se recibieron archivos. Sube al menos un documento." },
          { status: 400 }
        );
      }
      if (archivos.length > MAX_ARCHIVOS) {
        return NextResponse.json(
          { error: `Máximo ${MAX_ARCHIVOS} archivos por análisis.` },
          { status: 400 }
        );
      }

      for (const archivo of archivos) {
        const buffer = Buffer.from(await archivo.arrayBuffer());
        if (buffer.length > MAX_BYTES) {
          documentos.push({ nombre: archivo.name, texto: "" });
          continue;
        }
        const texto = await textoDeArchivo(archivo.name, buffer);
        documentos.push({ nombre: archivo.name, texto });
      }
    } else {
      return NextResponse.json(
        { error: "Solicitud no soportada. Usa multipart/form-data o JSON {demo:true}." },
        { status: 400 }
      );
    }

    if (documentos.length === 0) {
      return NextResponse.json(
        { error: "No hay documentos para analizar." },
        { status: 400 }
      );
    }

    const analisis = analizarDocumentos(
      documentos,
      contentType.includes("application/json") ? "ejemplo" : "documentos"
    );

    return NextResponse.json({ analisis });
  } catch (error) {
    console.error("Error en /api/analizar:", error);
    return NextResponse.json(
      { error: "No se pudo analizar los documentos. Verifica que sean PDF, Word o texto legible." },
      { status: 500 }
    );
  }
}
