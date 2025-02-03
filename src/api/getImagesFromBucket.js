import { supabase } from "@/lib/supabase"

export const getImagURL = async (path,expiresIn=3600) => {
    const { data, error } = await supabase
  .storage
  .listBuckets();
    if(error) {
        console.error("Error Obteniendo URL firmada",error.message);
        return null;
    }

    return data.signedUrl;
}