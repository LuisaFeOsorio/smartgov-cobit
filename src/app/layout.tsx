import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SmartGov COBIT — Diagnóstico de gobierno de TI con IA",
  description:
    "Plataforma SaaS de consultoría híbrida inteligente: IA + expertos para diagnósticos COBIT 2019 en horas, no semanas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="marca-color" aria-hidden="true" />
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
