import { db, eq, Products, Categories } from "astro:db";

export const getSweatShirtsFromDb = async () => {
  
  return await db
  .select()
  .from(Products)
  .where(eq(Products.category_id, 2));
};


export const getTshirtsFromDb = async () => {
  return await db
  .select()
  .from(Products)
  .where(eq(Products.category_id, 1));
};

export const getProductsFromDb = async () => {
  return await db.select().from(Products);
}

export const getCategoriesFromDb = async () => {
  return await db.select().from(Categories);
}
