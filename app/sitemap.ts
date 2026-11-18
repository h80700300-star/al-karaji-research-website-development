import {base,chapters} from '@/lib/research'
import {publicDB} from '@/lib/public-db'
export const dynamic='force-dynamic'
export default async function sitemap(){const {data}=await publicDB().from('articles').select('slug,updated_at').eq('status','published');return [{url:base},...chapters.map(c=>({url:base+'/'+c.slug})),...(data||[]).map(a=>({url:base+'/articles/'+a.slug,lastModified:a.updated_at}))]}
