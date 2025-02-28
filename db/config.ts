import { defineDb,defineTable,column, NOW } from 'astro:db';

// https://astro.build/db/config

export const Categories = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
    name: column.text({unique:true}),
  }
})

export const Products = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
    name:column.text({unique:true}),
    price: column.number(),
    description: column.text({optional:true}),
    stock: column.number(),
    image: column.text(),
    category_id: column.number({references:()=>Categories.columns.id}),
  }
})



export default defineDb({
  tables: {
    Categories,
    Products,
  },
});