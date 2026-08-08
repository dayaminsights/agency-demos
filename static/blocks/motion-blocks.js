(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = window.gsap && window.ScrollTrigger;
  if (hasGSAP) gsap.registerPlugin(ScrollTrigger);
  if (hasGSAP && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  // Smooth scroll (Lenis) unless reduced-motion
  if (!reduce && window.Lenis) {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (hasGSAP) lenis.on("scroll", ScrollTrigger.update);
  }

  const intensity = document.body.dataset.motion || "balanced";
  const dist = intensity === "expressive" ? 60 : intensity === "subtle" ? 20 : 40;

  function reveal(el) {
    const kind = el.dataset.reveal;
    if (reduce || !hasGSAP) { el.style.opacity = 1; return; }
    const i = parseFloat(el.style.getPropertyValue("--i")) || 0;
    const from = { opacity: 0, duration: 0.9, delay: Math.min(i * 0.08, 0.5), ease: "power3.out" };
    if (kind === "rise" || kind === "lines") from.y = dist;
    if (kind === "fade") from.scale = 1.04;
    gsap.from(el, { ...from, scrollTrigger: { trigger: el, start: "top 85%" } });
  }
  document.querySelectorAll("[data-reveal]").forEach(reveal);

  // Magnetic buttons
  if (!reduce) document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
  });

  // Sticky CTA reveal after hero (smooth opacity/transform fade, not instant show/hide)
  const sticky = document.querySelector("[data-sticky-cta]");
  const hero = document.querySelector('[data-block="hero"]');
  if (sticky && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { sticky.classList.toggle("is-visible", !e.isIntersecting); })
      .observe(hero);
  }

  // Horizontal-scroll gallery drag
  document.querySelectorAll(".gallery--horizontal-scroll [data-gallery]").forEach((g) => {
    let down = false, x = 0, sl = 0;
    g.addEventListener("pointerdown", (e) => { down = true; x = e.pageX; sl = g.scrollLeft; });
    g.addEventListener("pointerup", () => { down = false; });
    g.addEventListener("pointerleave", () => { down = false; });
    g.addEventListener("pointermove", (e) => { if (down) g.scrollLeft = sl - (e.pageX - x); });
  });

  // Stats: animate count-up on scroll into view; preserves any non-numeric
  // prefix/suffix (e.g. "1,400+", "4.9", "$99") around the numeric target.
  document.querySelectorAll('[data-count-to]').forEach((el) => {
    const raw = el.dataset.countTo;
    const match = raw.match(/[\d,.]+/);
    if (!match || reduce || !hasGSAP) { el.textContent = raw; return; }
    const numStr = match[0].replace(/,/g, '');
    const target = parseFloat(numStr);
    const prefix = raw.slice(0, match.index);
    const suffix = raw.slice(match.index + match[0].length);
    const decimals = (numStr.split('.')[1] || '').length;
    const proxy = { v: 0 };
    gsap.to(proxy, {
      v: target, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: () => {
        el.textContent = prefix + proxy.v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
      },
    });
  });

  // Before/after drag comparison slider
  document.querySelectorAll('[data-before-after]').forEach((frame) => {
    const clip = frame.querySelector('.before-after__clip');
    const beforeImg = clip.querySelector('img');
    const handle = frame.querySelector('[data-before-after-handle]');
    function sizeBefore() { beforeImg.style.width = frame.offsetWidth + 'px'; }
    function setPct(pct) {
      pct = Math.max(0, Math.min(100, pct));
      clip.style.width = pct + '%';
      handle.style.left = pct + '%';
    }
    sizeBefore();
    setPct(50);
    window.addEventListener('resize', sizeBefore);
    let dragging = false;
    const move = (clientX) => {
      const rect = frame.getBoundingClientRect();
      setPct(((clientX - rect.left) / rect.width) * 100);
    };
    frame.addEventListener('pointerdown', (e) => { dragging = true; move(e.clientX); });
    window.addEventListener('pointermove', (e) => { if (dragging) move(e.clientX); });
    window.addEventListener('pointerup', () => { dragging = false; });
  });

  // Narrative: pin the section and crossfade problem -> solution -> proof
  // tied to scroll position (scrub), not a one-shot reveal.
  document.querySelectorAll('[data-narrative]').forEach((section) => {
    const solution = section.querySelector('[data-narrative-solution]');
    const proof = section.querySelector('[data-narrative-proof]');
    if (reduce || !hasGSAP) {
      if (solution) solution.style.opacity = 1;
      if (proof) proof.style.opacity = 1;
      return;
    }
    const problem = section.querySelector('[data-narrative-problem]');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top top', end: '+=150%', scrub: 1, pin: true },
    });
    tl.to(problem, { opacity: 0, duration: 1 }, 0.3)
      .to(solution, { opacity: 1, duration: 1 }, 0.3);
    if (proof) tl.to(proof, { opacity: 1, duration: 1 }, 1.3);
  });

  // Process: pin the section vertically while translating the step track
  // horizontally in proportion to scroll (classic pinned-horizontal pattern).
  document.querySelectorAll('[data-process]').forEach((section) => {
    const track = section.querySelector('[data-process-track]');
    const viewport = section.querySelector('[data-process-viewport]');
    if (reduce || !hasGSAP || !track || !viewport) {
      if (viewport) viewport.style.overflowX = 'auto';
      return;
    }
    const distance = () => Math.max(track.scrollWidth - viewport.clientWidth, 1);
    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section, start: 'top top', pin: true, scrub: 1,
        end: () => '+=' + distance(),
        invalidateOnRefresh: true,
      },
    });
  });

  // Real parallax for the layered-parallax hero: image moves at a different
  // rate than scroll, giving genuine depth (previously this variant was a
  // static image with no differential motion at all).
  document.querySelectorAll('.hero--layered-parallax .hero__media img').forEach((img) => {
    if (reduce || !hasGSAP) return;
    gsap.to(img, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: img.closest('.hero--layered-parallax'),
        start: 'top top', end: 'bottom top', scrub: true,
      },
    });
  });
})();
