import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const inter = Inter({ subsets: ["latin"] });
const open_Sans = Open_Sans({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "Setup Stripe",
  description:
    "Setup para procesamiento de pagos online, de manera estatica o dinamica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-background w-full font-extrabold", ${open_Sans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
