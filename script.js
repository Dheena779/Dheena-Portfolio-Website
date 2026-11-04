/* =========================================================
   EDIT YOUR CONTENT HERE. The page builds itself from this.
   ========================================================= */

// Add your photos and films here when you have them.
// Put the files in a "media" folder next to index.html.
const MEDIA = {
  photos: [
    // { src: "media/photo-1.jpg", alt: "Describe the photo" },
  ],
  reels: [
    { src: "media/Ustad%20Hotel.mov", poster: "media/Ustad%20Hotel.png", title: "Ustad Hotel" },
  ],
};

const socials = [
  { icon: "github", name: "GitHub", handle: "Dheena779", url: "https://github.com/Dheena779" },
  { icon: "linkedin", name: "LinkedIn", handle: "dheenadhayalan779", url: "https://www.linkedin.com/in/dheenadhayalan779/" },
  { icon: "instagram", name: "Instagram", handle: "@dheee.779", url: "https://www.instagram.com/dheee.779" },
  { icon: "youtube", name: "YouTube", handle: "@dheee_vlogs", url: "https://www.youtube.com/@dheee_vlogs" },
];

const marquee = [
  "Site Reliability Engineering", "AWS", "Observability", "Incident Management", "Root Cause Analysis",
  "Grafana", "Datadog", "Coralogix", "CloudWatch", "CI/CD", "Terraform", "Ansible", "Python", "Bash",
  "SIEM", "AWS WAF", "Photography", "Videography", "Cinema",
];

const awsPath = [
  { ico: "R53", name: "Route 53", tag: "DNS", text: "DNS and traffic routing, where every request begins. I look here first when viewers cannot reach a service." },
  { ico: "CDN", name: "CDN", tag: "Delivery", text: "Content delivery close to the viewer. I track CDN health in real time so playback stays smooth for millions of users." },
  { ico: "WAF", name: "AWS WAF", tag: "Security", text: "Web application firewall rules in front of the platform. I review the rules to keep the platform protected and compliant." },
  { ico: "ELB", name: "ELB / ALB", tag: "Load balancing", text: "Load balancers spread traffic across servers. I watch their health and latency, and rely on them when traffic spikes." },
  { ico: "EC2", name: "EC2 + Auto Scaling", tag: "Compute", text: "The application servers. During high-concurrency events I scale instances manually and with Auto Scaling, keeping API responses under 500 ms at 3 to 5 times normal traffic." },
  { ico: "RDS", name: "RDS", tag: "Database", text: "The managed databases behind the APIs. I monitor RDS health so anomalies are detected early and mean time to detect stays low." },
];
const awsSupport = [
  { ico: "CW", name: "CloudWatch", tag: "Monitoring", text: "Metrics, logs and alarms that feed the Grafana and Datadog dashboards my team watches during incidents." },
  { ico: "VPC", name: "VPC", tag: "Networking", text: "The private network boundary that holds the environment together." },
  { ico: "S3", name: "S3", tag: "Storage", text: "Object storage for assets and files used across the platform." },
  { ico: "IAM", name: "IAM", tag: "Access", text: "Role audits and access reviews so every service and person has only the access they need." },
  { ico: "TLS", name: "SSL / TLS", tag: "Certificates", text: "Certificate renewals handled ahead of time, with no expiry incidents across production services." },
];

const expTabs = [
  { title: "Production monitoring & observability", sub: "See problems first", bullets: [
    "Monitored AWS production infrastructure for a high-traffic OTT platform serving millions of concurrent users, tracking <b>EC2, RDS, ELB and CDN health</b> in real time with Grafana, Datadog, Coralogix and CloudWatch, which reduced mean time to detect (MTTD).",
    "Tuned alert thresholds for API errors, latency and infrastructure anomalies using historical baselines in Datadog, cutting <b>false-positive alert noise by about 40%</b> and speeding up P1 triage.",
    "Built and maintained real-time dashboards for traffic patterns, API success rates and infrastructure metrics, giving engineering teams a single view of production health and informal SLI tracking.",
  ]},
  { title: "Incident management & reliability", sub: "Fix fast, learn faster", bullets: [
    "Led end-to-end incident triage for production outages. Queried Coralogix and Datadog logs to find the root cause, coordinated with Dev and QA, and delivered <b>RCA and postmortem documents</b> that reduced mean time to resolve (MTTR) for recurring failures.",
    "Diagnosed playback failures, subscription flow breaks and API latency spikes by correlating logs with player metrics such as buffering, bitrate and stream quality, enabling hotfixes that restored service <b>within SLA windows</b>.",
    "Escalated critical application bugs with structured evidence (log excerpts, trace IDs and timelines), speeding up fix validation across deployment sprints.",
  ]},
  { title: "Deployment, automation & infrastructure", sub: "Safe releases at scale", bullets: [
    "Supported hotfix and release deployments as the on-call SRE, running post-deployment sanity checks on API responses, login flows, player functionality and subscription services for <b>zero-regression go-lives</b>.",
    "Scaled EC2 instances manually and with Auto Scaling during high-concurrency streaming events such as ACC 2025 cricket, keeping API response times <b>under 500 ms</b> through traffic spikes of 3 to 5 times baseline, and contributed to capacity planning for future peaks.",
    "Managed SSL certificate renewals, IAM role audits and AWS WAF rule reviews, maintaining compliance and eliminating certificate expiry incidents across production services.",
  ]},
];

const layers = [
  { t: "Firewall", d: "Decides which traffic may reach the network and services in the first place." },
  { t: "Web application firewall", d: "Filters malicious web requests. I review AWS WAF rules to keep them current and effective." },
  { t: "Identity and certificates", d: "IAM role audits and SSL/TLS certificate renewals, so access stays tight and nothing expires unnoticed." },
  { t: "Endpoint detection and response", d: "Watching endpoints for suspicious behaviour and responding when something looks wrong." },
  { t: "SIEM and security monitoring", d: "Log pipelines, source integrations and alert monitoring from SOC operations, turning raw logs into signals." },
];

const projects = [
  { name: "Billora", tag: "Billing software", desc: "A billing application for shops and small businesses, available as an offline edition and a cloud edition.",
    chips: ["Offline edition", "Cloud edition", "Invoicing"], url: "https://dheena-billing.onrender.com/", host: "dheena-billing.onrender.com", c1: "#1e3a5f", c2: "#5eead4" },
  { name: "Shastik Studio", tag: "E-commerce", desc: "An online store for the Shastik Studio saree brand, where customers browse collections and order sarees online.",
    chips: ["Saree store", "Online ordering", "Brand website"], url: "https://dheenaproject.duckdns.org/", host: "dheenaproject.duckdns.org", c1: "#4a1f3d", c2: "#ff6b9d" },
  { name: "Swathi's Kitchen", tag: "Food ordering", desc: "An online food ordering service where customers pick dishes from the menu and place an order in a few taps.",
    chips: ["Menu", "Online orders", "Mobile friendly"], url: "https://swathi-kitchen.vercel.app/", host: "swathi-kitchen.vercel.app", c1: "#5a3412", c2: "#ffb86b" },
  { name: "VA Testing Tool", tag: "Security", desc: "A vulnerability assessment tool. Upload an environment JSON file, get it checked against the NIST library, then see a score and a generated report.",
    chips: ["NIST library", "Risk scoring", "Report generation"], url: "", host: "see how it works below", c1: "#0e3b3a", c2: "#7dd87a", scrollTo: "#scanner" },
];
const scanFlow = [
  { t: "Upload", d: "Drop in the environment file in JSON format." },
  { t: "Analyse", d: "Every component and version is read and listed." },
  { t: "Check against NIST", d: "Each one is matched with the official NIST library." },
  { t: "Score", d: "Findings are rated by severity into one risk score." },
  { t: "Report", d: "A clear report is generated, ready to share." },
];
// Sample numbers for the visual preview only (not real scan data).
const scanSample = { score: 7.4, severity: [
  { name: "Critical", n: 3, max: 12, color: "#ff6b8b" }, { name: "High", n: 8, max: 12, color: "#ff9a5b" },
  { name: "Medium", n: 11, max: 12, color: "#ffb86b" }, { name: "Low", n: 5, max: 12, color: "#5eead4" } ] };

// Vibe coding lines (my own words, edit freely)
const quotes = [
  "Describe the idea clearly. The rest is iteration.",
  "AI writes the first draft. I make the decisions.",
  "Ship it small, watch it run, then make it better.",
  "If it cannot be monitored, it is not finished.",
];

const lifestyle = [
  { t: "Learn by doing", d: "I picked up cyber security on real projects, not only in theory." },
  { t: "Calm under pressure", d: "Being on call for a live platform taught me to stay steady when it matters." },
  { t: "Create and share", d: "Photos, vlogs and edits go out on YouTube and Instagram." },
  { t: "Build with AI", d: "Ideas become working apps quickly, and I keep shipping." },
];

const hobbies = [
  { icon: "film", t: "Filmmaking", d: "Planning, shooting and shaping a story from the first frame." },
  { icon: "video", t: "Videography", d: "Capturing moments and cutting them into edits worth watching." },
  { icon: "book", t: "Storytelling", d: "Scripts and scenes where every beat has a reason." },
  { icon: "camera", t: "Photography", d: "Light, timing and the detail most people walk past." },
  { icon: "code", t: "Developing applications", d: "Billing, e-commerce, food ordering and security tools of my own." },
  { icon: "compass", t: "Travelling", d: "New places, new light and stories to bring back." },
];

const interests = ["Cinema", "Script writing", "Video editing", "YouTube", "Vibe coding", "Cyber security", "Cloud and AWS", "Automation", "Observability"];

const ICON = {
  film: '<path d="M3 10h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M3 10l2-6 4 1.2L7 10M9 10l2-5 4 1.2L13 10M15 10l2-5 4 1.2L20 10"/>',
  video: '<rect x="2.5" y="6" width="13" height="12" rx="3"/><path d="M15.5 10.5l6-3.5v10l-6-3.5"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8.5 7.5h7M8.5 11h7"/>',
  camera: '<rect x="3" y="7" width="18" height="13" rx="3"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>',
  code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  github: '<circle cx="6" cy="5.5" r="2.2"/><circle cx="6" cy="18.5" r="2.2"/><circle cx="18" cy="9" r="2.2"/><path d="M6 7.7v8.6M18 11.2c0 3-3 3.6-9.6 5"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="4.5"/><path d="M8 11v6M8 7.6v.01M12 17v-6M12 13.5c0-1.5 1-2.5 2.5-2.5S17 12 17 13.5V17"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.2l5 2.8-5 2.8z"/>',
};
const svg = k => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = matchMedia("(hover: hover)").matches;

/* ---------- build content ---------- */
$("#year").textContent = new Date().getFullYear();
$("#marquee").innerHTML = [...marquee, ...marquee].map(t => `<span>${t}</span>`).join("");
$$(".draw").forEach(p => p.setAttribute("pathLength", "1"));

// socials
$("#socials").innerHTML = socials.map(s =>
  `<a class="net glow rv" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}: ${s.handle}">
     <span class="net-ico">${svg(s.icon)}</span>
     <span><small>${s.name}</small><strong>${s.handle}</strong></span>
     <span class="arrow" aria-hidden="true"></span></a>`).join("");

// AWS request path
const flow = $("#awsFlow"), support = $("#awsSupport"), detail = $("#awsDetail");
const nodeBtn = n => { const b = el("button", "node", `<span class="ico">${n.ico}</span><b>${n.name}</b>`); b.type = "button"; b.addEventListener("click", () => selectAws(n, b)); return b; };
function selectAws(n, btn) {
  $$(".node.sel").forEach(x => x.classList.remove("sel")); btn.classList.add("sel");
  detail.innerHTML = `<h4>${n.name} <small>${n.tag}</small></h4><p>${n.text}</p>`;
  detail.classList.remove("swap"); void detail.offsetWidth; detail.classList.add("swap");
}
awsPath.forEach(n => { const li = el("li"); li.append(nodeBtn(n)); flow.append(li); });
awsSupport.forEach(n => support.append(nodeBtn(n)));
selectAws(awsPath[4], $$(".node", flow)[4]);

// Experience tabs
const tabsEl = $("#expTabs"), expPanel = $("#expPanel");
function showExp(i) {
  $$(".tab", tabsEl).forEach((t, k) => t.setAttribute("aria-selected", k === i));
  const x = expTabs[i];
  expPanel.innerHTML = `<h3>${x.title}</h3><ul>${x.bullets.map((b, k) => `<li style="--i:${k}">${b}</li>`).join("")}</ul>`;
}
expTabs.forEach((x, i) => {
  const b = el("button", "tab", `${x.title}<small>${x.sub}</small>`);
  b.type = "button"; b.setAttribute("role", "tab"); b.addEventListener("click", () => showExp(i)); tabsEl.append(b);
});
showExp(0);

// Security layers
const layersEl = $("#layers");
layers.forEach(l => layersEl.append(el("li", "layer glow rv", `<h3>${l.t}</h3><p>${l.d}</p>`)));
const setDrop = () => layersEl.style.setProperty("--h", Math.max(0, layersEl.offsetHeight - 40) + "px");
setDrop(); addEventListener("resize", setDrop);

// Projects
const cards = $("#cards");
projects.forEach(p => {
  const live = !!p.url, a = el("a", "card rv");
  a.href = live ? p.url : p.scrollTo;
  if (live) { a.target = "_blank"; a.rel = "noopener"; }
  a.setAttribute("aria-label", live ? `${p.name}, open the live site` : `${p.name}, see how it works`);
  a.innerHTML = `<div class="card-in">
    <div class="shot" style="--c1:${p.c1};--c2:${p.c2}"><div class="win">
      <div class="win-bar"><i></i><i></i><i></i><em>${p.host}</em></div>
      <div class="win-body"><b></b><b></b><b></b><b></b><b></b><b></b></div></div></div>
    <div class="card-body">
      <div class="tags"><span class="tag">${p.tag}</span><span class="tag ai">Built with AI support</span></div>
      <h3>${p.name}</h3><p>${p.desc}</p>
      <ul class="chips">${p.chips.map(c => `<li>${c}</li>`).join("")}</ul>
      <span class="visit">${live ? "Open live site" : "See how it works"}</span></div></div>`;
  cards.append(a);
});
$("#steps").innerHTML = scanFlow.map(s => `<li><b>${s.t}</b><span>${s.d}</span></li>`).join("");
$("#sev").innerHTML = scanSample.severity.map(s =>
  `<li><span>${s.name}</span><div class="bar"><i style="--c:${s.color}" data-w="${(s.n / s.max) * 100}"></i></div><em>${s.n}</em></li>`).join("");

// Vibe coding, lifestyle, hobbies, interests
$("#quotes").innerHTML = quotes.map(q => `<figure class="quote glow rv"><span class="qm" aria-hidden="true">\u201C</span><blockquote>${q}</blockquote><figcaption>Vibe coding</figcaption></figure>`).join("");
$("#lifestyle").innerHTML = lifestyle.map(l => `<article class="tile glow rv"><h3>${l.t}</h3><p>${l.d}</p></article>`).join("");
$("#hobbies").innerHTML = hobbies.map(h => `<article class="hobby glow rv"><span class="hobby-ico">${svg(h.icon)}</span><h3>${h.t}</h3><p>${h.d}</p></article>`).join("");
$("#interests").innerHTML = interests.map(i => `<li>${i}</li>`).join("");

// Gallery + films
const gallery = $("#gallery"), reels = $("#reels"), lb = $("#lightbox"), lbImg = $("#lbImg");
const slots = Math.max(MEDIA.photos.length, 6);
for (let i = 0; i < slots; i++) {
  const ph = MEDIA.photos[i];
  if (ph) { const b = el("button", "ph rv", `<img src="${ph.src}" alt="${ph.alt || "Photograph"}" loading="lazy">`); b.type = "button"; b.setAttribute("aria-label", "Open photo"); b.addEventListener("click", () => { lbImg.src = ph.src; lbImg.alt = ph.alt || ""; lb.hidden = false; $("#lbClose").focus(); }); gallery.append(b); }
  else gallery.append(el("div", "ph empty rv", "<span>Photograph coming soon</span>"));
}
const closeLb = () => { lb.hidden = true; lbImg.removeAttribute("src"); };
$("#lbClose").addEventListener("click", closeLb); lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeLb(); });
if (MEDIA.reels.length) MEDIA.reels.forEach(r => {
  const box = el("div", "reel rv");
  box.innerHTML = r.youtube
    ? `<iframe src="https://www.youtube-nocookie.com/embed/${r.youtube}" title="${r.title || "Film"}" loading="lazy" allowfullscreen></iframe>`
    : `<video src="${r.src}" ${r.poster ? `poster="${r.poster}"` : ""} controls preload="none" playsinline aria-label="${r.title || "Videography footage"}"></video>`;
  reels.append(box);
});
else for (let i = 0; i < 2; i++) reels.append(el("div", "reel empty rv", "<span>Film coming soon</span>"));

/* ---------- the name: Dheee becomes Dheena Dhayalan on hover ---------- */
const name = $("#heroName"), rest = $("#nmRest"), hint = $("#nameHint");
rest.innerHTML = [...("na Dhayalan")].map((c, i) => `<span class="ch" style="--i:${i}">${c === " " ? "&nbsp;" : c}</span>`).join("");
const st = { hover: false, pin: false };
const syncName = () => {
  const open = st.hover || st.pin;
  name.classList.toggle("open", open);
  hint.textContent = open ? "Dheena Dhayalan" : (canHover ? "Hover over the name" : "Tap the name");
};
syncName();
if (canHover) {
  name.addEventListener("pointerenter", () => { st.hover = true; syncName(); });
  name.addEventListener("pointerleave", () => { st.hover = false; syncName(); });
}
name.addEventListener("focus", () => { st.hover = true; syncName(); });
name.addEventListener("blur", () => { st.hover = false; syncName(); });
name.addEventListener("click", () => { st.pin = !st.pin; syncName(); });
name.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); st.pin = !st.pin; syncName(); } });

/* ---------- the two boxes and their drawers ---------- */
const drawers = { career: $("#drawerCareer"), personal: $("#drawerPersonal") };
const boxes = { career: $("#boxCareer"), personal: $("#boxPersonal") };
let openKey = null, current = "";
const spyKey = id => (id === "explore" ? openKey : id);

function showDrawer(key, { scroll = true } = {}) {
  const switching = key && openKey && key !== openKey;
  Object.keys(drawers).forEach(k => {
    const d = drawers[k], on = k === key;
    if (switching && !on) { d.classList.add("instant"); setTimeout(() => d.classList.remove("instant"), 80); }
    d.classList.toggle("open", on);
    boxes[k].classList.toggle("active", on);
    $(".path-btn", boxes[k]).setAttribute("aria-expanded", on);
  });
  openKey = key;
  setDrop();
  movePill(key || spyKey(current));
  if (!scroll) return;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const target = key ? drawers[key] : $(".duo");
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }));
}
Object.entries(boxes).forEach(([key, box]) => {
  box.addEventListener("click", e => { if (e.target.closest("a")) return; showDrawer(openKey === key ? null : key, { scroll: openKey !== key }); });
});
$$("[data-close]").forEach(b => b.addEventListener("click", () => showDrawer(null)));
$$("[data-open]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); showDrawer(a.dataset.open); setMenu(false); }));
// the scanner card links to the scanner block inside the personal drawer
$$('a.card[href="#scanner"]').forEach(a => a.addEventListener("click", e => { e.preventDefault(); $("#scanner").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }); }));

/* ---------- scroll: progress, nav state, scroll-spy pill ---------- */
const nav = $("#nav"), bar = $("#progress"), pill = $("#pill");
const spyLinks = $$("[data-spy]");
function movePill(key) {
  const a = spyLinks.find(l => l.dataset.spy === key);
  spyLinks.forEach(l => l.classList.toggle("active", l === a));
  if (!a) { pill.classList.remove("on"); return; }
  pill.style.setProperty("--x", a.offsetLeft + "px"); pill.style.setProperty("--w", a.offsetWidth + "px");
  pill.style.setProperty("--y", a.offsetTop + "px"); pill.style.setProperty("--h", a.offsetHeight + "px");
  pill.classList.add("on");
}
const onScroll = () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`;
  nav.classList.toggle("scrolled", scrollY > 24);
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { current = e.target.id; movePill(spyKey(current)); } }), { rootMargin: "-45% 0px -50% 0px" });
$$("[data-section]").forEach(s => spy.observe(s));
addEventListener("resize", () => movePill(spyKey(current)));
document.fonts && document.fonts.ready.then(() => movePill(spyKey(current)));

// mobile menu
const burger = $("#burger");
function setMenu(open) { nav.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); if (open) requestAnimationFrame(() => movePill(spyKey(current))); }
burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
$$("#menu a").forEach(a => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// open from a link such as index.html#career
const hash = location.hash.slice(1);
if (drawers[hash]) setTimeout(() => showDrawer(hash), 350);

/* ---------- reveals, counters, charts ---------- */
$$(".rv").forEach(x => { const sibs = [...x.parentElement.children].filter(c => c.classList.contains("rv")); x.style.setProperty("--d", Math.min(sibs.indexOf(x), 6)); });
const revealIO = "IntersectionObserver" in window ? new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); o.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -6% 0px" }) : null;
$$(".rv").forEach(x => revealIO ? revealIO.observe(x) : x.classList.add("in"));
$(".panel").classList.add("in");

function countUp(node) {
  const to = +node.dataset.count, suf = node.dataset.suffix || "", dur = reduce ? 0 : 1500; let s = null;
  requestAnimationFrame(function f(now) {
    if (s === null) s = now;
    const k = dur ? Math.min(1, Math.max(0, (now - s) / dur)) : 1;
    node.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf;
    if (k < 1) requestAnimationFrame(f);
  });
}
setTimeout(() => $$("[data-count]").forEach(countUp), 500);

/* ---------- scanner preview ---------- */
const gFill = $("#gFill"), gNum = $("#gNum");
function runScan() {
  gFill.style.strokeDashoffset = 101; gNum.textContent = "0.0";
  $$(".sev .bar i").forEach(i => i.style.width = "0");
  requestAnimationFrame(() => requestAnimationFrame(() => {
    gFill.style.strokeDashoffset = 100 - scanSample.score * 10;
    $$(".sev .bar i").forEach(i => i.style.width = i.dataset.w + "%");
    const dur = reduce ? 0 : 1800; let s = null;
    requestAnimationFrame(function f(now) {
      if (s === null) s = now;
      const k = dur ? Math.min(1, Math.max(0, (now - s) / dur)) : 1;
      gNum.textContent = (scanSample.score * (1 - Math.pow(1 - k, 3))).toFixed(1);
      if (k < 1) requestAnimationFrame(f);
    });
  }));
}
new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { runScan(); o.disconnect(); } }, { threshold: .4 }).observe($(".report"));
$("#rescan").addEventListener("click", runScan);

/* ---------- pointer effects: glow, magnetic buttons, card tilt ---------- */
if (canHover) {
  document.addEventListener("pointermove", e => {
    const g = e.target.closest(".glow"); if (!g) return;
    const r = g.getBoundingClientRect(); g.style.setProperty("--mx", (e.clientX - r.left) + "px"); g.style.setProperty("--my", (e.clientY - r.top) + "px");
  });
  if (!reduce) {
    $$(".magnetic").forEach(b => {
      b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`; });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
    const heroPanel = $(".panel");
    if (heroPanel) {
      heroPanel.addEventListener("pointermove", e => {
        const r = heroPanel.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        heroPanel.style.transform = `perspective(1100px) rotateY(${px * 3.5}deg) rotateX(${-py * 3.5}deg) translateY(-2px)`;
      });
      heroPanel.addEventListener("pointerleave", () => { heroPanel.style.transform = ""; });
    }
    $$(".card").forEach(c => {
      const inner = c.firstElementChild;
      c.addEventListener("pointermove", e => { const b = c.getBoundingClientRect(); const px = (e.clientX - b.left) / b.width - .5, py = (e.clientY - b.top) / b.height - .5; inner.style.transform = `rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`; });
      c.addEventListener("pointerleave", () => { inner.style.transform = ""; });
    });
  }
}
