import { db,Categories, Products } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	const categories = await db.insert(Categories).values(
		[
			{name:'poleras'},
			{name:'polerones'},
			{name:'accesorios'},
		]
	).returning();
	
	await db.insert(Products).values([
		{
			"name": "Polera Blanca",
			"category_id": categories.find(c => c.name === "poleras")?.id || 1,
			"image":"https://mnntrmrwimkrypgfmcww.supabase.co/storage/v1/object/public/bsheep-bucket/poleras/polera%20blanca.jpg",
			"price": 11990,
			"description": "Polera de un solo color, cuello redondo.",
			"stock": 10
		},
		{
		  "name": "Polera Negra",
		  "category_id": categories.find(c => c.name === "poleras")?.id || 1,
		  "image":"https://mnntrmrwimkrypgfmcww.supabase.co/storage/v1/object/public/bsheep-bucket/poleras/polera%20negra%20simple.jpg",
		  "price": 11990,
		  "description": "Polera de un solo color, cuello redondo.",
		  "stock": 10
	  },
	  {
		"name": "Polera Café",
		"category_id": categories.find(c => c.name === "poleras")?.id || 1,
		"image":"https://mnntrmrwimkrypgfmcww.supabase.co/storage/v1/object/public/bsheep-bucket/poleras/polera%20cafe%20oversize.jpg",
		"price": 11990,
		"description": "Polera de un solo color, cuello redondo.",
		"stock": 10
	  },
	  {
		"name": "Polerón Negro",
		"category_id": categories.find(c => c.name === "polerones")?.id || 2,
		"image":"https://mnntrmrwimkrypgfmcww.supabase.co/storage/v1/object/public/bsheep-bucket/polerones/poleron-simple-negro.jpg",
		"price": 14990,
		"description": "Diseño Minimalista",
		"stock": 10
	},
	{
	  "name": "Polerón Verde",
	  "category_id": categories.find(c => c.name === "polerones")?.id || 2,
	  "image":"https://mnntrmrwimkrypgfmcww.supabase.co/storage/v1/object/public/bsheep-bucket/polerones/poleron-simple-verde.jpg",
	  "price": 14990,
	  "description": "Diseño Minimalista",
	  "stock": 10
	}
	
	  ])
	
	console.log("-- Productos insertados --");
}