import { db, Products} from 'astro:db';

export const getProductsFromDb = async () => {
  try{
    const productsList = await db.select().from(Products)
    return productsList;
  }catch(err){
    return new Response(`Error inesperado: ${err}`, {status: 500});
  }
}