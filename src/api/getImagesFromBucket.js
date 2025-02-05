import { supabase } from "@/lib/supabase"

export const getImageUrlFromPublicBucket = async (filePath) => {
  const { data, error } = await supabase
  .storage
  .from('bsheep-bucket')
  .getPublicUrl(filePath);

  if (error){
    console.log('Error loading image from bucket', error)
    return null
  }
  return data
}