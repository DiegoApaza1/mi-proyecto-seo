export const metadata = {
  title: "Mi Sitio Optimizado - Home",
  description: "Aprende sobre optimización SEO y rendimiento en Next.js.",
  openGraph: {
    title: "Mi Sitio Optimizado",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js.",
    images: ["/images/seo-image.png"],
    type: "website",
  },
};

import HomeContent from "@/app/components/HomeContent";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeContent />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Puedes colocar tus enlaces aquí */}
      </footer>
    </div>
  );
}
