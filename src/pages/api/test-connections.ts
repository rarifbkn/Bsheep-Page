import type { APIRoute } from "astro";
import { db,Categories } from "astro:db";



export const GET:APIRoute = async () => {
    const results = {
        timestap: new Date().toISOString(),
        astroDb:{status: 'uknown', message:''},
        supabase:{status: 'uknown', message:''},
    };

    //test connection to DB - Turso 
    try {
        await db.select().from(Categories).limit(1);

        results.astroDb.status = 'ok';
        results.astroDb.message = 'Successfully connected to Astro DB'
    }catch(error){
        results.astroDb.status = 'error';
        results.astroDb.message = error instanceof Error ? error.message : String(error);
    }

    // //test connection to Bucket - Supabase
    // try{
    //     const supabaseUrl = import.meta.env.SUPABASE_URL;
    //     const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

    //     if(!supabaseUrl || !supabaseAnonKey) throw new Error('Supabase environment variable are not set');
        
    //     const supabase = createClient(supabaseUrl, supabaseAnonKey);

    //     const { data, error} = await supabase.storage.listBuckets();

    //     console.log("🚀 ~ constGET:APIRoute= ~ data:", data)
    //     if(error) throw error;

    //     results.supabase.status = 'ok';
    //     results.supabase.message = `Successfully connected to Supabase Bucket. Found ${data || 0} buckets`;

    // }catch(error){
    //     results.supabase.status = 'error';
    //     results.supabase.message = error instanceof Error ? error.message : String(error);
    // }

    return new Response(JSON.stringify(results, null,2),{
        headers: {'Content-Type':'application/json'}
    });

}