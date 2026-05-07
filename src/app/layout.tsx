import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './globals.css';

export const metadata = {
  title: 'ChinchesOut - Desinfección y Control Profesional de Plagas',
  description: 'Desinfección y Control Profesional de Plagas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/ChinchesOut-fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7P779RX9ET"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7P779RX9ET');
            `,
          }}
        />
      </head>
      <body className="bg-brand-gray text-brand-dark antialiased selection:bg-brand-green selection:text-white">
        <div className="min-h-screen bg-white font-sans text-brand-dark">
          <Header />
          <main>{children}</main>
          <Footer />

        </div>
      </body>
    </html>
  );
}
