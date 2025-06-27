"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./LargeComponent"), {
  ssr: false,
});

export default function HomeContent() {
  return (
    <main className="flex flex-col items-center gap-30 w-full px-20 text-center mt-40">
      <h1 className="text-3xl font-bold">Bienvenido</h1>
      <p className="text-lg text-gray-600">
        Esta es una imagen optimizada:
      </p>

      {/* Imagen optimizada responsiva y sin recorte */}
      <div className="w-full max-w-3xl relative aspect-video">
        <Image
            src="/images/seo-image.png"
            alt="Ejemplo de imagen optimizada"
            fill
            className="object-contain"
            priority
        />
    </div>

      <DynamicComponent />
    </main>
  );
}
