import type { Metadata,Viewport } from 'next'
import '@fontsource-variable/vazirmatn'
import './globals.css'
import './atlas.css'
import Header from '@/components/navigation'
import {Footer} from '@/components/home'
import {base,name} from '@/lib/research'
export const metadata:Metadata={metadataBase:new URL(base),title:{default:name,template:'%s | کرجی‌نامه'},description:'پژوهشی درباره زندگی، نوآوری‌های ریاضی و مهندسی آب کرجی',alternates:{canonical:'/'},openGraph:{title:name,locale:'fa_IR',images:['/qanat.webp']},icons:{icon:'/compass.svg'}}
export const viewport:Viewport={themeColor:'#0a2030',width:'device-width',initialScale:1}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl" className="light"><body><a className="skip" href="#main">رفتن به محتوا</a><Header/><main id="main">{children}</main><Footer/></body></html>}
