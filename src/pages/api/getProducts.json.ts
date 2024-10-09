import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
    const res = await fetch("http://localhost:3000/prueba");
    const data = await res.json()
    return new Response( 
  
        JSON.stringify(data)
      )
}