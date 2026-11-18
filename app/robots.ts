import {base} from '@/lib/research'
export default function robots(){return {rules:{userAgent:'*',allow:'/',disallow:['/admin','/api/','/auth/']},sitemap:base+'/sitemap.xml'}}
