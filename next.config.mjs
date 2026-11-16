import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // MVP: sin configuraciones especiales todavía
  outputFileTracingRoot: dir,
  // mammoth, pdf-parse y better-sqlite3 deben correr en Node, sin empaquetarse
  serverExternalPackages: ["pdf-parse", "mammoth", "better-sqlite3"],
};

export default nextConfig;
