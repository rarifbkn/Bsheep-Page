import { db, eq, Products, Categories } from "astro:db";
import { asDrizzleTable } from '@astrojs/db/utils';

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
  return await db.select().from(Products);
}

export const getCategoriesFromDb = async () => {
  return await db.select().from(Categories);
}