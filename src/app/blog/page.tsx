export const metadata = {
    title: "Blog de Optimización y SEO",
    description: "Lee artículos sobre cómo mejorar tu sitio web con Next.js y SEO.",
    openGraph: {
      title: "Blog de Optimización y SEO",
      description: "Artículos y tutoriales sobre optimización web.",
      images: ["/images/blog-image.png"],
      type: "website",
    },
  };
  
  export default function BlogPage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Bienvenido al Blog</h1>
        <p>Aquí encontrarás artículos sobre optimización y SEO en Next.js.</p>
      </div>
    );
  }
  