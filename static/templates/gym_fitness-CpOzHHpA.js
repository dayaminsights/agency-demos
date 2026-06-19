import{g as f,S as h,i as $,a as w,b as S,c as g,h as I,r as T,d as A,e as E,f as M}from"./motion-DfYdxHXI.js";f.registerPlugin(h);const u={hero:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",about:"https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=75",gallery:["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1591311630200-ffa9120a540f?auto=format&fit=crop&w=800&q=75"]},_=["MON","TUE","WED","THU","FRI","SAT","SUN"],q=[{time:"6:00 AM",slots:["HIIT","Yoga","HIIT","Strength","HIIT","Bootcamp",""]},{time:"7:30 AM",slots:["Strength","Cycle","Strength","Cycle","Strength","HIIT","Yoga"]},{time:"9:00 AM",slots:["Yoga","HIIT","Pilates","HIIT","Yoga","Strength","Bootcamp"]},{time:"12:00 PM",slots:["Cycle","Strength","HIIT","Pilates","Cycle","","HIIT"]},{time:"5:30 PM",slots:["HIIT","Yoga","Strength","HIIT","Yoga","",""]},{time:"6:45 PM",slots:["Strength","HIIT","Cycle","Strength","HIIT","",""]},{time:"8:00 PM",slots:["Pilates","Cycle","","Yoga","Cycle","",""]}],k=[{name:"Drop In",price:"$25",period:"per visit",features:["Any single class","Locker room access","Equipment use","Guest pass available"],featured:!1},{name:"Monthly",price:"$89",period:"per month",features:["Unlimited classes","Locker room + towels","All equipment","1 guest pass/month","App access"],featured:!0},{name:"Annual",price:"$69",period:"per month · billed annually",features:["Everything in Monthly","Priority class booking","2 guest passes/month","Nutrition coaching","Free merchandise"],featured:!1}],C=window.__LEAD__||{business_name:"Iron District Gym",location:"Los Angeles, CA",copywriting:{hero_headline:"TRAIN HARDER. LIVE BETTER.",hero_subheadline:"No excuses. No shortcuts. Just results. Iron District is LA's most intense training community.",about_text:"Iron District opened in 2018 with one rule: work harder than yesterday. We have 15,000 sq ft of equipment, 22 certified coaches, and 1,400 active members who push each other every single day.",services_intro:"Classes designed by athletes. For athletes.",cta_text:"Join Now",testimonials_intro:"4.9 stars from 1,400 members who chose hard over easy."},design_system:{palette:["#0B0E14","#F97316","#161B22","#0F141B","#E6E8EB"]},media:{hero:[],gallery:[],about:[]},reviews:[{author:"Jake M.",text:"I have trained at 12 gyms. Iron District is in its own category.",rating:5},{author:"Carla T.",text:"Lost 35 lbs in 6 months. The coaches here actually care.",rating:5}],rating:4.9,user_ratings_total:1400,phone:"+1 213 555 0199",phone_href:"tel:+12135550199",address:"1800 S Grand Ave, Los Angeles, CA 90015"},o=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function b(t,e="#"){if(!t)return e;const s=String(t).trim();return s.startsWith("tel:")||s.startsWith("https:")||s.startsWith("http:")||s==="#"?s:e}const n=(t,e,s)=>{const a=e.split(".").reduce((r,i)=>r==null?r:r[i],t);return a==null||a===""?s:a},x=t=>{const e=Math.round(Number(t)||0);return"★".repeat(Math.max(0,Math.min(5,e)))+"☆".repeat(Math.max(0,5-e))},m=(t,e)=>Array.isArray(t)&&t.length?t[0]:e;function N(t){var s;const e=(s=t.design_system)==null?void 0:s.palette;if(Array.isArray(e)&&e.length>=5){const a=document.documentElement;a.style.setProperty("--color-1",e[0]),a.style.setProperty("--color-2",e[1]),a.style.setProperty("--color-3",e[2]),a.style.setProperty("--color-4",e[3]),a.style.setProperty("--color-5",e[4])}}function H(t){const e=o(n(t,"business_name","Gym & Fitness")),s=o(n(t,"copywriting.cta_text","Join Now"));return`
  <nav class="site-nav" aria-label="Main navigation">
    <div class="nav-inner">
      <a class="nav-logo" href="#main">${e}<span class="dot">.</span></a>
      <div class="nav-links">
        <a class="nav-link" href="#schedule">Schedule</a>
        <a class="nav-link" href="#membership">Membership</a>
        <a class="nav-link" href="#about">About</a>
        <a class="nav-link" href="#visit">Contact</a>
        <a class="btn btn-primary nav-cta" href="#cta">${s}</a>
      </div>
    </div>
  </nav>`}function L(t){const e=o(n(t,"location","")),s=o(n(t,"copywriting.hero_headline","TRAIN HARDER. LIVE BETTER.")),a=o(n(t,"copywriting.hero_subheadline","No excuses. No shortcuts. Just results.")),r=o(n(t,"copywriting.cta_text","Join Now")),i=o(m(n(t,"media.hero",[]),u.hero)),c=Number(n(t,"rating",0)),p=Number(n(t,"user_ratings_total",0)),l=c?`<div class="hero-rating">
         <span class="stars" aria-hidden="true">${x(c)}</span>
         <span class="rating-num">${o(c)}</span>
         ${p?`<span>from ${o(p)}+ members</span>`:""}
       </div>`:"";return`
  <header class="hero" id="top">
    <img class="hero-img" src="${i}" alt="${o(n(t,"business_name","Athlete training"))}" fetchpriority="high" />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      ${e?`<p class="hero-kicker"><span class="pin">◉</span> ${e}</p>`:""}
      <h1 class="hero-title">${s}</h1>
      <p class="hero-sub">${a}</p>
      ${l}
      <div class="hero-cta-row">
        <a class="btn btn-primary" href="#cta">${r}</a>
        <a class="btn btn-ghost" href="#schedule">View Schedule</a>
      </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">Scroll</div>
  </header>`}function P(t){const e=n(t,"sections.usps",null),a=`<div class="marquee-group">${(Array.isArray(e)&&e.length?e:["STRENGTH","ENDURANCE","SPEED","POWER","COMMUNITY","RESULTS"]).map(r=>`<span class="marquee-item">${o(r)}<span class="sep">·</span></span>`).join("")}</div>`;return`
  <section class="marquee-section" aria-hidden="true">
    <div class="marquee-track">${a}${a}</div>
  </section>`}function R(t){const e=o(n(t,"copywriting.services_intro","Classes designed by athletes. For athletes.")),s=_.map(r=>`<div class="timetable-day-header">${o(r)}</div>`).join(""),a=q.map(r=>{const i=r.slots.map(c=>c?`<div class="timetable-cell is-class" role="button" tabindex="0">${o(c)}</div>`:'<div class="timetable-cell"></div>').join("");return`
      <div class="timetable-time">${o(r.time)}</div>
      ${i}`}).join("");return`
  <section class="schedule-section" id="schedule">
    <div class="schedule-header section-inner" data-reveal>
      <h2 class="schedule-title">Class <span class="accent">Schedule</span></h2>
      <p class="schedule-intro">${e}</p>
    </div>
    <div class="class-timetable" aria-label="Weekly class schedule">
      <div class="timetable-grid">
        <div class="timetable-time-header"></div>
        ${s}
        ${a}
      </div>
    </div>
  </section>`}function D(t){const e=n(t,"sections.tiers",null);return`
  <section class="membership-section" id="membership">
    <div class="section-inner">
      <div class="membership-head" data-reveal>
        <h2 class="membership-title">Choose Your <span class="accent">Plan</span></h2>
        <p class="membership-sub">No contracts. Cancel anytime. Start today.</p>
      </div>
      <div class="membership-tiers">
        ${(Array.isArray(e)&&e.length?e:k).map(r=>`
    <article class="tier-card${r.featured?" is-featured":""}" data-reveal>
      ${r.featured?'<div class="tier-badge">Most Popular</div>':""}
      <h3 class="tier-name">${o(r.name)}</h3>
      <div class="tier-price-wrap">
        <span class="tier-price">${o(r.price)}</span>
        <span class="tier-period">${o(r.period)}</span>
      </div>
      <ul class="tier-features" aria-label="${o(r.name)} features">
        ${r.features.map(i=>`<li class="tier-feature"><span class="tier-check" aria-hidden="true">✓</span>${o(i)}</li>`).join("")}
      </ul>
      <a href="#cta" class="btn ${r.featured?"btn-primary":"btn-ghost-dark"} tier-cta">Get Started</a>
    </article>`).join("")}
      </div>
    </div>
  </section>`}function B(t){const e=o(n(t,"copywriting.about_text","A gym built for those who refuse to settle for ordinary.")),s=String(n(t,"copywriting.about_text","")),a=s.match(/^[^.!?]+[.!?]/),r=a?a[0].trim():(s.length>120?s.slice(0,120)+"…":s)||"Built to push limits.",i=o(r),c=o(m(n(t,"media.about",[]),u.about));return`
  <section class="about-section" id="about">
    <div class="about-grid">
      <div class="about-text">
        <p class="about-eyebrow" data-reveal>Our Story</p>
        <blockquote class="about-pull-quote" data-reveal>${i}</blockquote>
        <p class="about-body" data-reveal>${e}</p>
        <div class="about-stats" data-reveal>
          <div class="stat"><span class="stat-num">15K</span><span class="stat-label">Sq Ft</span></div>
          <div class="stat"><span class="stat-num">22</span><span class="stat-label">Coaches</span></div>
          <div class="stat"><span class="stat-num">1,400+</span><span class="stat-label">Members</span></div>
        </div>
      </div>
      <div class="about-img-wrap">
        <img class="about-img" src="${c}" alt="Inside ${o(n(t,"business_name","the gym"))}" loading="lazy" />
      </div>
    </div>
  </section>`}function F(t){const e=n(t,"geo",null);if(e&&e.lat&&e.lng)return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.lat+","+e.lng)}`;const s=n(t,"address","")||n(t,"location","");return s?`https://maps.google.com/?q=${encodeURIComponent(s)}`:"#"}function U(t){const e=n(t,"geo",null);if(e&&e.lat&&e.lng)return`https://maps.google.com/maps?q=${e.lat},${e.lng}&z=15&output=embed`;const s=n(t,"address","")||n(t,"location","");return s?`https://maps.google.com/maps?q=${encodeURIComponent(s)}&z=15&output=embed`:null}function j(t){const e=n(t,"media.gallery",u.gallery).slice(0,6);return e.length?`
  <section class="gallery-section section" id="gallery">
    <div class="section-inner">
      <h2 class="gallery-title">INSIDE THE GYM</h2>
      <div class="gallery-grid">${e.map(a=>`<figure class="gallery-item">
       <img src="${o(a)}" alt="Gym photo" loading="lazy" decoding="async">
     </figure>`).join("")}</div>
    </div>
  </section>`:""}function Y(t){const e=n(t,"rating",4.9),s=Number(n(t,"user_ratings_total",0)),a=n(t,"reviews",[]),c=[...Array.isArray(a)&&a.length?a:[{author:"Jake M.",text:"I have trained at 12 gyms. Iron District is in its own category.",rating:5},{author:"Carla T.",text:"Lost 35 lbs in 6 months. The coaches here actually care.",rating:5}]].sort((l,d)=>(Number(d.rating)||0)-(Number(l.rating)||0)||String(d.text||"").length-String(l.text||"").length).slice(0,3).map(l=>{const d="★".repeat(Math.min(5,Math.round(Number(l.rating)||5))),y=String(l.text||"").length>160?String(l.text).slice(0,157)+"…":l.text||"";return`<div class="proof-card">
      <p class="proof-stars" aria-hidden="true">${d}</p>
      <blockquote class="proof-quote">&ldquo;${o(y)}&rdquo;</blockquote>
      <p class="proof-attribution">— ${o(l.author||"Member")}</p>
    </div>`}).join(""),p=s?`${s.toLocaleString()}+ members`:"Loved by our community";return`
  <section class="proof-section" id="proof">
    <div class="section-inner">
      <p class="section-kicker">WHAT OUR MEMBERS SAY</p>
      <h2 class="proof-heading"><span class="accent">★ ${o(String(e))}</span> · ${o(p)}</h2>
      <div class="proof-grid">${c}</div>
    </div>
  </section>`}function G(t){const e=t.copywriting||{},s=o(t.location||"your city"),a=e.cta_headline?o(e.cta_headline):"The strongest version of yourself starts here.",r=o(e.cta_text||"Join Now"),i=b(t.phone_href);return`
  <section class="cta-section" id="cta" aria-labelledby="cta-headline">
    <div class="cta-content" data-reveal>
      <p class="cta-location">${s}</p>
      <h2 class="cta-headline" id="cta-headline">${a}</h2>
      <div class="cta-btn-row">
        <a href="${i}" class="btn btn-dark">${r}</a>
        <a href="#schedule" class="btn btn-ghost-cta">See Schedule</a>
      </div>
    </div>
  </section>`}function O(t){const e=o(n(t,"business_name","Gym & Fitness")),s=o(n(t,"address","")),a=o(n(t,"phone","")),r=b(n(t,"phone_href","")),i=o(n(t,"location","")),c=new Date().getFullYear(),p='<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';return`
  <footer class="site-footer" id="visit">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo">${e}<span class="dot">.</span></div>
        <p class="footer-tagline">${o(n(t,"copywriting.hero_subheadline","Train harder. Live better."))}</p>
        <div class="footer-amenities">
          <span class="amenity-item">${p} Open 7 Days</span>
          <span class="amenity-item">${p} Free Parking</span>
          <span class="amenity-item">${p} Locker Rooms</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Hours</h4>
        <p>Mon – Fri &nbsp; 5am – 11pm</p>
        <p>Saturday &nbsp; 6am – 10pm</p>
        <p>Sunday &nbsp; 7am – 9pm</p>
      </div>
      <div class="footer-col">
        <h4>Find Us</h4>
        ${s?`<p>${s}</p>`:i?`<p>${i}</p>`:""}
        ${a?`<p><a href="${r}">${a}</a></p>`:""}
        <a class="footer-maps-link" href="${F(t)}" target="_blank" rel="noopener">📍 Open in Google Maps</a>
      </div>
    </div>
    ${(()=>{const l=U(t);return l?`<div class="footer-map"><iframe src="${l}" width="100%" height="260" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Location map"></iframe></div>`:""})()}
    <div class="footer-bottom">
      <span class="tagline-bottom">No excuses. No shortcuts.</span>
      <span>&copy; ${c} ${e}. All rights reserved.</span>
    </div>
  </footer>`}function W(t){N(t);const e=m(n(t,"media.hero",[]),u.hero),s=document.getElementById("hero-preload");s&&e&&s.setAttribute("href",e);const a=document.querySelector("#main"),r=document.createElement("div");r.innerHTML=H(t).trim();const i=r.firstElementChild;return i&&document.body.insertBefore(i,a),a.innerHTML=[L(t),P(t),R(t),D(t),B(t),j(t),Y(t),G(t),O(t)].join(""),i}function J(t){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;$(),w(".js-cursor"),S(".btn");let s=[];const a=document.querySelector(".hero-title");if(a&&typeof g=="function"){const i=g({target:a,by:"chars"});s=i&&i[0]&&i[0].chars||a.querySelectorAll(".char")}if(!e){const i=f.timeline();s&&s.length&&i.from(s,{yPercent:110,opacity:0,duration:.7,stagger:.025,ease:"power3.out"}),i.from([".hero-kicker",".hero-sub",".hero-rating",".hero-cta-row"],{y:40,opacity:0,duration:.7,stagger:.1,ease:"power2.out"},"-=0.3")}I(".hero-img",".hero"),T("[data-reveal]",{y:60,duration:.7}),A(".tier-card",{duration:.5,stagger:.08});const r=document.querySelector(".hero");t&&r&&"IntersectionObserver"in window&&new IntersectionObserver(([c])=>{t.classList.toggle("scrolled",!c.isIntersecting)},{rootMargin:"-80px 0px 0px 0px",threshold:0}).observe(r),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{E(".schedule-title, .membership-title, .cta-headline, .about-eyebrow"),M(".about-pull-quote, .proof-quote"),h.refresh()}),window.addEventListener("load",()=>h.refresh())}function v(){const t=W(C);J(t)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();
