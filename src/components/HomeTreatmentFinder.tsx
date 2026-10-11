import {treatmentGroups} from '@/treatment-groups';
import {Arrow} from './Shared';
export function HomeTreatmentFinder(){return <section className="quiet-treatments shell" aria-labelledby="find-care"><div className="quiet-section-heading"><p className="eyebrow">Our treatments</p><h2 id="find-care">Find your kind of care.</h2><p>Start with what you need. We’ll guide you from there.</p></div><div className="care-entrypoints">{treatmentGroups.map(group=><a href={'/services/#'+group.id} key={group.id}><div><h3>{group.title}</h3><p>{group.description}</p></div><Arrow/></a>)}</div></section>}
