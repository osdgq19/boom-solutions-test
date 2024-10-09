import type { APIRoute } from 'astro';

interface Product {
  id: number
  title: string;
  description: string;
  price: number;
  stock: number;
  category:string;
  serial: string;
  brand: string;
  discount: number;
  rating: number;

  
}


export const GET: APIRoute = async ({ params, request }) => {
    const res = await fetch("http://localhost:3000/prueba");
    const data:Product = await res.json()
    return new Response( 
  
        JSON.stringify(data)
      )
}