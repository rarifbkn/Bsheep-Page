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

export const Orders = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
    product_id: column.number({references:()=>Products.columns.id}),
    email: column.text(),
    amount: column.number(),
    total: column.number(),
    request_date: column.date({default:NOW}),
  }
})

export const Payments = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
    order_id: column.number({references:()=>Orders.columns.id}),
    payment_date: column.date({default: NOW}),
    payment_method: column.text(),
    payment_status: column.text(),
    payment_amount: column.number(),
  }
})

export default defineDb({
  tables: {
    Categories,
    Products,
    Orders,
    Payments
  },
});