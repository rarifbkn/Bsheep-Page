import { db, eq, Products, Categories } from "astro:db";

export const getSweatShirtsFromDb = async () => {  
  const categories = await db
  .select()
  .from(Categories)
  .where(eq(Categories.name,"polerones"))
  
  return await db
  .select()
  .from(Products)
  .where(eq(Products.category_id, categories[0].id));
};

export const getTshirtsFromDb = async () => {
  const categories = await db
  .select()
  .from(Categories)
  .where(eq(Categories.name,"poleras"))

  return await db
  .select()
  .from(Products)
  .where(eq(Products.category_id, categories[0].id));
};

export const getProductsFromDb = async () => {
  try{
    const {data,error} =  await db.select().from(Products);
    if (error) throw error;
    return data;
  }catch(e){
    console.log(e);
  }
}

export const getCategoriesFromDb = async () => {
  try{
    const {data,error} =  await db.select().from(Categories);
    if (error) throw error;
    return data;
  }catch(e){
    console.log(e);
  }
}