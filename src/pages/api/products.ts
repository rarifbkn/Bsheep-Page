import type { APIRoute } from "astro";




export async function POST() {
return new Response(JSON.stringify({
    status:'ok',
    message: 'This was a POST'
}))
}