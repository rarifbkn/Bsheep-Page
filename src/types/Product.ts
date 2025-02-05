import type { Categories } from "./Category"

export type  Product = {
    id: number,
    name:string,
    price: number,
    description?: string,
    stock: number,
    image: string,
    Category: Categories,
    deleted_at?: Date,
    updated_at?: Date,
    created_at?: Date,
}