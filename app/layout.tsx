import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Probiose Ec - Soluciones Agrícolas Sostenibles",
  description: "Expertos en control de plagas agrícolas, fertilizantes biológicos y tratamientos fitosanitarios. Protege tus cultivos con soluciones certificadas en Ecuador.",
  keywords: "agricultura, plagas, fertilizantes, Ecuador, cultivos, fitosanitaria, Moko, Ralstonia",
  authors: [{ name: "Probiose Ec" }],
  openGraph: {
    title: "Probiose Ec - Tu Mejor Alternativa Agrícola",
    description: "Soluciones especializadas para el control de enfermedades como Moko, Ralstonia y otras plagas agrícolas.",
    url: "https://probioseec.com",
    siteName: "Probiose Ec",
    images: [
      {
        url: "https://assets.probioseec.com/archivos/Logo-Probiose.png",
        width: 1200,
        height: 630,
        alt: "Probiose Ec Logo",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Probiose Ec - Soluciones Agrícolas",
    description: "Expertos en tratamientos fitosanitarios y fertilizantes biológicos.",
    images: ["https://assets.probioseec.com/archivos/Logo-Probiose.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Probiose Ec",
              "url": "https://probioseec.com",
              "logo": "https://assets.probioseec.com/archivos/Logo-Probiose.png",
              "description": "Empresa especializada en soluciones agrícolas sostenibles, control de plagas y tratamientos fitosanitarios.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vinces",
                "addressCountry": "EC"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+593-93-946-9787",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://wa.me/1234567890"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
