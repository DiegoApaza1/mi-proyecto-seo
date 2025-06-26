export const metadata = {
    title: "Contacto - Mi Sitio Optimizado",
    description: "Ponte en contacto con nosotros para consultas sobre SEO y rendimiento web.",
    openGraph: {
      title: "Contacto - Mi Sitio Optimizado",
      description: "Estamos disponibles para ayudarte a mejorar tu sitio web.",
      images: ["/images/contact-image.png"],
      type: "website",
    },
  };
  
  export default function ContactoPage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Página de Contacto</h1>
        <p>Escríbenos para resolver tus dudas sobre SEO y Next.js.</p>
      </div>
    );
  }
// This is a simple contact page for a Next.js application.  