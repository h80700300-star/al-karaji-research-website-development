import {Hero,Chapters,Timeline} from '@/components/home'
import {publicDB} from '@/lib/public-db'
import {base,name} from '@/lib/research'
import Link from 'next/link'
export const dynamic='force-dynamic'
export default async function Page(){const {data,error}=await publicDB().from('articles').select('slug,title,excerpt').eq('status','published').order('published_at',{ascending:false}).limit(12);return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name,url:base,inLanguage:'fa'})}}/><Hero/><Chapters/><div className="wrap lower"><Timeline/>{data?.length?<section><h2>تازه‌های پژوهش</h2>{data.map(a=><p key={a.slug}><Link href={'/articles/'+a.slug}>{a.title} ←</Link></p>)}</section>:null}{error&&<p>دریافت تازه‌های پژوهش در حال حاضر ممکن نیست.</p>}</div></>}
