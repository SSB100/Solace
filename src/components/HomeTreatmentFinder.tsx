import {treatmentGroups} from '@/treatment-groups';
import {Arrow} from './Shared';

const visuals:Record<string,{src:string;alt:string}>={
  skin:{src:'/images/facial.webp',alt:'A facial treatment with a nourishing mask'},
  'hair-removal':{src:'/images/body-wax.webp',alt:'Golden wax from the Solace hair-removal collection'},
  beauty:{src:'/images/brows.webp',alt:'Brow Code tools and products for brow care'},
  wellbeing:{src:'/images/massage.webp',alt:'Massage oil prepared for a treatment'},
};

export function HomeTreatmentFinder(){return <section className="home-treatments shell" aria-labelledby="find-care">
  <div className="home-section-heading"><div><p className="eyebrow">Our treatments</p><h2 id="find-care">Find your kind of care.</h2></div><p>From time for your skin to a moment to unwind.<br/>{' '}Begin with what brings you here.</p></div>
  <div className="home-paths">{treatmentGroups.map(group=><a href={'/services/#'+group.id} key={group.id}><div className={'home-path-image home-path-'+group.id}><img src={visuals[group.id].src} alt={visuals[group.id].alt} width="600" height="750" loading="lazy"/></div><div className="home-path-title"><h3>{group.title}</h3><Arrow/></div><p>{group.description}</p></a>)}</div>
</section>}
