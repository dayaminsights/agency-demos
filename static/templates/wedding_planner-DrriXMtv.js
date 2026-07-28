import{g as f,S as h,i as $,a as _,b as S,c as m,h as q,r as A,d as k,e as x,f as E}from"./motion-CeD9fxEu.js";f.registerPlugin(h);const p={hero:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",about:"https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=75",gallery:["https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=75","https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=75","https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=600&q=75"]},y=[{num:"01",name:"Full Planning",desc:"End-to-end design and coordination from first vision to last dance."},{num:"02",name:"Partial Planning",desc:"Six months of refined guidance when you need an expert partner."},{num:"03",name:"Design & Styling",desc:"Visual direction, florals, stationery, and every aesthetic detail."},{num:"04",name:"Day Coordination",desc:"Seamless execution so you are present for every moment."}],P=window.__LEAD__||{business_name:"Atelier Blanc",location:"New York, NY",copywriting:{hero_headline:"Love, Curated.",hero_subheadline:"Bespoke wedding planning for the discerning couple.",problem_text:"Your wedding deserves more than a template.",about_text:"We design weddings as we design art — with intention, with restraint, with an eye for the detail no one else sees. Twelve years. Four hundred couples. Zero weddings that look alike.",services_intro:"Every love story is singular. Your wedding should be too.",cta_text:"Begin Your Story",testimonials_intro:"5.0 from couples who trusted us with their most important day."},design_system:{palette:["#3B2A33","#A68A4E","#F7EFE9","#FDF8F5","#3B2A33"]},media:{hero:[],gallery:[],about:[]},reviews:[{author:"Sophie & James",text:"Atelier Blanc did not plan our wedding. They composed it.",rating:5},{author:"Claire M.",text:"Every detail was intentional. Every moment felt inevitable.",rating:5}],rating:5,user_ratings_total:200,phone:"+1 212 555 0199",phone_href:"tel:+12125550199",address:"110 Greene Street, New York, NY 10012"},n=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function b(e,t="#"){if(!e)return t;const s=String(e).trim();return s.startsWith("tel:")||s.startsWith("https:")||s.startsWith("http:")||s==="#"?s:t}const o=(e,t,s)=>{const r=t.split(".").reduce((i,a)=>i==null?i:i[a],e);return r==null||r===""?s:r},w=e=>{const t=Math.round(Number(e)||0);return"★".repeat(Math.max(0,Math.min(5,t)))+"☆".repeat(Math.max(0,5-t))},g=(e,t)=>Array.isArray(e)&&e.length?e[0]:t;function W(e){const t=String(e||"").split(",").map(s=>s.trim()).filter(Boolean);return t.length>=3?t[t.length-3]:t[0]||""}function B(e){var s;const t=(s=e.design_system)==null?void 0:s.palette;if(Array.isArray(t)&&t.length>=5){const r=document.documentElement;r.style.setProperty("--color-1",t[0]),r.style.setProperty("--color-2",t[1]),r.style.setProperty("--color-3",t[2]),r.style.setProperty("--color-4",t[3]),r.style.setProperty("--color-5",t[4])}}function C(e){const t=n(o(e,"business_name","Wedding Planner")),s=n(o(e,"copywriting.cta_text","Begin Your Story"));return`
  <nav class="site-nav" aria-label="Main navigation">
    <div class="nav-inner">
      <a class="nav-logo" href="#main">${t}</a>
      <div class="nav-links">
        <a class="nav-link" href="#services">Services</a>
        <a class="nav-link" href="#story">About</a>
        <a class="nav-link" href="#gallery">Gallery</a>
        <a class="nav-link" href="#proof">Testimonials</a>
        <a class="btn btn-primary nav-cta" href="#cta">${s}</a>
      </div>
    </div>
  </nav>`}function M(e){const t=n(o(e,"location","")),s=n(o(e,"copywriting.hero_headline","Love, Curated.")),r=n(o(e,"copywriting.hero_subheadline","Bespoke wedding planning for the discerning couple.")),i=n(o(e,"copywriting.cta_text","Begin Your Story")),a=n(g(o(e,"media.hero",[]),p.hero)),c=Number(o(e,"rating",0)),l=Number(o(e,"user_ratings_total",0)),d=c?`<div class="hero-rating">
         <span class="stars" aria-hidden="true">${w(c)}</span>
         <span class="rating-num">${n(c)}</span>
         ${l?`<span>from ${n(l)}+ couples</span>`:""}
       </div>`:"";return`
  <header class="hero" id="top">
    <img class="hero-img" src="${a}" alt="${n(o(e,"business_name","Wedding ceremony"))}" fetchpriority="high" />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      ${t?`<p class="hero-kicker">${t}</p>`:""}
      <h1 class="hero-title">${s}</h1>
      <p class="hero-sub">${r}</p>
      ${d}
      <div class="hero-cta-row">
        <a class="btn btn-primary" href="#cta">${i}</a>
        <a class="btn btn-ghost" href="#services">Our Services</a>
      </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">Scroll</div>
  </header>`}function I(e){const t=o(e,"sections.usps",null),r=`<div class="marquee-group">${(Array.isArray(t)&&t.length?t:["Where love becomes art","Every detail, intentional","A wedding unlike any other","Twelve years of singular moments","Designed for the discerning few","Begin your story"]).map(i=>`<span class="marquee-item">${n(i)}<span class="sep">◆</span></span>`).join("")}</div>`;return`
  <section class="marquee-section" aria-hidden="true">
    <div class="marquee-track">${r}${r}</div>
  </section>`}function L(e){const t=n(o(e,"copywriting.services_intro","Every love story is singular. Your wedding should be too.")),s=o(e,"sections.services",null),i=(Array.isArray(s)&&s.length?s:y).map(a=>`
    <article class="service-item">
      <span class="service-num">${n(a.num)}</span>
      <div class="service-body">
        <h3 class="service-name">${n(a.name)}</h3>
        <p class="service-desc">${n(a.desc)}</p>
      </div>
    </article>`).join("");return`
  <section class="wedding-services" id="services">
    <div class="services-inner">
      <div class="services-header">
        <p class="services-eyebrow" data-reveal>What We Offer</p>
        <h2 class="services-title" data-reveal>The Art of the<br><em>Perfect Wedding</em></h2>
        <p class="services-intro" data-reveal>${t}</p>
      </div>
      <div class="services-list">${i}</div>
    </div>
  </section>`}function Y(e){const t=n(o(e,"copywriting.about_text","We design weddings as we design art — with intention, with restraint, with an eye for the detail no one else sees.")),s=String(o(e,"copywriting.about_text","")),r=s.match(/^[^.!?]+[.!?]/),i=r?r[0].trim():(s.length>120?s.slice(0,120)+"…":s)||"Every wedding is a singular work of art.",a=n(i),c=n(o(e,"copywriting.problem_text","Your wedding deserves more than a template.")),l=n(g(o(e,"media.about",[]),p.about));return`
  <section class="story-section" id="story">
    <div class="story-grid">
      <div class="story-text">
        <p class="story-eyebrow" data-reveal>Our Approach</p>
        <blockquote class="story-pull-quote" data-reveal>${a}</blockquote>
        <p class="story-body" data-reveal>${t}</p>
        <p class="story-subline" data-reveal>${c}</p>
      </div>
      <div class="story-img-wrap">
        <img class="story-img" src="${l}" alt="Inside ${n(o(e,"business_name","our studio"))}" loading="lazy" />
      </div>
    </div>
  </section>`}function N(e){const t=o(e,"media.gallery",[]);return`
  <section class="gallery-section" id="gallery">
    <div class="gallery-head">
      <p class="gallery-eyebrow" data-reveal>Portfolio</p>
      <h2 class="gallery-title" data-reveal><em>Moments</em> We&rsquo;ve Designed</h2>
    </div>
    <div class="masonry-grid">${(Array.isArray(t)&&t.length?t:p.gallery).slice(0,6).map((i,a)=>`
    <figure class="masonry-item">
      <img src="${n(i)}" alt="Wedding moment ${a+1}" loading="lazy" decoding="async" />
    </figure>`).join("")}</div>
  </section>`}function T(e){const t=o(e,"rating",5),s=Number(o(e,"user_ratings_total",0)),r=o(e,"reviews",[]);let i=null;Array.isArray(r)&&r.length&&(i=[...r].sort((l,d)=>(Number(d.rating)||0)-(Number(l.rating)||0)||String(d.text||"").length-String(l.text||"").length)[0]);const a=n((i==null?void 0:i.text)||o(e,"copywriting.testimonials_intro","A celebration unlike any other.")),c=i!=null&&i.author?n(i.author):n(o(e,"business_name","A couple"));return`
  <section class="proof-section" id="proof">
    <p class="proof-stars" aria-hidden="true">${w(t)}</p>
    <p class="proof-rating">${n(t)}</p>
    <p class="proof-count">${s?`${n(s)}+ couples`:"Loved by every couple we&rsquo;ve served"}</p>
    <blockquote class="proof-quote" data-reveal>${a}</blockquote>
    <p class="proof-attribution">${c}</p>
  </section>`}function H(e){const t=e.copywriting||{},s=n(W(e.location)||"your city"),r=t.cta_headline?n(t.cta_headline):`Your wedding story begins in ${s}.`,i=n(t.cta_text||"Begin Your Story"),a=b(e.phone_href);return`
  <section class="cta-section" id="cta" aria-labelledby="cta-headline">
    <div class="cta-content" data-reveal>
      <h2 class="cta-headline" id="cta-headline">${r}</h2>
      <p class="cta-sub"><em>Every extraordinary wedding starts with a single conversation.</em></p>
      <div class="cta-btn-row">
        <a href="${a}" class="btn btn-primary">${i}</a>
        <a href="#services" class="btn btn-ghost">Our Services</a>
      </div>
    </div>
  </section>`}function j(e){const t=o(e,"geo",null);if(t&&t.lat&&t.lng)return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.lat+","+t.lng)}`;const s=o(e,"address","")||o(e,"location","");return s?`https://maps.google.com/?q=${encodeURIComponent(s)}`:"#"}function D(e){const t=o(e,"geo",null);if(t&&t.lat&&t.lng)return`https://maps.google.com/maps?q=${t.lat},${t.lng}&z=15&output=embed`;const s=o(e,"address","")||o(e,"location","");return s?`https://maps.google.com/maps?q=${encodeURIComponent(s)}&z=15&output=embed`:null}function F(e){const t=n(o(e,"business_name","Wedding Planner")),s=n(o(e,"address","")),r=n(o(e,"phone","")),i=b(o(e,"phone_href","")),a=n(o(e,"location","")),c=new Date().getFullYear(),l=o(e,"sections.services",null),d=Array.isArray(l)&&l.length?l:y;return`
  <footer class="site-footer" id="contact">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo">${t}</div>
        <p class="footer-tagline">${n(o(e,"copywriting.hero_subheadline","Bespoke wedding planning for the discerning couple."))}</p>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        ${d.map(u=>`<p>${n(u.name)}</p>`).join("")}
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        ${s?`<p>${s}</p>`:a?`<p>${a}</p>`:""}
        ${r?`<p><a href="${i}">${r}</a></p>`:""}
        <a class="footer-maps-link" href="${j(e)}" target="_blank" rel="noopener">Get Directions ↗</a>
        ${(()=>{const u=D(e);return u?`<div class="footer-map"><iframe src="${u}" width="100%" height="160" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Location map"></iframe></div>`:""})()}
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-tagline-bottom"><em>Where love becomes art</em></span>
      <span>&copy; ${c} ${t}. All rights reserved.</span>
    </div>
  </footer>`}function O(e){B(e);const t=g(o(e,"media.hero",[]),p.hero),s=document.getElementById("hero-preload");s&&t&&s.setAttribute("href",t);const r=document.querySelector("#main"),i=document.createElement("div");i.innerHTML=C(e).trim();const a=i.firstElementChild;return a&&document.body.insertBefore(a,r),r.innerHTML=[M(e),I(e),L(e),Y(e),N(e),T(e),H(e),F(e)].join(""),a}function R(e){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;$(),_(".js-cursor"),S(".btn");let s=[];const r=document.querySelector(".hero-title");if(r&&typeof m=="function"){const a=m({target:r,by:"chars"});s=a&&a[0]&&a[0].chars||r.querySelectorAll(".char")}if(!t){const a=f.timeline();s&&s.length&&a.from(s,{yPercent:110,opacity:0,duration:.8,stagger:.03,ease:"power3.out"}),a.from([".hero-kicker",".hero-sub",".hero-rating",".hero-cta-row"],{y:40,opacity:0,duration:.7,stagger:.1,ease:"power2.out"},"-=0.3")}q(".hero-img",".hero"),A("[data-reveal]",{y:60,duration:.7}),k(".service-item",{duration:.5,stagger:.06});const i=document.querySelector(".hero");e&&i&&"IntersectionObserver"in window&&new IntersectionObserver(([c])=>{e.classList.toggle("scrolled",!c.isIntersecting)},{rootMargin:"-80px 0px 0px 0px",threshold:0}).observe(i),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{x(".services-title, .gallery-title, .cta-headline, .services-eyebrow"),E(".story-pull-quote, .proof-quote"),h.refresh()}),window.addEventListener("load",()=>h.refresh())}function v(){const e=O(P);R(e)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();
