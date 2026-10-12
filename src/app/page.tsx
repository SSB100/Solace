import type {Metadata} from 'next';
import {Arrow} from '@/components/Shared';
import {HomeTreatmentFinder} from '@/components/HomeTreatmentFinder';
import './home.css';

export const metadata:Metadata={alternates:{canonical:'/'}};

export default function Home(){return <>
  <section className="home-hero" aria-labelledby="home-title">
    <div className="home-hero-inner shell">
      <div className="home-hero-copy">
        <p className="eyebrow">Skin, beauty & wellbeing · Orewa</p>
        <h1 id="home-title">Make time for<br/>your <em>Solace.</em></h1>
        <p>Personalised facials, beauty and wellbeing. A little space in your day, with care that begins with you.</p>
        <a className="button" href="/services/">Explore treatments <Arrow/></a>
        <div className="home-hero-signature" aria-hidden="true"><span/>Thoughtfully personal.</div>
      </div>
      <div className="home-hero-visual"><img src="/images/journey.webp" alt="A rose quartz facial massage from the Solace treatment collection" width="1275" height="1700" fetchPriority="high"/></div>
    </div>
  </section>

  <HomeTreatmentFinder/>

  <section className="home-approach" aria-labelledby="approach-title">
    <div className="home-approach-inner shell">
      <div className="home-approach-visual"><img src="/images/needling.webp" alt="A quiet moment during a facial treatment" width="1000" height="1500" loading="lazy"/></div>
      <div className="home-approach-copy">
        <p className="eyebrow">The Solace approach</p>
        <h2 id="approach-title">More than a treatment.<br/><em>A moment for you.</em></h2>
        <p>Solace brings the personal care of a spa together with a thoughtful approach to skin. There’s time to talk, room to ask questions and space to choose what feels right for you.</p>
        <div className="home-approach-notes"><div><h3>Listening comes first</h3><p>Your skin, preferences and questions help shape your care.</p></div><div><h3>Understanding, without pressure</h3><p>Clear explanations, with the choices always yours.</p></div></div>
        <a className="text-link" href="/about/">Discover our approach <Arrow/></a>
      </div>
    </div>
  </section>

  <section className="home-homecare shell" aria-labelledby="homecare-title">
    <div className="home-homecare-copy"><p className="eyebrow">Beyond the treatment room</p><h2 id="homecare-title">Little rituals.<br/>Everyday care.</h2><p>Skincare from Vagheggi and DermaFix. Finishing touches from Brow Code. Explore the collection, with Stephanie here to help you choose.</p><a className="text-link" href="/shop/">Explore the collection <Arrow/></a></div>
    <div className="home-homecare-visual"><div className="homecare-arch" aria-hidden="true"/><img className="homecare-vagheggi" src="/images/products/delay-facial-cleanser-150ml.webp" width="290" height="399" alt="Vagheggi Delay Facial Cleanser" loading="lazy"/><img className="homecare-dermafix" src="/images/products/bio-hydrating-cream-57ml.webp" width="317" height="500" alt="DermaFix Bio-Hydrating Cream" loading="lazy"/><img className="homecare-brow-code" src="/images/products/brow-code-gold-nourishing-growth-oil-2.webp" width="760" height="768" alt="Brow Code Gold Nourishing Growth Oil" loading="lazy"/><p>Skincare & beauty, chosen with care.</p></div>
  </section>

  <section className="home-visit" aria-labelledby="visit-title">
    <div className="home-visit-inner shell">
      <div className="home-visit-intro"><p className="eyebrow">Your first visit</p><h2 id="visit-title">A good place to begin.</h2><p>You don&apos;t need to know exactly what to book. Start with a conversation with Stephanie, or explore the treatment menu at your own pace.</p></div>
      <div className="home-visit-actions"><a className="button" href="/book/">Plan your visit <Arrow/></a><a className="text-link" href="/contact/">Ask us a question <Arrow/></a><p className="small">Explore our booking preview, with a link to live appointments when you&apos;re ready.</p></div>
    </div>
  </section>
</>}
