/* MetallicHamed site renderer — reads window.MH (data.js, + i18n-ar.js on Arabic pages). No libraries. */
(() => {
  const D = window.MH, P = D.profile;
  const AR = document.documentElement.lang === "ar";
  const T = (en, ar) => (AR ? ar : en);
  const R = document.body.dataset.root || "";          // site root (assets)
  const H = R + (AR ? "ar/" : "");                      // root for page links in the current language
  const PAGE = document.body.dataset.page || "";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (n) => !n ? "" : n >= 1e6 ? (n / 1e6).toFixed(n >= 1e8 ? 0 : n >= 1e7 ? 1 : 2).replace(/0$/, "").replace(/\.0$/, "") + "M" : n >= 1e3 ? Math.round(n / 1e3) + "K" : String(n);
  const wa = (m) => `https://wa.me/${P.whatsapp}?text=${encodeURIComponent(m || T("Hi Hamed, I saw your portfolio and I'd like to talk about a video project.", "أهلاً حامد، شفت البورتفوليو بتاعك وعايز أتكلم معاك في مشروع فيديو."))}`;
  const brand = (k) => { const b = D.brands[k] || [k, "", ""]; return { key: k, name: b[0], logo: b[1] ? `${R}assets/logos/${b[1]}` : "", link: b[2], subs: b[3] }; };
  const initials = (n) => n.replace(/[^A-Za-z0-9؀-ۿ ]/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const catUrl = (k) => `${H}${k}/`;
  const CAT = Object.fromEntries(D.categories.map((c) => [c.key, c]));
  const inCat = (k) => D.videos.filter((v) => v.cats.includes(k));
  const byViews = (a, b) => (b.v || 0) - (a.v || 0);
  const SUBS = T("subs", "مشترك");

  /* ---------- platforms ---------- */
  const ttHandle = (v) => { const b = brand(v.c).link || ""; const m = b.match(/tiktok\.com\/@([^/?]+)/); return m ? m[1] : ""; };
  const PL = {
    yt:    { name: "YouTube",   embed: (v) => `https://www.youtube-nocookie.com/embed/${v.ref}?autoplay=1&rel=0&modestbranding=1&playsinline=1`, link: (v) => `https://youtu.be/${v.ref}`, thumb: (v) => `https://i.ytimg.com/vi/${v.ref}/${v.f === "v" ? "hq2" : "mqdefault"}.jpg` },
    tt:    { name: "TikTok",    embed: (v) => `https://www.tiktok.com/player/v1/${v.ref}?autoplay=1&rel=0&description=0&music_info=0`, link: (v) => v.url || (ttHandle(v) ? `https://www.tiktok.com/@${ttHandle(v)}/video/${v.ref}` : `https://www.tiktok.com/embed/v2/${v.ref}`) },
    ig:    { name: "Instagram", embed: (v) => `https://www.instagram.com/reel/${v.ref}/embed/`, link: (v) => `https://www.instagram.com/reel/${v.ref}/` },
    drive: { name: "Drive",     embed: (v) => `https://drive.google.com/file/d/${v.ref}/preview`, link: (v) => `https://drive.google.com/file/d/${v.ref}/view`, thumb: (v) => `https://drive.google.com/thumbnail?id=${v.ref}&sz=w640` },
    fb:    { name: "Facebook",  embed: (v) => `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(v.ref)}&show_text=false&autoplay=true`, link: (v) => v.ref },
    x:     { name: "X",         embed: null, link: (v) => v.ref },
    file:  { name: "",          embed: null, link: (v) => v.orig || "" }
  };
  const hostName = (u) => /tiktok/.test(u) ? "TikTok" : /instagram/.test(u) ? "Instagram" : /facebook/.test(u) ? "Facebook" : /youtu/.test(u) ? "YouTube" : /x\.com|twitter/.test(u) ? "X" : "";
  // publish date (ms) for "Newest" sorting: YouTube has d; TikTok / X / Instagram ids carry their own timestamp
  const IG = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  const stamp = (v) => {
    try {
      if (v.d) return Date.parse(v.d);
      if (v.p === "tt") return Number(BigInt(v.ref) >> 32n) * 1000;
      if (v.p === "x") { const m = v.ref.match(/status\/(\d+)/); return m ? Number((BigInt(m[1]) >> 22n) + 1288834974657n) : 0; }
      if (v.p === "ig" && v.ref.length <= 11) { let id = 0n; for (const ch of v.ref) id = id * 64n + BigInt(IG.indexOf(ch)); return Number((id >> 23n) + 1314220021721n); }
    } catch (e) {}
    return 0;
  };
  D.videos.forEach((v) => { v.ts = stamp(v); if (v.tag === "Spec edit" && !v.cats.includes("spec")) v.cats.push("spec"); });   // every test also lives on the Spec edits page
  // self-hosted copies win over embeds; the original post stays as "View on …"
  D.videos.forEach((v) => { if (v.m) { v.orig = PL[v.p].link(v); v.p = "file"; v.ref = `media/${v.m}.mp4`; } });
  const thumbOf = (v) => v.th ? `${R}assets/thumbs/${v.th}` : v.p === "file" ? `${R}${v.ref.replace(/\.mp4$/, ".jpg")}` : (PL[v.p].thumb ? PL[v.p].thumb(v) : "");
  const tagOf = (t) => t === "Spec edit" ? T("Spec edit", "تجربة أداء") : t;

  function card(v, i, listId) {
    const b = brand(v.c), th = thumbOf(v);
    const img = th ? `<img src="${esc(th)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : "";
    return `<button class="card ${v.f}" type="button" data-list="${listId}" data-i="${i}" aria-label="${T("Play", "تشغيل")}: ${esc(b.name)} — ${esc(v.t)}">
      <span class="ph" aria-hidden="true">${esc(b.name)}</span>${img}
      <span class="badges">${v.v ? `<span class="badge views">▶ ${fmt(v.v)}</span>` : "<span></span>"}${v.tag ? `<span class="badge tag">${esc(tagOf(v.tag))}</span>` : ""}</span>
      <span class="play" aria-hidden="true"></span>
      <span class="meta"><span class="who">${b.logo ? `<img src="${esc(b.logo)}" alt="" loading="lazy">` : ""}<span>${esc(b.name)}</span></span><span class="ttl" dir="auto">${esc(v.t)}</span></span>
    </button>`;
  }
  const LISTS = {};
  let listSeq = 0;
  function grid(vids, f) {
    const id = "l" + listSeq++; LISTS[id] = vids;
    return `<div class="grid ${f}">${vids.map((v, i) => card(v, i, id)).join("")}</div>`;
  }

  /* ---------- lightbox (cinema mode) ---------- */
  const lb = document.createElement("div");
  lb.className = "lb"; lb.hidden = true; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", T("Video player", "مشغل الفيديو"));
  lb.innerHTML = `<button class="lb-x" type="button" aria-label="${T("Close", "إغلاق")}">✕</button><button class="lb-nav prev" type="button" aria-label="${T("Previous", "السابق")}">‹</button><button class="lb-nav next" type="button" aria-label="${T("Next", "التالي")}">›</button><div class="lb-stage"></div>`;
  document.body.append(lb);
  let cur = null, lastFocus = null;
  function openVideo(listId, i) {
    const list = LISTS[listId]; if (!list) return;
    i = (i + list.length) % list.length; cur = { listId, i };
    const v = list[i], p = PL[v.p], b = brand(v.c);
    if (!p.embed && v.p !== "file") { window.open(p.link(v), "_blank", "noopener"); return; }
    const media = v.p === "file" ? `<video src="${esc(R + v.ref)}" poster="${esc(thumbOf(v))}" controls autoplay playsinline preload="auto"></video>`
      : `<iframe src="${esc(p.embed(v))}" title="${esc(v.t)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write" allowfullscreen></iframe>`;
    const l = p.link(v), n = p.name || hostName(l);
    $(".lb-stage", lb).innerHTML = `<div class="lb-frame ${v.f}">${media}</div>
      <div class="lb-info"><div class="who">${b.logo ? `<img src="${esc(b.logo)}" alt="">` : ""}<div>${esc(b.name)}<small dir="auto">${esc(v.t)}${v.v ? ` · ${fmt(v.v)} ${T("views", "مشاهدة")}` : ""}</small></div></div>
      ${l && n ? `<a class="btn sm" href="${esc(l)}" target="_blank" rel="noopener">${T("View on", "شاهده على")} ${n} ↗</a>` : ""}</div>`;
    $$(".lb-nav", lb).forEach((x) => x.hidden = list.length < 2);
    if (lb.hidden) { lastFocus = document.activeElement; lb.hidden = false; document.documentElement.style.overflow = "hidden"; $(".lb-x", lb).focus(); }
  }
  function openImage(src, alt) {
    cur = null; $(".lb-stage", lb).innerHTML = `<div class="lb-frame img"><img src="${esc(src)}" alt="${esc(alt)}"></div>`;
    $$(".lb-nav", lb).forEach((x) => x.hidden = true);
    lastFocus = document.activeElement; lb.hidden = false; document.documentElement.style.overflow = "hidden"; $(".lb-x", lb).focus();
  }
  function close() { lb.hidden = true; $(".lb-stage", lb).innerHTML = ""; document.documentElement.style.overflow = ""; lastFocus && lastFocus.focus(); }
  const step = (d) => cur && openVideo(cur.listId, cur.i + d);
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest(".lb-x")) close();
    else if (e.target.closest(".prev")) step(-1);
    else if (e.target.closest(".next")) step(1);
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") step(AR ? -1 : 1);
    if (e.key === "ArrowLeft") step(AR ? 1 : -1);
  });
  document.addEventListener("click", (e) => {
    const c = e.target.closest(".card[data-list]"); if (c) return openVideo(c.dataset.list, +c.dataset.i);
    const d = e.target.closest("[data-zoom]"); if (d) return openImage(d.dataset.zoom, d.getAttribute("aria-label") || "");
    const cp = e.target.closest("[data-copy]"); if (cp) {
      const url = new URL(cp.dataset.copy, location.href).href;
      const done = () => toast(T("Link copied", "تم نسخ اللينك"));
      navigator.clipboard ? navigator.clipboard.writeText(url).then(done, () => prompt(T("Copy this link", "انسخ اللينك"), url)) : prompt(T("Copy this link", "انسخ اللينك"), url);
    }
  });
  // "Hire me": let the client pick WhatsApp or email (some clients only use one of them)
  const mail = (m) => `mailto:${P.email}?subject=${encodeURIComponent(T("Video editing project", "مشروع مونتاج"))}&body=${encodeURIComponent(m || T("Hi Hamed, I saw your portfolio and I'd like to talk about a video project.", "أهلاً حامد، شفت البورتفوليو بتاعك وعايز أتكلم معاك في مشروع فيديو."))}`;
  const hm = document.createElement("div");
  hm.className = "hire-modal"; hm.hidden = true; hm.setAttribute("role", "dialog"); hm.setAttribute("aria-modal", "true"); hm.setAttribute("aria-label", T("Contact Hamed", "كلّم حامد"));
  document.body.append(hm);
  const openHire = (msg, from) => {
    hm.innerHTML = `<div class="hire-box"><button class="hire-x" type="button" aria-label="${T("Close", "إغلاق")}">✕</button>
      <span class="eyebrow">${T("Let's work", "يلا نشتغل")}</span><h3>${T("How do you want to reach me?", "تحب تكلمني إزاي؟")}</h3>
      <div class="hire-opts"><a class="hire-opt wa-opt" href="${wa(msg)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z"/></svg><b>WhatsApp</b><span dir="ltr">${P.whatsappDisplay}</span></a>
        <a class="hire-opt" href="${mail(msg)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg><b>${T("Email", "الإيميل")}</b><span dir="ltr">${P.email}</span></a></div></div>`;
    hm.hidden = false; hm._from = from; $(".hire-opt", hm).focus();
  };
  const closeHire = () => { hm.hidden = true; hm._from && hm._from.focus(); };
  hm.addEventListener("click", (e) => { if (e.target === hm || e.target.closest(".hire-x") || e.target.closest(".hire-opt")) closeHire(); });
  document.addEventListener("keydown", (e) => { if (!hm.hidden && e.key === "Escape") closeHire(); });
  document.addEventListener("click", (e) => { const h = e.target.closest("[data-hire]"); if (h) { e.preventDefault(); openHire(h.dataset.hire, h); } });

  function toast(t) { const el = document.createElement("div"); el.className = "toast"; el.textContent = t; document.body.append(el); setTimeout(() => el.remove(), 1800); }

  /* ---------- chrome ---------- */
  const pagePath = PAGE === "home" ? "" : `${PAGE}/`;
  const other = (AR ? R : R + "ar/") + pagePath;
  const links = [[T("Work", "الأعمال"), `${H}work/`, "work"], [T("Top videos", "الأكثر مشاهدة"), `${H}top/`, "top"], [T("Designs", "التصميمات"), `${H}designs/`, "designs"], [T("Clients", "العملاء"), `${H}clients/`, "clients"], [T("About", "عني"), `${H}about/`, "about"]];
  const hire = `<button class="btn violet sm" type="button" data-hire>${T("Hire me", "اشتغل معايا")}</button>`;
  const nav = document.createElement("header");
  nav.className = "nav";
  nav.innerHTML = `<a class="brand" href="${H || "./"}" aria-label="MetallicHamed"><span class="mark">MH</span><span>Metallic<b>Hamed</b></span></a>
    <button class="menu" type="button" aria-label="${T("Menu", "القائمة")}" aria-expanded="false" aria-controls="navlinks"><span></span><span></span></button>
    <nav class="nav-links" id="navlinks">${links.map(([t, h, k]) => `<a href="${h}"${k === PAGE || (k === "work" && CAT[PAGE]) ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
      <a class="lang" href="${other || "./"}" hreflang="${AR ? "en" : "ar"}" lang="${AR ? "en" : "ar"}">${AR ? "English" : "عربي"}</a>${hire}</nav>
    ${hire}`;
  document.body.prepend(nav);
  $(".menu", nav).addEventListener("click", (e) => { const n = $("#navlinks"); n.classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", n.classList.contains("open")); });

  const main = $("main");
  const contact = document.createElement("div");
  contact.className = "wrap"; contact.id = "contact";
  contact.innerHTML = `<section class="cta"><div><span class="eyebrow">${T("Let's work", "يلا نشتغل")}</span><h2 style="margin-top:14px">${T("Let's make your content <em>shine.</em>", "خلّي المحتوى بتاعك <em>يلمع.</em>")}</h2>
      <p>${T("Send your footage, deadline and a link to your channel. I reply within 24 hours.", "ابعتلي المادة والديدلاين ولينك قناتك، وهرد عليك خلال 24 ساعة.")}</p>
      <div class="row" style="margin-top:24px"><a class="btn violet" href="${wa()}" target="_blank" rel="noopener">${T("Message on WhatsApp", "كلمني على واتساب")}</a><a class="btn" href="${R}${P.cv}" target="_blank" rel="noopener">${T("Download CV", "تحميل السي في")}</a></div></div>
    <div class="contact-list"><a href="mailto:${P.email}"><span>${T("Email", "الإيميل")}</span><span dir="ltr">${P.email}</span></a><a href="${wa()}" target="_blank" rel="noopener"><span>${T("WhatsApp", "واتساب")}</span><span dir="ltr">${P.whatsappDisplay}</span></a>
      ${P.socials.map(([n, u, na]) => `<a href="${u}" target="_blank" rel="noopener"><span>${esc(AR && na ? na : n)}</span><span>↗</span></a>`).join("")}</div></section>`;
  const foot = document.createElement("footer");
  foot.className = "foot";
  foot.innerHTML = `<div class="wrap"><span>© ${new Date().getFullYear()} ${P.name} · ${P.brand}</span><nav>${D.categories.map((c) => `<a href="${catUrl(c.key)}">${esc(c.title)}</a>`).join("")}</nav></div>`;
  main.after(contact, foot);
  const w = document.createElement("a");
  w.className = "wa"; w.href = wa(); w.target = "_blank"; w.rel = "noopener"; w.setAttribute("aria-label", T("Chat on WhatsApp", "كلمني على واتساب"));
  w.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z"/></svg>`;
  document.body.append(w);

  /* ---------- blocks ---------- */
  // stats: final value is in the HTML; counts up from 0 when it scrolls into view
  $$("[data-stats]").forEach((el) => {
    // Arabic pages: "200M+" → "+٢٠٠ مليون", "2,500+" → "+٢٬٥٠٠", right-aligned with its label
    const arNum = (s) => s.replace(/^([\d,]+)(M)?\+$/, (m, n, M) => "+" + Number(n.replace(/,/g, "")).toLocaleString("ar-EG") + (M ? " مليون" : ""));
    const show = (s) => AR ? arNum(s) : s;
    el.innerHTML = D.stats.map(([v, l]) => `<div class="stat"><b data-count="${esc(v)}" dir="${AR ? "rtl" : "ltr"}">${esc(show(v))}</b><span>${esc(l)}</span></div>`).join("");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const run = (b) => {
      const m = b.dataset.count.match(/^([\d,.]+)(.*)$/); if (!m) return;
      const end = parseFloat(m[1].replace(/,/g, "")), suf = m[2], comma = m[1].includes(","), t0 = performance.now(), dur = 1600;
      const tick = (t) => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3), n = Math.round(end * e);
        b.textContent = show((comma ? n.toLocaleString("en-US") : n) + suf); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { $$("b[data-count]", e.target).forEach(run); io.unobserve(e.target); } }), { threshold: .4 });
    io.observe(el);
  });

  // logo walls: companies first, then creators, each in D.order (biggest audience first)
  const ordered = (which) => {
    const O = D.order.popular;   // home rows follow the "Popular" ranking
    const list = which === "companies" ? O.companies : which === "creators" ? O.creators : [...O.companies, ...O.creators];
    const seen = new Set();
    // every client shows (initials badge until a logo exists); a logo file used twice only shows once
    return list.filter((k) => D.brands[k] && (!D.brands[k][1] || (!seen.has(D.brands[k][1]) && seen.add(D.brands[k][1]))));
  };
  // YouTube channels count subscribers; TikTok / Instagram / Facebook / X count followers
  const audience = (b) => b.subs ? `${fmt(b.subs)} ${/youtube\.com/.test(b.link || "") ? SUBS : T("followers", "متابع")}` : "";
  // endless horizontal loop: repeats the set until it covers the screen, then slides by one set width.
  // Slow on purpose; pauses on hover/focus and while a voice note plays.
  // Small ‹ › buttons on each end glide the row one "step" (px) faster for people who want to skim.
  const loop = (el, html, speed, step = 260) => {
    el.classList.add("mq");
    el.innerHTML = `<button class="mq-btn prev" type="button" aria-label="${T("Scroll left", "حرّك لليسار")}">‹</button><div class="mq-view"><div class="mq-track"><div class="mq-set">${html}</div></div></div><button class="mq-btn next" type="button" aria-label="${T("Scroll right", "حرّك لليمين")}">›</button>`;
    const view = $(".mq-view", el), track = view.firstElementChild, set = track.firstElementChild;
    const w = set.getBoundingClientRect().width;
    if (!w) return;
    const need = Math.ceil(Math.max(view.clientWidth, screen.width) / w) + 1;
    for (let i = 1; i < need; i++) { const c = set.cloneNode(true); c.setAttribute("aria-hidden", "true"); $$("a,button,[tabindex]", c).forEach((x) => x.setAttribute("tabindex", "-1")); track.append(c); }
    track.style.setProperty("--shift", `-${w}px`);
    track.style.setProperty("--dur", `${Math.round(w / speed)}s`);
    const rev = el.classList.contains("rev");
    let tween = 0;
    const glide = (dir) => {   // dir +1 = content moves left (›), -1 = right (‹)
      const a = track.getAnimations()[0]; if (!a) return;
      const dur = w / speed * 1000, total = step / speed * 1000 * dir * (rev ? -1 : 1), t0 = performance.now(), start = a.currentTime || 0;
      cancelAnimationFrame(tween);
      const tick = (t) => { const p = Math.min(1, (t - t0) / 450), e = 1 - Math.pow(1 - p, 3);
        a.currentTime = (((start + total * e) % dur) + dur) % dur; if (p < 1) tween = requestAnimationFrame(tick); };
      tween = requestAnimationFrame(tick);
    };
    $(".mq-btn.prev", el).addEventListener("click", () => glide(-1));
    $(".mq-btn.next", el).addEventListener("click", () => glide(1));
  };

  $$("[data-logos]").forEach((el) => {
    const html = ordered(el.dataset.logos).map((k) => { const b = brand(k); return `<a class="logo" href="${b.link || "#"}" ${b.link ? 'target="_blank" rel="noopener"' : ""} title="${esc(b.name)}" aria-label="${esc(b.name)}">${b.logo ? `<img src="${esc(b.logo)}" alt="${esc(b.name)}">` : `<i>${esc(initials(b.name))}</i>`}</a>`; }).join("");
    if (el.classList.contains("logo-row")) loop(el, html, 26); else el.innerHTML = html;
  });

  // hero: each editing tool sits in the empty space around the photo and drifts on its own small, invisible
  // circle (own size, speed, direction) — never crossing him, never reaching the menu bar
  const TOOLS = [
    // [file, name, x %, y % of the portrait, circle radius px, seconds per lap, reverse]
    ["pr.webp",    "Premiere Pro",  26,  5, 14, 13, false],
    ["claude.svg", "Claude",        84,  7, 12, 16, true],
    ["capcut.svg", "CapCut",        -4, 17, 12, 17, true],
    ["ps.webp",    "Photoshop",     -2, 45, 15, 18, false],
    ["ae.webp",    "After Effects",103, 33, 14, 15, true]
  ];
  $$("[data-tools]").forEach((el) => el.innerHTML = TOOLS.map(([f, name, x, y, r, d, rev], i) =>
    `<span class="tool${rev ? " rev" : ""}" style="--x:${x}%;top:${y}%;--rr:${r}px;--d:${d}s;--a:${-d * (i * .23)}s"><img src="${R}assets/img/tools/${f}" alt="${name}" title="${name}"></span>`).join(""));
  // hero portrait: use the transparent cut-out when it exists, else the framed photo
  $$("[data-cutout]").forEach((img) => {
    const probe = new Image();
    probe.onload = () => { img.src = probe.src; img.closest(".portrait").classList.add("cut"); };
    probe.src = img.dataset.cutout;
  });

  $$("[data-cats]").forEach((el) => el.innerHTML = D.categories.map((c) => {
    const vids = inCat(c.key).sort(byViews);
    const pics = vids.map(thumbOf).filter(Boolean).slice(0, 3);
    const logos = [...new Set(vids.map((v) => v.c))].map(brand).filter((b) => b.logo).slice(0, 5);
    return `<a class="cat" href="${catUrl(c.key)}"><div class="strip">${pics.map((p) => `<img src="${esc(p)}" alt="" loading="lazy" onerror="this.remove()">`).join("") || '<span class="ph"></span>'}</div>
      <div class="body"><div><h3>${esc(c.title)}</h3><div class="stack">${logos.map((b) => `<img src="${esc(b.logo)}" alt="${esc(b.name)}" title="${esc(b.name)}">`).join("")}</div></div><span class="arrow" aria-hidden="true">→</span></div></a>`;
  }).join(""));

  // round icon per category (the small category switcher on every category page)
  const CAT_ICON = {
    gaming: `<svg viewBox="0 0 24 24"><path d="M7 8h10a4.5 4.5 0 0 1 4.4 5.4l-.7 3.3a2.3 2.3 0 0 1-4 1L15 16H9l-1.7 1.7a2.3 2.3 0 0 1-4-1l-.7-3.3A4.5 4.5 0 0 1 7 8z"/><path d="M8 11v3M6.5 12.5h3"/><circle cx="15.5" cy="11.5" r=".6" class="fill"/><circle cx="17" cy="13.5" r=".6" class="fill"/></svg>`,
    english: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.7 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.7-3.8-9S9.4 5.6 12 3z"/></svg>`,
    irl: `<svg viewBox="0 0 24 24"><rect x="2.5" y="7" width="13" height="10" rx="2.2"/><path d="M15.5 10.5l6-3v9l-6-3"/><circle cx="6.5" cy="10.5" r=".8" class="fill"/></svg>`,
    ads: `<svg viewBox="0 0 24 24"><path d="M3.5 10v4a1 1 0 0 0 1 1H7l7 4.5v-15L7 9H4.5a1 1 0 0 0-1 1z"/><path d="M17.5 9a4 4 0 0 1 0 6M8 15l1.2 4.5"/></svg>`,
    ugc: `<svg viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><circle cx="12" cy="10" r="2.3"/><path d="M8.8 16c.6-1.6 1.8-2.4 3.2-2.4s2.6.8 3.2 2.4"/></svg>`,
    podcast: `<svg viewBox="0 0 24 24"><rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/></svg>`,
    ai: `<svg viewBox="0 0 24 24"><path d="M11 3.5l1.6 4.4L17 9.5l-4.4 1.6L11 15.5l-1.6-4.4L5 9.5l4.4-1.6z"/><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z"/></svg>`,
    spec: `<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3"/><path d="M7.3 14.5h9.4"/></svg>`
  };

  // category page
  $$("[data-cat]").forEach((el) => {
    const k = el.dataset.cat, c = CAT[k], vids = inCat(k);
    const pins = (D.pins && D.pins[k]) || [];
    document.title = `${c.title} · ${P.brand} — ${T("Senior Video Editor", "سينيور فيديو إديتور")}`;
    // the switch under the header: short / long for most pages, or a type split (e.g. podcast / talking head / documentary)
    const ICON = {
      v: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 10v4l3.2-2z" class="fill"/></svg>`,
      h: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5.5" width="20" height="13" rx="2.5"/><path d="M10.5 9.8v4.4l3.6-2.2z" class="fill"/></svg>`,
      podcast: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/></svg>`,
      talking: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 21c.8-4 3.8-6.2 7.5-6.2s6.7 2.2 7.5 6.2"/></svg>`,
      doc: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 9h19M2.5 15h19M7 5v4M12 5v4M17 5v4M7 15v4M12 15v4M17 15v4"/></svg>`
    };
    const opts = c.split
      ? c.split.map(([key, en, ar]) => ({ key, label: T(en, ar), sub: "", list: vids.filter((v) => v.sub === key) }))
      : [{ key: "v", label: T("Short form", "فيديوهات قصيرة"), sub: "9:16", list: vids.filter((v) => v.f === "v") },
         { key: "h", label: T("Long form", "فيديوهات طويلة"), sub: "16:9", list: vids.filter((v) => v.f === "h") }];
    const count = (n) => T(`${n} video${n === 1 ? "" : "s"}`, `${n} ${n > 2 && n < 11 ? "فيديوهات" : "فيديو"}`);
    el.innerHTML = `<header class="cat-hero"><div class="cat-top rise"><a class="back" href="${H}work/" aria-label="${T("Back to all categories", "رجوع لكل الأقسام")}"><span aria-hidden="true">${AR ? "→" : "←"}</span> ${T("All categories", "كل الأقسام")}</a><span class="eyebrow">${T("Portfolio", "البورتفوليو")}</span></div><h1 class="rise d1">${esc(c.title)}</h1><p class="rise d2">${esc(c.blurb)}</p>
      <div class="cat-actions rise d3"><div class="cat-cta"><button class="btn violet" type="button" data-hire="${esc(T(`Hi Hamed, I saw your ${c.title} work and I'd like to talk about a project.`, `أهلاً حامد، شفت شغلك في ${c.title} وعايز أتكلم معاك في مشروع.`))}">${T("Book an edit", "احجز مونتاج")}</button><button class="btn" type="button" data-copy="${catUrl(k)}">${T("Copy this page link", "انسخ لينك الصفحة")}</button></div>
      <nav class="cat-dots" aria-label="${T("Other categories", "باقي الأقسام")}">${D.categories.map((x) => `<a href="${catUrl(x.key)}" aria-label="${esc(x.title)}"${x.key === k ? ' aria-current="page"' : ""}><span class="cd-ic">${CAT_ICON[x.key] || ""}</span><span class="cd-tx">${esc(x.nav || x.title)}</span></a>`).join("")}</nav></div></header>
      <div class="vbar-tools"><div class="fmt" role="tablist" aria-label="${T("Show", "اعرض")}" style="--n:${opts.length}"><span class="fmt-thumb" aria-hidden="true"></span>${opts.map((o, i) => `<button type="button" role="tab" data-o="${o.key}" data-i="${i}"${o.list.length ? "" : " disabled"}><span class="fmt-ic">${ICON[o.key] || ICON.h}</span><span class="fmt-tx"><b>${esc(o.label)}</b><small>${o.sub ? `<span dir="ltr">${o.sub}</span> · ` : ""}${count(o.list.length)}</small></span></button>`).join("")}</div>
        ${c.nosort ? "" : `<label class="sort">${T("Sort by", "رتّب حسب")} <select><option value="views">${T("Most viewed", "الأكثر مشاهدة")}</option><option value="new">${T("Newest", "الأحدث")}</option></select></label>`}</div>
      <div class="cat-vids"></div>`;
    // the switch + sort filter this page in place; pinned videos always lead; "nosort" pages keep the data.js order
    const box = $(".cat-vids", el), sel = $(".sort select", el), fmt = $(".fmt", el), btns = $$(".fmt button", el);
    const st = { o: (opts.find((o) => o.list.length) || opts[0]).key, sort: "views" };
    const byNew = (a, b) => (b.ts || 0) - (a.ts || 0) || byViews(a, b);
    const pinRank = (v) => { const i = pins.indexOf(v.ref); return i < 0 ? 1e9 : i; };
    const order = (arr) => {
      const rest = c.nosort ? [...arr] : [...arr].sort(st.sort === "new" ? byNew : byViews);
      return rest.map((v, i) => [v, i]).sort((x, y) => pinRank(x[0]) - pinRank(y[0]) || x[1] - y[1]).map((x) => x[0]);
    };
    const show = () => {
      const o = opts.find((x) => x.key === st.o);
      btns.forEach((b) => { const on = b.dataset.o === st.o; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); if (on) fmt.style.setProperty("--i", b.dataset.i); });
      const list = order(o.list);
      // a type split can hold both shapes: shorts first, then long form
      box.innerHTML = c.split ? grid([...list.filter((v) => v.f === "v"), ...list.filter((v) => v.f === "h")], "mix") : grid(list, st.o);
    };
    show();
    btns.forEach((b) => b.addEventListener("click", () => { st.o = b.dataset.o; show(); }));
    if (sel) sel.addEventListener("change", () => { st.sort = sel.value; show(); });
  });

  // Top videos page: first just two big choices (short on the left, long on the right), then the top 10 by views
  $$("[data-top]").forEach((el) => {
    const pool = (f) => { const seen = new Set(); return D.videos.filter((v) => v.f === f && v.v && !seen.has(v.ref) && seen.add(v.ref)).sort(byViews).slice(0, 10); };
    const icon = (f) => f === "v"
      ? `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="36" y="8" width="48" height="104" rx="12"/><path d="M53 47v26l21-13z"/></svg>`
      : `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="6" y="27" width="108" height="66" rx="12"/><path d="M50 46v28l24-14z"/></svg>`;
    const choice = (f, t, s) => `<a class="pick ${f}" href="#${f === "v" ? "short" : "long"}">${icon(f)}<b>${t}</b><span>${s}</span></a>`;
    const render = () => {
      const h = location.hash, f = h === "#short" ? "v" : h === "#long" ? "h" : "";
      el.innerHTML = !f ? `<div class="picks" dir="ltr">${choice("v", T("Short form", "فيديوهات قصيرة"), T("Top 10 · TikTok, Reels, Shorts", "أعلى ١٠ · تيك توك وريلز وشورتس"))}${choice("h", T("Long form", "فيديوهات طويلة"), T("Top 10 · YouTube", "أعلى ١٠ · يوتيوب"))}</div>`
        : `<div class="top-head"><a class="btn sm" href="#">${AR ? "→" : "←"} ${T("Back", "رجوع")}</a><h2 class="sub">${f === "v" ? T("Short form", "فيديوهات قصيرة") : T("Long form", "فيديوهات طويلة")} <small>${T("Top 10 by views", "أعلى ١٠ مشاهدة")}</small></h2></div>${grid(pool(f), f)}`;
    };
    render();
    addEventListener("hashchange", render);
  });

  $$("[data-quotes]").forEach((el) => { const n = +el.dataset.quotes || 99;
    const html = D.testimonials.slice(0, n).map((t) => `<blockquote class="quote"><p dir="auto">${esc(t.text)}</p><footer><img src="${esc((t.c && brand(t.c).logo) || `${R}assets/people/${t.img}`)}" alt="" onerror="this.remove()"><div><b>${esc(t.name)}</b><span>${esc(t.role)}</span></div></footer></blockquote>`).join("");
    if ("loop" in el.dataset) loop(el, html, 22); else el.innerHTML = html; });

  // voice endorsements: WhatsApp-style player. The waveform is drawn from the real audio, fills in as it plays,
  // and you can click or drag anywhere on it to jump (it starts playing from that point). Length sits right after the wave.
  const BARS = 42;
  const waveCache = {};
  const peaks = (src) => waveCache[src] || (waveCache[src] = (async () => {
    try {
      const buf = await fetch(src).then((r) => r.arrayBuffer());
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const au = await ctx.decodeAudioData(buf); ctx.close && ctx.close();
      const ch = au.getChannelData(0), n = Math.floor(ch.length / BARS), out = [];
      for (let i = 0; i < BARS; i++) { let s = 0; for (let j = i * n; j < (i + 1) * n; j += 16) s += ch[j] * ch[j]; out.push(Math.sqrt(s / (n / 16))); }
      const mx = Math.max(...out) || 1;
      return { bars: out.map((x) => .18 + .82 * Math.pow(x / mx, .8)), dur: au.duration };
    } catch (e) {   // browsers that can't decode the file still get a natural-looking wave
      let h = 0; for (const c of src) h = (h * 31 + c.charCodeAt(0)) >>> 0;
      return { bars: Array.from({ length: BARS }, (_, i) => { h = (h * 1103515245 + 12345) >>> 0; return .25 + .75 * Math.abs(Math.sin(i * .55)) * (.45 + (h % 1000) / 1800); }), dur: 0 };
    }
  })());
  const clock = (s) => { if (!isFinite(s) || s <= 0) return "0:00"; s = Math.round(s); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
  $$("[data-voices]").forEach((el) => {
    const vs = D.voice.filter((v) => v.audio); el.hidden = !vs.length;
    const vhtml = vs.map((v, i) => { const b = brand(v.c), src = `${R}assets/audio/${v.audio}`;
      return `<div class="voice" data-v="${i}"><button class="vplay" type="button" aria-label="${T("Play", "تشغيل")} ${esc(v.name)}"><img src="${esc(b.logo || `${R}assets/people/${v.img}`)}" alt=""><span class="vicon" aria-hidden="true"></span></button>
        <div class="vbody"><div class="vname"><b>${esc(v.name)}</b>${b.subs ? `<span>${fmt(b.subs)} ${SUBS}</span>` : ""}</div>
        <div class="vrow" dir="ltr"><div class="vwave" data-src="${esc(src)}" role="slider" aria-label="${T("Seek", "تقديم")}" tabindex="0" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="vw base"></div><div class="vw fill"></div><span class="vknob"></span></div>
        <span class="vtime">0:00</span></div></div><audio preload="metadata" src="${esc(src)}"></audio></div>`; }).join("");
    if ("loop" in el.dataset) loop(el, vhtml, 18); else el.innerHTML = vhtml;
    $$(".voice", el).forEach((card) => {
      const a = $("audio", card), wave = $(".vwave", card), time = $(".vtime", card);
      let dur = 0, raf = 0;
      const total = () => (isFinite(a.duration) && a.duration > 0 ? a.duration : dur);
      peaks(wave.dataset.src).then((w) => {
        const bars = w.bars.map((h) => `<i style="height:${Math.round(h * 100)}%"></i>`).join("");
        $$(".vw", wave).forEach((x) => x.innerHTML = bars);
        if (w.dur) dur = w.dur;
        if (a.paused && !a.currentTime) time.textContent = clock(total());
      });
      const paint = () => { const T0 = total(), p = T0 ? Math.min(100, a.currentTime / T0 * 100) : 0;
        wave.style.setProperty("--p", p + "%"); wave.setAttribute("aria-valuenow", Math.round(p));
        time.textContent = a.currentTime > 0 ? `${clock(a.currentTime)} / ${clock(T0)}` : clock(T0); };
      const tick = () => { paint(); if (!a.paused) raf = requestAnimationFrame(tick); };
      const play = () => { $$("audio").forEach((o) => o !== a && o.pause()); a.play(); };
      $(".vplay", card).addEventListener("click", () => a.paused ? play() : a.pause());
      a.addEventListener("play", () => { card.classList.add("on"); el.classList.add("hold"); cancelAnimationFrame(raf); tick(); });
      a.addEventListener("pause", () => { card.classList.remove("on"); cancelAnimationFrame(raf); paint(); if (!$$("audio", el).some((o) => !o.paused)) el.classList.remove("hold"); });
      a.addEventListener("loadedmetadata", paint);
      a.addEventListener("seeked", paint);
      a.addEventListener("ended", () => { a.currentTime = 0; paint(); });
      // click or drag on the wave = jump there and play from that point
      const at = (x) => { const r = wave.getBoundingClientRect(); return Math.max(0, Math.min(1, (x - r.left) / r.width)); };
      const jump = (f) => { const T0 = total(); if (!T0) return; a.currentTime = f * T0; paint(); };
      let drag = false;
      wave.addEventListener("pointerdown", (e) => { drag = true; wave.setPointerCapture(e.pointerId); jump(at(e.clientX)); });
      wave.addEventListener("pointermove", (e) => { if (drag) jump(at(e.clientX)); });
      const end = () => { if (!drag) return; drag = false; if (a.paused) play(); };
      wave.addEventListener("pointerup", end); wave.addEventListener("pointercancel", end);
      wave.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") { a.currentTime = Math.min(total(), a.currentTime + 3); paint(); }
        if (e.key === "ArrowLeft") { a.currentTime = Math.max(0, a.currentTime - 3); paint(); }
        if (e.key === " " || e.key === "Enter") { e.preventDefault(); a.paused ? play() : a.pause(); }
      });
    });
  });

  $$("[data-services]").forEach((el) => el.innerHTML = D.services.map(([t, d], i) => `<div class="service"><span class="n">0${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join(""));
  $$("[data-designs]").forEach((el) => el.innerHTML = D.designs.map((g) => `<div class="dgroup"><h2>${(g.logos || []).map(brand).filter((b) => b.logo).map((b) => `<img src="${esc(b.logo)}" alt="${esc(b.name)}">`).join("")}${esc(g.title)}</h2><div class="dgrid">${g.items.map((f, i) => `<button type="button" data-zoom="${R}assets/designs/${f}" aria-label="${esc(g.title)} ${i + 1}"><img src="${R}assets/designs/${f}" alt="${esc(g.title)} ${i + 1}" loading="lazy"></button>`).join("")}</div></div>`).join(""));
  $$("[data-timeline]").forEach((el) => el.innerHTML = D.experience.map(([w, r, o, d]) => `<div class="job"><span class="when" dir="ltr">${w}</span><div><h3>${esc(r)}</h3><span class="org">${esc(o)}</span><ul>${[].concat(d).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></div>`).join(""));
  $$("[data-skills]").forEach((el) => el.innerHTML = D.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join(""));
  // clients page: every client as a tile (logo over its own blurred colours), two views:
  // "Popular" = hand-ranked by how big the name is; "Most followers" = by audience on their main account
  $$("[data-clients]").forEach((el) => {
    const byFollowers = (keys) => [...keys].sort((a, b) => (D.brands[b][3] || 0) - (D.brands[a][3] || 0));
    const views = { popular: (w) => D.order.popular[w], followers: (w) => byFollowers(D.order.popular[w]) };
    const tile = (k, i) => { const b = brand(k), big = i < 2;
      const pic = b.logo ? `<img class="ct-logo" src="${esc(b.logo)}" alt="" loading="lazy">` : `<i class="ct-logo">${esc(initials(b.name))}</i>`;
      const inner = `${b.logo ? `<img class="ct-bg" src="${esc(b.logo)}" alt="" aria-hidden="true" loading="lazy">` : ""}<span class="ct-n" dir="ltr">${String(i + 1).padStart(2, "0")}</span>${pic}
        <span class="ct-txt"><b>${esc(b.name)}</b>${b.subs ? `<span>${audience(b)}</span>` : ""}</span>`;
      const attrs = `class="ctile${big ? " big" : ""}" style="--i:${i}"`;
      return b.link ? `<a ${attrs} href="${esc(b.link)}" target="_blank" rel="noopener" aria-label="${esc(b.name)}">${inner}</a>` : `<div ${attrs}>${inner}</div>`; };
    el.innerHTML = `<div class="ct-bar"><div class="seg" role="group" aria-label="${T("Sort clients", "ترتيب العملاء")}"><button type="button" data-view="popular" class="on" aria-pressed="true">${T("Popular", "الأشهر")}</button><button type="button" data-view="followers" aria-pressed="false">${T("Most followers", "الأكثر متابعين")}</button></div>
      <p class="muted ct-note">${T("Ranked by how well-known each name is in the industry.", "مترتبين حسب شهرة كل اسم في المجال.")}</p></div>
      <h2 class="sub">${T("Brands", "البراندات")} <small>${D.order.popular.companies.length}</small></h2><div class="ctiles" data-w="companies"></div>
      <h2 class="sub">${T("Content creators", "صناع المحتوى")} <small>${D.order.popular.creators.length}</small></h2><div class="ctiles" data-w="creators"></div>`;
    const note = $(".ct-note", el);
    const show = (v) => {
      $$(".ctiles", el).forEach((g) => g.innerHTML = views[v](g.dataset.w).filter((k) => D.brands[k]).map(tile).join(""));
      $$(".ct-bar button", el).forEach((b) => { const on = b.dataset.view === v; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
      note.textContent = v === "popular" ? T("Ranked by how well-known each name is in the industry.", "مترتبين حسب شهرة كل اسم في المجال.")
        : T("Ranked by followers / subscribers on their main official account.", "مترتبين حسب عدد المتابعين أو المشتركين على الحساب الرسمي الأساسي.");
    };
    $$(".ct-bar button", el).forEach((b) => b.addEventListener("click", () => show(b.dataset.view)));
    show("popular");
  });
  $$("[data-brandgrid]").forEach((el) => {
    const keys = el.dataset.brandgrid === "creators" ? D.order.creators : D.order.companies;
    el.innerHTML = keys.filter((k) => D.brands[k]).map((k) => { const b = brand(k);
      const inner = `${b.logo ? `<img src="${esc(b.logo)}" alt="">` : `<i>${esc(initials(b.name))}</i>`}<b>${esc(b.name)}</b>${b.subs ? `<span>${audience(b)}</span>` : ""}`;
      return b.link ? `<a class="brandcard" href="${b.link}" target="_blank" rel="noopener">${inner}</a>` : `<div class="brandcard">${inner}</div>`; }).join("");
  });
})();
