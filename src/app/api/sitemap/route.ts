import { NextResponse } from 'next/server';

export async function GET() {
  
  const BASE_URL = "http://172.22.155.60:3000//api/sitemap";  // Cambiar por tu dominio real

  const urls = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
  </urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
