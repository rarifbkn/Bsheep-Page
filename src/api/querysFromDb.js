import { db, eq, Products, Categories,isDbError } from "astro:db";

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
    return  await db
    .select()
    .from(Products);

  }catch(e){
    console.log(e);
  }
}

export const getCategoriesFromDb = async () => {
  try{
    return await db
    .select().
    from(Categories);
  }catch(e){
    console.log(e);
  }
}
export const getCategoryName= async (id) => {
  const result = await db
  .select()
  .from(Categories)
  .where(eq(Categories.id,id));

  return result[0].name;
    
}