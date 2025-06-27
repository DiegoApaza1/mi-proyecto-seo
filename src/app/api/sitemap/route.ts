import { NextResponse } from "next/server";

export async function GET() {
  
  const BASE_URL = "https://mi-proyecto-4yj4dmokf-diego-apazas-projects.vercel.app/";  // Reemplaza por tu dominio en producción

  const urls = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
