import { db,Categories } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Categories).values(
		[
			{name:'poleras'},
			{name:'pantalones'},
			{name:'accesorios'},
		]
	)

	// db.delete(Categories).run();
}