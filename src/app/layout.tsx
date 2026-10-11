import type {Metadata} from 'next';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Shared';
import './fonts.css';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://www.solaceaesthetics.co.nz'),title:{default:'Solace Aesthetics | Skin, Beauty & Electrolysis in Orewa',template:'%s | Solace Aesthetics'},description:'Personalised facials, electrolysis, beauty and massage with Stephanie at Solace Aesthetics in Orewa, Auckland. Explore treatments and book your moment of Solace.',robots:{index:false,follow:false},openGraph:{siteName:'Solace Aesthetics',locale:'en_NZ',type:'website',images:[{url:'/images/botanical.webp',width:1275,height:1700,alt:'Solace Aesthetics botanical imagery'}]},icons:{icon:'/favicon.png'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en-NZ"><body id="top"><Header/><main id="main">{children}</main><Footer/></body></html>}
