import { db, eq, Products, Categories } from "astro:db";

export const getSweatShirtsFromDb = async () => {
  
const sweatshirtList = await db
  .select()
  .from(Products)
  .innerJoin(Categories, eq(Categories.id, Products.category_id))
  .where(eq(Categories.name, "polerones"));

  return sweatshirtList;
};


export const getTshirtsFromDb = async () => {
  const tshirtList = await db
  .select()
  .from(Products)
  .innerJoin(Categories, eq(Categories.id, Products.category_id))
  .where(eq(Categories.name, "poleras"));

  return tshirtList;
};