import{g as v,S as p,i as w,a as $,b as _,c as g,h as S,r as q,d as A,e as k,f as x}from"./motion-CeD9fxEu.js";v.registerPlugin(p);const u={hero:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",about:"https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=75",gallery:["https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=75","https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=75","https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=75","https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=600&q=75"]},f=[{num:"01",name:"Full Planning",desc:"End-to-end design and coordination from first vision to last dance."},{num:"02",name:"Partial Planning",desc:"Six months of refined guidance when you need an expert partner."},{num:"03",name:"Design & Styling",desc:"Visual direction, florals, stationery, and every aesthetic detail."},{num:"04",name:"Day Coordination",desc:"Seamless execution so you are present for every moment."}],E=window.__LEAD__||{business_name:"Atelier Blanc",location:"New York, NY",copywriting:{hero_headline:"Love, Curated.",hero_subheadline:"Bespoke wedding planning for the discerning couple.",problem_text:"Your wedding deserves more than a template.",about_text:"We design weddings as we design art — with intention, with restraint, with an eye for the detail no one else sees. Twelve years. Four hundred couples. Zero weddings that look alike.",services_intro:"Every love story is singular. Your wedding should be too.",cta_text:"Begin Your Story",testimonials_intro:"5.0 from couples who trusted us with their most important day."},design_system:{palette:["#3B2A33","#A68A4E","#F7EFE9","#FDF8F5","#3B2A33"]},media:{hero:[],gallery:[],about:[]},reviews:[{author:"Sophie & James",text:"Atelier Blanc did not plan our wedding. They composed it.",rating:5},{author:"Claire M.",text:"Every detail was intentional. Every moment felt inevitable.",rating:5}],rating:5,user_ratings_total:200,phone:"+1 212 555 0199",phone_href:"tel:+12125550199",address:"110 Greene Street, New York, NY 10012"},n=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function y(e,t="#"){if(!e)return t;const s=String(e).trim();return s.startsWith("tel:")||s.startsWith("https:")||s.startsWith("http:")||s==="#"?s:t}const o=(e,t,s)=>{const r=t.split(".").reduce((a,i)=>a==null?a:a[i],e);return r==null||r===""?s:r},b=e=>{const t=Math.round(Number(e)||0);return"★".repeat(Math.max(0,Math.min(5,t)))+"☆".repeat(Math.max(0,5-t))},h=(e,t)=>Array.isArray(e)&&e.length?e[0]:t;function P(e){var s;const t=(s=e.design_system)==null?void 0:s.palette;if(Array.isArray(t)&&t.length>=5){const r=document.documentElement;r.style.setProperty("--color-1",t[0]),r.style.setProperty("--color-2",t[1]),r.style.setProperty("--color-3",t[2]),r.style.setProperty("--color-4",t[3]),r.style.setProperty("--color-5",t[4])}}function W(e){const t=n(o(e,"business_name","Wedding Planner")),s=n(o(e,"copywriting.cta_text","Begin Your Story"));return`
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
  </nav>`}function B(e){const t=n(o(e,"location","")),s=n(o(e,"copywriting.hero_headline","Love, Curated.")),r=n(o(e,"copywriting.hero_subheadline","Bespoke wedding planning for the discerning couple.")),a=n(o(e,"copywriting.cta_text","Begin Your Story")),i=n(h(o(e,"media.hero",[]),u.hero)),l=Number(o(e,"rating",0)),c=Number(o(e,"user_ratings_total",0)),d=l?`<div class="hero-rating">
         <span class="stars" aria-hidden="true">${b(l)}</span>
         <span class="rating-num">${n(l)}</span>
         ${c?`<span>from ${n(c)}+ couples</span>`:""}
       </div>`:"";return`
  <header class="hero" id="top">
    <img class="hero-img" src="${i}" alt="${n(o(e,"business_name","Wedding ceremony"))}" fetchpriority="high" />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      ${t?`<p class="hero-kicker">${t}</p>`:""}
      <h1 class="hero-title">${s}</h1>
      <p class="hero-sub">${r}</p>
      ${d}
      <div class="hero-cta-row">
        <a class="btn btn-primary" href="#cta">${a}</a>
        <a class="btn btn-ghost" href="#services">Our Services</a>
      </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">Scroll</div>
  </header>`}function C(e){const t=o(e,"sections.usps",null),r=`<div class="marquee-group">${(Array.isArray(t)&&t.length?t:["Where love becomes art","Every detail, intentional","A wedding unlike any other","Twelve years of singular moments","Designed for the discerning few","Begin your story"]).map(a=>`<span class="marquee-item">${n(a)}<span class="sep">◆</span></span>`).join("")}</div>`;return`
  <section class="marquee-section" aria-hidden="true">
    <div class="marquee-track">${r}${r}</div>
  </section>`}function M(e){const t=n(o(e,"copywriting.services_intro","Every love story is singular. Your wedding should be too.")),s=o(e,"sections.services",null),a=(Array.isArray(s)&&s.length?s:f).map(i=>`
    <article class="service-item" data-reveal>
      <span class="service-num">${n(i.num)}</span>
      <div class="service-body">
        <h3 class="service-name">${n(i.name)}</h3>
        <p class="service-desc">${n(i.desc)}</p>
      </div>
    </article>`).join("");return`
  <section class="wedding-services" id="services">
    <div class="services-inner">
      <div class="services-header">
        <p class="services-eyebrow" data-reveal>What We Offer</p>
        <h2 class="services-title" data-reveal>The Art of the<br><em>Perfect Wedding</em></h2>
        <p class="services-intro" data-reveal>${t}</p>
      </div>
      <div class="services-list">${a}</div>
    </div>
  </section>`}function I(e){const t=n(o(e,"copywriting.about_text","We design weddings as we design art — with intention, with restraint, with an eye for the detail no one else sees.")),s=String(o(e,"copywriting.about_text","")),r=s.match(/^[^.!?]+[.!?]/),a=r?r[0].trim():(s.length>120?s.slice(0,120)+"…":s)||"Every wedding is a singular work of art.",i=n(a),l=n(o(e,"copywriting.problem_text","Your wedding deserves more than a template.")),c=n(h(o(e,"media.about",[]),u.about));return`
  <section class="story-section" id="story">
    <div class="story-grid">
      <div class="story-text">
        <p class="story-eyebrow" data-reveal>Our Approach</p>
        <blockquote class="story-pull-quote" data-reveal>${i}</blockquote>
        <p class="story-body" data-reveal>${t}</p>
        <p class="story-subline" data-reveal>${l}</p>
      </div>
      <div class="story-img-wrap">
        <img class="story-img" src="${c}" alt="Inside ${n(o(e,"business_name","our studio"))}" loading="lazy" />
      </div>
    </div>
  </section>`}function L(e){const t=o(e,"media.gallery",[]);return`
  <section class="gallery-section" id="gallery">
    <div class="gallery-head">
      <p class="gallery-eyebrow" data-reveal>Portfolio</p>
      <h2 class="gallery-title" data-reveal><em>Moments</em> We&rsquo;ve Designed</h2>
    </div>
    <div class="masonry-grid">${(Array.isArray(t)&&t.length?t:u.gallery).slice(0,6).map((a,i)=>`
    <figure class="masonry-item">
      <img src="${n(a)}" alt="Wedding moment ${i+1}" loading="lazy" decoding="async" />
    </figure>`).join("")}</div>
  </section>`}function Y(e){const t=o(e,"rating",5),s=Number(o(e,"user_ratings_total",0)),r=o(e,"reviews",[]);let a=null;Array.isArray(r)&&r.length&&(a=[...r].sort((c,d)=>(Number(d.rating)||0)-(Number(c.rating)||0)||String(d.text||"").length-String(c.text||"").length)[0]);const i=n((a==null?void 0:a.text)||o(e,"copywriting.testimonials_intro","A celebration unlike any other.")),l=a!=null&&a.author?n(a.author):n(o(e,"business_name","A couple"));return`
  <section class="proof-section" id="proof">
    <p class="proof-stars" aria-hidden="true">${b(t)}</p>
    <p class="proof-rating">${n(t)}</p>
    <p class="proof-count">${s?`${n(s)}+ couples`:"Loved by every couple we&rsquo;ve served"}</p>
    <blockquote class="proof-quote" data-reveal>${i}</blockquote>
    <p class="proof-attribution">${l}</p>
  </section>`}function N(e){const t=e.copywriting||{},s=n(e.location||"your city"),r=t.cta_headline?n(t.cta_headline):`Your wedding story begins in ${s}.`,a=n(t.cta_text||"Begin Your Story"),i=y(e.phone_href);return`
  <section class="cta-section" id="cta" aria-labelledby="cta-headline">
    <div class="cta-content" data-reveal>
      <h2 class="cta-headline" id="cta-headline">${r}</h2>
      <p class="cta-sub"><em>Every extraordinary wedding starts with a single conversation.</em></p>
      <div class="cta-btn-row">
        <a href="${i}" class="btn btn-primary">${a}</a>
        <a href="#services" class="btn btn-ghost">Our Services</a>
      </div>
    </div>
  </section>`}function T(e){const t=o(e,"geo",null);if(t&&t.lat&&t.lng)return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.lat+","+t.lng)}`;const s=o(e,"address","")||o(e,"location","");return s?`https://maps.google.com/?q=${encodeURIComponent(s)}`:"#"}function H(e){const t=o(e,"geo",null);if(t&&t.lat&&t.lng)return`https://maps.google.com/maps?q=${t.lat},${t.lng}&z=15&output=embed`;const s=o(e,"address","")||o(e,"location","");return s?`https://maps.google.com/maps?q=${encodeURIComponent(s)}&z=15&output=embed`:null}function D(e){const t=n(o(e,"business_name","Wedding Planner")),s=n(o(e,"address","")),r=n(o(e,"phone","")),a=y(o(e,"phone_href","")),i=n(o(e,"location","")),l=new Date().getFullYear();return`
  <footer class="site-footer" id="contact">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo">${t}</div>
        <p class="footer-tagline">${n(o(e,"copywriting.hero_subheadline","Bespoke wedding planning for the discerning couple."))}</p>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        ${f.map(c=>`<p>${n(c.name)}</p>`).join("")}
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        ${s?`<p>${s}</p>`:i?`<p>${i}</p>`:""}
        ${r?`<p><a href="${a}">${r}</a></p>`:""}
        <a class="footer-maps-link" href="${T(e)}" target="_blank" rel="noopener">Get Directions ↗</a>
        ${(()=>{const c=H(e);return c?`<div class="footer-map"><iframe src="${c}" width="100%" height="160" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Location map"></iframe></div>`:""})()}
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-tagline-bottom"><em>Where love becomes art</em></span>
      <span>&copy; ${l} ${t}. All rights reserved.</span>
    </div>
  </footer>`}function F(e){P(e);const t=h(o(e,"media.hero",[]),u.hero),s=document.getElementById("hero-preload");s&&t&&s.setAttribute("href",t);const r=document.querySelector("#main"),a=document.createElement("div");a.innerHTML=W(e).trim();const i=a.firstElementChild;return i&&document.body.insertBefore(i,r),r.innerHTML=[B(e),C(e),M(e),I(e),L(e),Y(e),N(e),D(e)].join(""),i}function j(e){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;w(),$(".js-cursor"),_(".btn");let s=[];const r=document.querySelector(".hero-title");if(r&&typeof g=="function"){const i=g({target:r,by:"chars"});s=i&&i[0]&&i[0].chars||r.querySelectorAll(".char")}if(!t){const i=v.timeline();s&&s.length&&i.from(s,{yPercent:110,opacity:0,duration:.8,stagger:.03,ease:"power3.out"}),i.from([".hero-kicker",".hero-sub",".hero-rating",".hero-cta-row"],{y:40,opacity:0,duration:.7,stagger:.1,ease:"power2.out"},"-=0.3")}S(".hero-img",".hero"),q("[data-reveal]",{y:60,duration:.7}),A(".service-item",{duration:.5,stagger:.06});const a=document.querySelector(".hero");e&&a&&"IntersectionObserver"in window&&new IntersectionObserver(([l])=>{e.classList.toggle("scrolled",!l.isIntersecting)},{rootMargin:"-80px 0px 0px 0px",threshold:0}).observe(a),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{k(".services-title, .gallery-title, .cta-headline, .services-eyebrow"),x(".story-pull-quote, .proof-quote"),p.refresh()}),window.addEventListener("load",()=>p.refresh())}function m(){const e=F(E);j(e)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m();
