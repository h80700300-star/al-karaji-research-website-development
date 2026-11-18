'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {Compass,Menu,X,BookOpen} from 'lucide-react'
import {chapters} from '@/lib/research'
export default function Header(){const path=usePathname(),[open,set]=useState(false);return <header className="mast"><div className="wrap mastrow"><Link href="/" className="brand"><span className="seal"><Compass size={32} strokeWidth={1.3}/></span><span><strong>کرجی‌نامه</strong><small>پایگاه پژوهش تاریخ علم</small></span></Link><nav className={open?'opened':''} aria-label="فهرست اصلی">{[{slug:'',nav:'صفحه اصلی'},...chapters].map(c=><Link key={c.slug} href={'/'+c.slug} onClick={()=>set(false)} aria-current={path==='/'+c.slug?'page':undefined}>{c.nav}</Link>)}</nav><Link className="indexlink" href="/#chapters"><BookOpen size={16}/> فهرست پژوهش</Link><button className="menutog" onClick={()=>set(!open)} aria-expanded={open} aria-label="فهرست اصلی">{open?<X/>:<Menu/>}</button></div></header>}
