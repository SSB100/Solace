import type {Metadata} from 'next';
import {Arrow} from '@/components/Shared';
import {HomeTreatmentFinder} from '@/components/HomeTreatmentFinder';
export const metadata:Metadata={alternates:{canonical:'/'}};
export default function Home(){return <>
<section className="care-hero"><div className="care-hero-copy"><p className="eyebrow">Skin, beauty & wellbeing · Orewa</p><h1>Thoughtful care.<br/>A little Solace.</h1><p>Personalised treatments, with time to feel at ease.</p><a className="button button-cream" href="/services/">Explore treatments <Arrow/></a></div><div className="care-hero-image"><img src="/images/journey.webp" alt="Rose quartz facial massage from the Solace treatment collection" width="1275" height="1700" fetchPriority="high"/></div></section>
<HomeTreatmentFinder/>
<section className="quiet-guidance shell"><div><p className="eyebrow">Your first visit</p><h2>A good place<br/>to begin.</h2></div><div><p>Not sure which treatment to choose? Stephanie can help you find a starting point that feels right for you.</p><a href="/contact/" className="text-link">Talk to the studio <Arrow/></a></div></section>
</>}
