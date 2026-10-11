'use client';

import {Fragment, useEffect, useRef, useState} from 'react';
import {BOOKING, services} from '@/lib';
import './booking-preview.css';

const steps = ['Your treatment', 'Example time', 'Your selection'];
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const exampleTimes = ['9:00 am', '10:30 am', '12:00 pm', '1:30 pm', '3:00 pm'];
// A fixed, explicitly illustrative month. No appointment availability is fetched.
const exampleDays = Array.from({length: 30}, (_, index) => index + 1);

function Arrow({back = false}: {back?: boolean}) {
  return <span aria-hidden="true">{back ? '←' : '↗'}</span>;
}

function Leaf() {
  return <svg viewBox="0 0 48 64" fill="none" aria-hidden="true"><path d="M24 61V22M24 43C10 43 4 34 5 23C18 23 24 32 24 43ZM24 32C37 32 43 22 42 12C29 12 24 22 24 32ZM24 22C14 15 15 6 24 2C32 7 33 15 24 22ZM24 54C35 54 41 47 40 38C30 38 24 46 24 54Z" stroke="currentColor" strokeWidth="1.2"/></svg>;
}

export function BookingPreview() {
  const [step, setStep] = useState(0);
  const [serviceSlug, setServiceSlug] = useState('facials');
  const [offeringIndex, setOfferingIndex] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState('');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hasNavigated = useRef(false);
  const service = services.find(item => item.slug === serviceSlug)!;
  const offering = offeringIndex === null ? null : service.offerings[offeringIndex];
  const isJourney = service.slug === 'solacejourneys';
  const exampleDate = day === null ? '' : new Intl.DateTimeFormat('en-NZ', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(Date.UTC(2026, 10, day)));

  useEffect(() => {
    if (hasNavigated.current) {
      headingRef.current?.focus({preventScroll: true});
      headingRef.current?.scrollIntoView({block: 'start', behavior: 'instant'});
    }
  }, [step]);

  function goToStep(next: number) {
    if ((next > 0 && !offering) || (next > 1 && (!day || !time))) return;
    hasNavigated.current = true;
    setStep(next);
  }

  function chooseCategory(slug: string) {
    if (slug === serviceSlug) return;
    setServiceSlug(slug);
    setOfferingIndex(null);
    setDay(null);
    setTime('');
  }

  function chooseOffering(index: number) {
    if (index !== offeringIndex) {
      setOfferingIndex(index);
      setDay(null);
      setTime('');
    }
  }

  function startAgain() {
    setServiceSlug('facials');
    setOfferingIndex(null);
    setDay(null);
    setTime('');
    goToStep(0);
  }

  return <div className="booking-preview">
    <section className="bp-intro" aria-labelledby="bp-title">
      <div className="bp-intro-copy">
        <p className="bp-kicker">Solace Aesthetics · Orewa</p>
        <h1 id="bp-title">Plan your visit.</h1>
        <p>Choose a treatment, then explore an example appointment.</p>
      </div>
      <div className="bp-intro-note">
        <Leaf/>
        <span className="bp-preview-label">Booking preview</span>
        <p>Try the experience below. Dates and times are illustrative; this preview cannot reserve an appointment.</p>
        <a className="bp-inline-link" href={BOOKING}>Go to live booking on Ovatu <Arrow/></a>
      </div>
    </section>

    <div className="bp-workspace">
      <nav className="bp-progress" aria-label="Booking preview steps">
        <ol>{steps.map((label, index) => <li key={label}>
          <button type="button" aria-current={step === index ? 'step' : undefined}
            disabled={(index > 0 && !offering) || (index > 1 && (!day || !time))}
            onClick={() => goToStep(index)}>
            <span className="bp-step-number" aria-hidden="true">0{index + 1}</span>
            <span>{label}</span>
          </button>
        </li>)}</ol>
        <span className="bp-progress-note">A preview, at your own pace</span>
      </nav>

      <div className="bp-layout">
        <section className="bp-main" aria-labelledby="bp-step-heading">
          <div className="bp-step-heading">
            <p className="bp-kicker">Step 0{step + 1} / 03 · Booking preview</p>
            <h2 id="bp-step-heading" ref={headingRef} tabIndex={-1}>
              {step === 0 ? 'What brings you to Solace?' : step === 1 ? 'Choose an example time.' : 'Your example appointment.'}
            </h2>
            <p>{step === 0 ? 'Explore the treatment menu and choose the care you have in mind.' : step === 1 ? 'Choose an example date and time to see how your selection would look.' : 'Your illustrative plan is below. Nothing has been booked or held.'}</p>
          </div>

          {step === 0 && <div className="bp-treatment-picker">
            <div className="bp-category-column">
              <p className="bp-field-label" id="bp-category-heading">Treatment category</p>
              <div className="bp-category-list" role="group" aria-labelledby="bp-category-heading">
                {services.map(item => <button type="button" key={item.slug} aria-pressed={serviceSlug === item.slug}
                  onClick={() => chooseCategory(item.slug)}><span>{item.title}</span><span className="bp-category-count">{item.offerings.length}</span></button>)}
              </div>
              <label className="bp-mobile-category">Browse treatments
                <select value={serviceSlug} onChange={event => chooseCategory(event.target.value)}>
                  {services.map(item => <option key={item.slug} value={item.slug}>{item.title}</option>)}
                </select>
              </label>
            </div>

            <div className="bp-options-column">
              <div className="bp-category-description" aria-live="polite" aria-atomic="true">
                <p className="bp-kicker">{service.category}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              {service.consultation && <div className="bp-care-note"><span className="bp-note-symbol" aria-hidden="true">i</span><p><strong>Before your treatment</strong>{service.consultation}</p></div>}
              <fieldset className="bp-treatment-options">
                <legend className="bp-field-label">Choose a treatment <span>{service.offerings.length} options</span></legend>
                {service.offerings.map((item, index) => <Fragment key={`${service.slug}-${index}`}><label className={`bp-treatment-option${offeringIndex === index ? ' is-selected' : ''}`}>
                  <input type="radio" name="treatment" value={`${service.slug}-${index}`} checked={offeringIndex === index} onChange={() => chooseOffering(index)}/>
                  <span className="bp-radio-mark" aria-hidden="true"/>
                  <span className="bp-option-text"><strong>{item.name}</strong>{item.description && <span>{item.description}</span>}<small>{item.duration || 'Duration: confirm with Solace'}</small></span>
                  <span className="bp-option-price">{item.price || <span>Price on<br/>enquiry</span>}</span>
                </label>{offeringIndex === index && <button type="button" className="bp-primary bp-inline-next" onClick={() => goToStep(1)}>Explore example times <span aria-hidden="true">→</span></button>}</Fragment>)}
              </fieldset>
              <p className="bp-fine-print">Published menu prices in NZD. Where a range or no price is listed, confirm the option and price in live booking or with Solace.</p>
            </div>
          </div>}

          {step === 1 && <div className="bp-scheduling">
            <div className="bp-example-notice"><span className="bp-note-symbol" aria-hidden="true">i</span><p><strong>Illustrative availability only</strong>Every date and time here is an example. These choices are not connected to Solace’s appointment calendar.</p></div>
            {service.consultation && <div className="bp-care-note"><span className="bp-note-symbol" aria-hidden="true">i</span><p><strong>Before your treatment</strong>{service.consultation}</p></div>}
            {isJourney && <p className="bp-fine-print">Solace Journeys include multiple visits. This example represents the first visit only; the full appointment plan is arranged with Solace.</p>}
            <div className="bp-calendar-layout">
              <fieldset className="bp-calendar">
                <legend className="bp-field-label">Choose an example date</legend>
                <div className="bp-month-heading"><h3>November 2026</h3><span>Sample calendar</span></div>
                <div className="bp-weekdays" aria-hidden="true">{weekdays.map(label => <span key={label}>{label}</span>)}</div>
                <div className="bp-calendar-days">
                  {Array.from({length: 6}, (_, index) => <span className="bp-calendar-blank" aria-hidden="true" key={`blank-${index}`}/>)}
                  {exampleDays.map(date => <label key={date} className={`bp-day${day === date ? ' is-selected' : ''}`}>
                    <input type="radio" name="example-date" value={date} checked={day === date} onChange={() => {setDay(date); setTime('');}} aria-label={`Example date: ${date} November 2026`}/>
                    <span>{date}</span>
                  </label>)}
                </div>
                <p className="bp-fine-print">All displayed dates are illustrative, including weekends.</p>
              </fieldset>
              <fieldset className="bp-time-picker" disabled={!day}>
                <legend className="bp-field-label">Choose an example time</legend>
                <p className="bp-time-context" aria-live="polite">{day ? `${day} November · Example times` : 'Choose an example date first.'}</p>
                <div className="bp-time-options">{exampleTimes.map(slot => <label key={slot} className={`bp-time${time === slot ? ' is-selected' : ''}`}>
                  <input type="radio" name="example-time" value={slot} checked={time === slot} onChange={() => setTime(slot)}/><span>{slot}</span>
                </label>)}</div>
                <p className="bp-fine-print">Times shown in New Zealand local time. No live availability is shown.</p>
              </fieldset>
            </div>
          </div>}

          {step === 2 && offering && <div className="bp-review">
            <div className="bp-review-banner"><Leaf/><div><p className="bp-kicker">Illustrative plan only</p><h3>A moment worth making.</h3><p>Nothing is booked. Your example date and time are not reserved.</p></div></div>
            <div className="bp-review-row"><div><span className="bp-field-label">Your treatment</span><h3>{offering.name}</h3><p>{service.title} · {offering.duration || 'Duration to be confirmed'}</p></div><button className="bp-edit" type="button" onClick={() => goToStep(0)} aria-label="Edit treatment">Edit <span aria-hidden="true">↗</span></button></div>
            <div className="bp-review-row"><div><span className="bp-field-label">Illustrative date & time</span><h3>{exampleDate}</h3><p>{time} · New Zealand local time · Example only</p></div><button className="bp-edit" type="button" onClick={() => goToStep(1)} aria-label="Edit example date and time">Edit <span aria-hidden="true">↗</span></button></div>
            {isJourney && <p className="bp-fine-print">The published price covers the package. The date above represents an illustrative first visit, not the full course.</p>}
            {service.consultation && <div className="bp-care-note"><span className="bp-note-symbol" aria-hidden="true">i</span><p><strong>Before making a real booking</strong>{service.consultation}</p></div>}
            <div className="bp-live-next"><h3>Ready to make it real?</h3><p>Open Solace’s live Ovatu booking page to choose your treatment again, check actual availability and complete a booking. Preview selections are not transferred.</p><a className="bp-primary" href={BOOKING}>Continue to live booking on Ovatu <Arrow/></a><p className="bp-fine-print">You’ll leave this visual preview. No appointment is made by clicking this link.</p></div>
          </div>}

          {(step > 0 || !offering) && <div className="bp-actions">
            {step > 0 ? <button type="button" className="bp-back" onClick={() => goToStep(step - 1)}><Arrow back/> Back</button> : <span className="bp-action-hint">{offering ? 'A thoughtful choice. Explore an example time next.' : 'Choose a treatment to continue.'}</span>}
            {step < 2 ? <button type="button" className="bp-primary" disabled={step === 0 ? !offering : !day || !time} onClick={() => goToStep(step + 1)}>{step === 0 ? 'Explore example times' : 'Review illustrative plan'} <span aria-hidden="true">→</span></button> : <button type="button" className="bp-back" onClick={startAgain}>Start preview again <span aria-hidden="true">↻</span></button>}
          </div>}
        </section>

        <aside className="bp-summary" aria-label="Your preview selection">
          
          <div className="bp-summary-content">
            <h2>Your selection</h2>
            <div className="bp-summary-selection" aria-live="polite" aria-atomic="true">
              <span className="bp-field-label">Treatment</span>
              <h3>{offering ? offering.name : 'Let’s find your treatment'}</h3>
              <p>{offering ? service.title : 'Choose from our treatment menu to begin your preview.'}</p>
              {offering && <dl className="bp-summary-details"><div><dt>{isJourney ? 'Package duration' : 'Published duration'}</dt><dd>{offering.duration || 'Confirm with Solace'}</dd></div><div><dt>{isJourney ? 'Package price' : offering.price.includes('–') ? 'Price range' : 'Published price'}</dt><dd>{offering.price ? `${offering.price} NZD` : 'Confirm with Solace'}</dd></div></dl>}
              {day && <div className="bp-summary-date"><span className="bp-field-label">Example only</span><p>{exampleDate}<br/>{time ? `${time} · NZ local time` : 'Choose an example time'}</p></div>}
            </div>
            
            <p className="bp-summary-disclaimer">Illustrative availability. No appointment is held, booked or paid for in this preview.</p>
            <a className="bp-inline-link" href={BOOKING}>Check live booking on Ovatu <Arrow/></a>
          </div>
        </aside>
      </div>
      <p className="bp-privacy-note">A visual preview, made for exploring. No personal details are requested. Your choices stay on this page and are not saved or sent to Solace.</p>
    </div>
  </div>;
}
