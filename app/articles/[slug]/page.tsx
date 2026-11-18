import {publicDB} from '@/lib/public-db'
import {notFound} from 'next/navigation'
import Link from 'next/link'
import {cache} from 'react'
export const dynamic='force-dynamic'
const get=cache(async(slug:string)=>{const {data,error}=await publicDB().from('articles').select('title,excerpt,content,cover_image_url,seo_description,article_sources(sources(id,title)),article_tags(tags(name))').eq('slug',slug).eq('status','published').maybeSingle();if(error)throw Error('خطا در دریافت مقاله');if(!data)notFound();return data})
type P={params:Promise<{slug:string}>}
export async function generateMetadata({params}:P){const {slug}=await params,a=await get(slug);return {title:a.title,description:a.seo_description||a.excerpt,alternates:{canonical:'/articles/'+slug},openGraph:{title:a.title,description:a.excerpt}}}
export default async function Page({params}:P){const a=await get((await params).slug);return <div className="reading"><Link href="/">صفحه اصلی</Link><h1>{a.title}</h1><p>{a.excerpt}</p>{a.cover_image_url&&<img src={a.cover_image_url} alt={a.title}/>}<article className="articlebody">{a.content}</article>{a.article_tags.flatMap(x=>x.tags).filter(Boolean).map(t=><span key={t.name}>#{t.name} </span>)}{a.article_sources.flatMap(x=>x.sources).filter(Boolean).map(s=><p key={s.id}><Link href={'/sources#'+s.id}>{s.title}</Link></p>)}</div>}
