import type { Category } from "./Category"

export type  Product = {
    id: number,
    name:string,
    price: number,
    description?: string,
    stock: number,
    image: string,
    category_id: number,
}