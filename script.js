/* ═══════════════════════════════════════════
   AYUSH RAJ — MODERN PORTFOLIO SCRIPT 2025
═══════════════════════════════════════════ */

/* ── EMAILJS ── */
emailjs.init("6-g3zqSXuH6XNfiFs");

/* ── LOADER ── */
document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {                          
  const loader = document.getElementById("loader");

    document.body.classList.remove("loading");

     loader.style.pointerEvents = "none";
    loader.classList.add("hide");
  
  setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 850);
  }, 1600);
});

/* ── CUSTOM CURSOR ── */
const cur  = document.getElementById("cur");
const curR = document.getElementById("curR");
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener("mousemove", e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + "px";
  cur.style.top  = my + "px";
});

(function animRing() {
  rx += (mx - rx) * .13;
  ry += (my - ry) * .13;
  curR.style.left = rx + "px";
  curR.style.top  = ry + "px";
  requestAnimationFrame(animRing);
})();

document.querySelectorAll("a, button, .pc, .bcard, .flt, .pill").forEach(el => {
  el.addEventListener("mouseenter", () => {
    curR.style.width  = "58px";
    curR.style.height = "58px";
    curR.style.borderColor = "rgba(192,132,252,.9)";
    cur.style.opacity = "0";
  });
  el.addEventListener("mouseleave", () => {
    curR.style.width  = "36px";
    curR.style.height = "36px";
    curR.style.borderColor = "rgba(192,132,252,.55)";
    cur.style.opacity = "1";
  });
});

if (window.innerWidth < 960) {
  cur.style.display  = "none";
  curR.style.display = "none";
}

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 80);
  updateActiveNav();
});

/* ── MOBILE NAV ── */
const menuToggle = document.getElementById("menuToggle");
const mainNav    = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  menuToggle.textContent = mainNav.classList.contains("open") ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

/* ── ACTIVE NAV ── */
const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll("nav a[href^='#']");

function updateActiveNav() {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 220) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}

/* ── TYPING EFFECT ── */
const roles = [
  "Premium Web Builder",
  "Frontend Developer",
  "Creative Coder",
  "UI Craftsman",
  "Visual Designer"
];

let ri = 0;
let ci = 0;
let deleting = false;

const typEl = document.getElementById("typing-text");

function type() {
  const word = roles[ri];

  if (!deleting) {
    ci++;
    typEl.textContent = word.substring(0, ci);

    if (ci >= word.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    ci--;
    typEl.textContent = word.substring(0, ci);

    if (ci <= 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? 40 : 90);
}

type();

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); } });
}, { threshold: 0.08 });
reveals.forEach(r => revealObserver.observe(r));

/* ── SKILL BAR ANIMATION ── */
const skillFills = document.querySelectorAll(".skill-bar-fill");
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("go"); } });
}, { threshold: 0.3 });
skillFills.forEach(f => skillObserver.observe(f));

/* ── MUSIC ── */
const musicBtn = document.getElementById("musicBtn");
const bgMusic  = document.getElementById("bgMusic");
let playing = false;

musicBtn.addEventListener("click", () => {
  if (playing) { bgMusic.pause(); musicBtn.textContent = "🎵"; }
  else         { bgMusic.play(); musicBtn.textContent  = "⏸"; }
  playing = !playing;
});

/* ── PROJECT FILTERS ── */
const filterBtns  = document.querySelectorAll(".flt");
const projectCards = document.querySelectorAll(".pc");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    projectCards.forEach(card => {
      const show = f === "all" || card.dataset.category === f;
      card.style.opacity    = show ? "1" : "0";
      card.style.transform  = show ? "" : "scale(.95)";
      card.style.pointerEvents = show ? "auto" : "none";
      card.style.transition = ".35s ease";
      setTimeout(() => { card.style.display = show ? "block" : "none"; }, show ? 0 : 350);
      if (show) { setTimeout(() => { card.style.opacity = "1"; card.style.transform = ""; }, 10); }
    });
  });
});

/* ── PROJECT MODAL ── */
const modalOverlay = document.getElementById("modalOverlay");
const modalClose   = document.getElementById("modalClose");

function openModal(title, desc, img, tags, live, git, theme) {
  document.getElementById("mTitle").textContent = title;
  document.getElementById("mDesc").textContent  = desc;
  document.getElementById("mImg").src           = img;
  document.getElementById("mLive").href         = live;
  document.getElementById("mGit").href          = git;

  const tagsEl = document.getElementById("mTags");
  tagsEl.innerHTML = "";
  tags.forEach(t => { const s = document.createElement("span"); s.textContent = t; tagsEl.appendChild(s); });

  modalOverlay.className = "modal-overlay active theme-" + theme;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ── CONTACT FORM ── */
const contactForm = document.getElementById("contactForm");
const sendBtn     = document.getElementById("sendBtn");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  sendBtn.textContent = "Sending...";
  sendBtn.disabled = true;

  emailjs.send("service_1521", "template_at8p2wr", {
    from_name:  document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message:    document.getElementById("message").value
  })
  .then(() => {
    showToast("Message sent successfully 🚀");
    contactForm.reset();
  })
  .catch(() => showToast("Failed — try emailing directly 😭"))
  .finally(() => { sendBtn.textContent = "Send Message ⚡"; sendBtn.disabled = false; });
});

/* ── TOAST ── */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3500);
}

/* ── 3D CARD TILT ── */
document.querySelectorAll(".pc").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r  = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top  - r.height / 2) / 22) * -1;
    const ry =  (e.clientX - r.left - r.width  / 2) / 22;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });
});

/* ═══════════════════════════════════════════════════════════
   FEATURE 1 — AI PORTFOLIO ASSISTANT
═══════════════════════════════════════════════════════════ */

const AI_KB = {
  greet: ["hello","hi","hey","hola","good morning","good evening","what's up","sup"],
  nebulabeat: ["nebulabeat","nebula beat","nebula","galaxy visualizer","music visualizer","webrtc project"],
  apexdrive: ["apexdrive","apex drive","apex","car","hypercar","speedometer"],
  aurum: ["aurum","aurum suite","calculator","currency","utility","suite"],
  skills: ["skill","skills","what can you do","what do you know","technologies","stack","tech stack","expertise","frontend","html","css","javascript","js","github","pwa","webrtc","canvas"],
  projects: ["project","projects","portfolio","work","built","shipped","show me","what have you","what did you"],
  contact: ["contact","email","reach","hire","work together","collaborate","freelance","available","availability","dm","message","talk"],
  experience: ["experience","how long","years","learning","how much","background"],
  about: ["who","about","tell me","introduce","yourself","ayush","biography"],
};

const AI_RESPONSES = {
  greet: `Hey there! 👋 I'm Ayush's AI assistant. Ask me about his projects, skills, or how to get in touch. You can also use the suggestion buttons below!`,
  nebulabeat: `🌌 **NebulaBeat** is Ayush's flagship project — a real-time galaxy music visualizer!\n\nDrop a song and watch a particle-physics galaxy react to the beat. Features include:\n\n✓ WebRTC peer-to-peer audio sharing\n✓ AI genre detection (auto-changes theme)\n✓ Live multiplayer sync rooms via QR code\n✓ 3-band Audio EQ\n✓ Highlight auto-capture on beat drops\n✓ PWA installable\n\nBuilt 100% in vanilla JS — no frameworks.\n🔗 Live: ayushrajfrontend.github.io/NebulaBeat/`,
  apexdrive: `🚗 **ApexDrive** is a cinematic hypercar showcase that feels like stepping into a luxury showroom.\n\nFeatures:\n✓ Cinematic UI animations\n✓ Live speedometer\n✓ Engine startup audio FX\n✓ Fully responsive luxury design\n\nBuilt with pure HTML, CSS, and JavaScript — zero frameworks.\n🔗 Live: ayushrajfrontend.github.io/ApexDrive/`,
  aurum: `⚗️ **Aurum Suite** is a premium utility web app — one app to replace five online tools.\n\nFeatures:\n✓ Smart calculator\n✓ Live currency exchange via API\n✓ Unit converter\n✓ PWA — fully installable offline\n\n🔗 Live: ayushrajfrontend.github.io/aurum-suite/`,
  skills: `⚡ Here's Ayush's skill set — every one used in a shipped project:\n\n🔷 **HTML5** — Advanced (used in all 3 projects)\n🔷 **CSS3** — Advanced (animations, glassmorphism, responsive)\n🔷 **JavaScript** — Intermediate (Web Audio API, WebRTC, Canvas)\n🔷 **GitHub** — Intermediate (version control, GitHub Pages)\n🔷 **PWA** — Real-world implementation in NebulaBeat + Aurum\n🔷 **WebRTC** — Live audio sharing in NebulaBeat\n🔷 **Canvas API** — Particle physics in NebulaBeat`,
  projects: `🚀 Ayush has shipped 3 live projects:\n\n1. 🌌 **NebulaBeat** — Real-time galaxy music visualizer with WebRTC, AI, and multiplayer rooms\n\n2. 🚗 **ApexDrive** — Cinematic hypercar showcase with premium animations\n\n3. ⚗️ **Aurum Suite** — Premium utility app with live currency exchange + PWA\n\nAll deployed on GitHub Pages, all accessible right now. Want details on any of them?`,
  contact: `📬 You can reach Ayush through:\n\n📧 **Email:** ayushraj.frontend@gmail.com\n💬 **Discord:** discord.com/users/791356542574264361\n📸 **Instagram:** @sanatani_ayush20\n💻 **GitHub:** github.com/AyushRajFrontend\n\nHe replies within 24 hours. Feel free to scroll down to the contact form too!`,
  experience: `📚 Ayush has been learning frontend development for **1+ year**, but every skill has been applied in a real, shipped, live project — not just tutorials.\n\nHe believes: *"A week of building beats a month of watching courses."*`,
  about: `👨‍💻 I'm Ayush Raj — a Frontend Developer from India who believes great websites are *felt*, not just used.\n\nI craft visually sharp, performant interfaces that prioritise:\n✓ Clean code\n✓ Modern aesthetics\n✓ Smooth user experiences\n✓ Real, shipped products\n\nCurrently open to freelance projects, collaborations, and part-time work. ⚡`,
  fallback: `Hmm, I'm not sure about that one! 🤔 Try asking about:\n\n• My projects (NebulaBeat, ApexDrive, Aurum Suite)\n• My skills (HTML, CSS, JS, WebRTC…)\n• How to contact me\n• My experience`,
};

function aiGetResponse(q) {
  const lower = q.toLowerCase().trim();
  for (const [key, patterns] of Object.entries(AI_KB)) {
    if (patterns.some(p => lower.includes(p))) {
      return AI_RESPONSES[key] || AI_RESPONSES.fallback;
    }
  }
  return AI_RESPONSES.fallback;
}

function aiTimestamp() {
  const now = new Date();
  return now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
}

function aiAddMsg(text, role) {
  const msgs = document.getElementById('aiMessages');
  const div  = document.createElement('div');
  div.className = 'ai-msg ' + role;
  const bubble = document.createElement('div');
  bubble.className = 'ai-msg-bubble';

  // Render basic markdown-ish: **bold**, newlines
  const html = text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\n/g,'<br>');
  bubble.innerHTML = html;

  const time = document.createElement('div');
  time.className = 'ai-msg-time';
  time.textContent = aiTimestamp();

  div.appendChild(bubble);
  div.appendChild(time);
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function aiShowTyping() {
  const msgs = document.getElementById('aiMessages');
  const div  = document.createElement('div');
  div.className = 'ai-msg bot'; div.id = 'aiTyping';
  const bubble = document.createElement('div');
  bubble.className = 'ai-msg-bubble';
  bubble.innerHTML = '<div class="ai-typing-indicator"><span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span></div>';
  div.appendChild(bubble);
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function aiHideTyping() {
  const t = document.getElementById('aiTyping');
  if (t) t.remove();
}

function aiSend(query) {
  const q = (query || '').trim();
  if (!q) return;
  aiAddMsg(q, 'user');
  const input = document.getElementById('aiInput');
  if (input) input.value = '';
  // Hide suggestions after first interaction
  document.getElementById('aiSuggestions').style.display = 'none';
  aiShowTyping();
  setTimeout(() => {
    aiHideTyping();
    aiAddMsg(aiGetResponse(q), 'bot');
  }, 900 + Math.random() * 400);
}

(function initAI() {
  const fab    = document.getElementById('aiBtn');
  const chat   = document.getElementById('aiChat');
  const close  = document.getElementById('aiClose');
  const input  = document.getElementById('aiInput');
  const send   = document.getElementById('aiSend');
  if (!fab || !chat) return;

  // Welcome message
  setTimeout(() => aiAddMsg("Hi! 👋 I'm **Ask Ayush AI** — I know everything about this portfolio. What would you like to know?", 'bot'), 300);

  fab.addEventListener('click', () => {
    const isOpen = chat.classList.toggle('open');
    chat.setAttribute('aria-hidden', String(!isOpen));
    fab.setAttribute('aria-expanded', String(isOpen));
  });
  close.addEventListener('click', () => {
    chat.classList.remove('open');
    chat.setAttribute('aria-hidden', 'true');
  });
  send.addEventListener('click', () => aiSend(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') aiSend(input.value); });

  document.querySelectorAll('.ai-suggestion').forEach(btn => {
    btn.addEventListener('click', () => aiSend(btn.dataset.q));
  });
})();


/* ═══════════════════════════════════════════════════════════
   FEATURE 2 — DEVELOPER TERMINAL
═══════════════════════════════════════════════════════════ */

const TERM_COMMANDS = {
  help: () => `<span class="t-green t-bold">Available Commands</span>
<span class="t-dim">─────────────────────────────────</span>
  <span class="t-blue">whoami</span>     — About Ayush
  <span class="t-blue">skills</span>     — Tech stack
  <span class="t-blue">projects</span>   — Shipped projects
  <span class="t-blue">contact</span>    — Get in touch
  <span class="t-blue">github</span>     — Open GitHub profile
  <span class="t-blue">clear</span>      — Clear terminal
  <span class="t-blue">exit</span>       — Close terminal
<span class="t-dim">─────────────────────────────────</span>`,

  whoami: () => `<span class="t-purple t-bold">Ayush Raj</span>
<span class="t-green">Frontend Developer · UI Craftsman</span>
<span class="t-dim">India 🇮🇳</span>

Building premium web experiences that are
<em>felt</em>, not just used.

Currently: <span class="t-green">Open to Work ⚡</span>
Reply time: <span class="t-blue">24 hours</span>`,

  skills: () => `<span class="t-purple t-bold">Tech Stack</span>
<span class="t-dim">─────────────────────────────────</span>
  <span class="t-green">HTML5</span>         ██████████  Advanced
  <span class="t-green">CSS3</span>          █████████░  Advanced
  <span class="t-blue">JavaScript</span>    ██████░░░░  Intermediate
  <span class="t-blue">GitHub</span>        ███████░░░  Intermediate
  <span class="t-pink">WebRTC</span>        ██████░░░░  Applied
  <span class="t-pink">Canvas API</span>    ██████░░░░  Applied
  <span class="t-purple">PWA</span>           ████████░░  Applied
<span class="t-dim">─────────────────────────────────</span>`,

  projects: () => `<span class="t-purple t-bold">Shipped Projects</span>
<span class="t-dim">─────────────────────────────────</span>

  <span class="t-green t-bold">NebulaBeat</span>  🌌 <span class="t-dim">— Multiplayer</span>
  Real-time galaxy music visualizer
  WebRTC · Web Audio API · Canvas · PWA
  <span class="t-blue">→ ayushrajfrontend.github.io/NebulaBeat/</span>

  <span class="t-pink t-bold">ApexDrive</span>   🚗 <span class="t-dim">— Premium UI</span>
  Cinematic hypercar showcase
  HTML · CSS · JavaScript · Audio FX
  <span class="t-blue">→ ayushrajfrontend.github.io/ApexDrive/</span>

  <span class="t-warn t-bold">Aurum Suite</span> ⚗️ <span class="t-dim">— Utility</span>
  Premium utility app + live currency API
  JavaScript · PWA · Currency API
  <span class="t-blue">→ ayushrajfrontend.github.io/aurum-suite/</span>

<span class="t-dim">─────────────────────────────────</span>`,

  contact: () => `<span class="t-purple t-bold">Contact Ayush</span>
<span class="t-dim">─────────────────────────────────</span>
  📧  <span class="t-green">ayushraj.frontend@gmail.com</span>
  💻  <span class="t-blue">github.com/AyushRajFrontend</span>
  🎮  <span class="t-blue">discord.com/users/791356542574264361</span>
  📸  <span class="t-pink">instagram: @sanatani_ayush20</span>
<span class="t-dim">─────────────────────────────────</span>
<span class="t-dim">Reply guaranteed within 24 hours ⚡</span>`,

  github: () => {
    setTimeout(() => window.open('https://github.com/AyushRajFrontend', '_blank'), 300);
    return `<span class="t-green">Opening GitHub profile…</span> 🚀`;
  },

  clear: 'CLEAR',
  exit: 'EXIT',
};

const termHistory = [];
let termHistIdx = -1;

function termClose() {
  document.getElementById('devTerminal').classList.remove('open');
  document.getElementById('termOverlay').classList.remove('open');
  document.getElementById('devTerminal').setAttribute('aria-hidden','true');
}

function termOpen() {
  const terminal = document.getElementById('devTerminal');
  const overlay  = document.getElementById('termOverlay');
  terminal.classList.add('open');
  overlay.classList.add('open');
  terminal.setAttribute('aria-hidden','false');
  setTimeout(() => document.getElementById('termInput').focus(), 350);
  if (!document.getElementById('termOutput').innerHTML) {
    termPrint(`<span class="t-green t-bold">AYUSH RAJ — PORTFOLIO TERMINAL</span>
<span class="t-dim">v1.0.0 · Vanilla JS · No frameworks</span>
<span class="t-dim">────────────────────────────────────────</span>
Type <span class="t-blue">help</span> to see available commands.
`, true);
  }
}

function termPrint(html, instant) {
  const out = document.getElementById('termOutput');
  const div = document.createElement('div');
  if (instant) {
    div.innerHTML = html;
    out.appendChild(div);
  } else {
    // Typing effect: reveal chars progressively
    const plain = html.replace(/<[^>]+>/g,'');
    let i = 0;
    div.innerHTML = '';
    out.appendChild(div);
    const rawHtml = html;
    let displayed = '';
    const chars = [...rawHtml];
    let inTag = false;
    let tagBuf = '';
    function revealNext() {
      if (i >= chars.length) return;
      const ch = chars[i++];
      if (ch === '<') { inTag=true; tagBuf='<'; revealNext(); return; }
      if (inTag) {
        tagBuf += ch;
        if (ch === '>') { displayed += tagBuf; inTag=false; tagBuf=''; div.innerHTML = displayed; }
        revealNext();
        return;
      }
      displayed += ch;
      div.innerHTML = displayed;
      out.scrollTop = out.scrollHeight;
      setTimeout(revealNext, 8);
    }
    revealNext();
  }
  out.scrollTop = out.scrollHeight;
}

function termExecCmd(raw) {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return;
  termHistory.unshift(raw);
  termHistIdx = -1;

  // Echo input
  termPrint(`<span class="t-dim">ayush@portfolio:~$</span> <span class="t-green">${raw.replace(/</g,'&lt;')}</span>`, true);

  if (cmd === 'clear') {
    document.getElementById('termOutput').innerHTML = '';
    return;
  }
  if (cmd === 'exit') { termClose(); return; }
  if (cmd === 'neofetch') {
    termPrint(`<span class="t-purple">       .,-:;//;:=,</span>      <span class="t-green t-bold">ayush</span>@<span class="t-blue">portfolio</span>
<span class="t-purple">   . :H@@@MM@M#H/.,+%;,</span>   <span class="t-dim">──────────────────</span>
<span class="t-blue">  ,/X+ +M@@M@MM%=,-%HMMM@X/,</span> <span class="t-green">OS:</span> WebOS (Chrome)
<span class="t-blue"> -+@MM; $M@@MH+-,;XMMMM@MMMM@+-</span> <span class="t-green">Host:</span> GitHub Pages
<span class="t-pink">+ +@M@M@MMM@MMMMHH##@M@MM@#+</span> <span class="t-green">Shell:</span> Portfolio v1.0
`, false);
    return;
  }

  const handler = TERM_COMMANDS[cmd];
  if (!handler) {
    termPrint(`<span class="t-error">bash: ${raw.replace(/</g,'&lt;')}: command not found</span>\nType <span class="t-blue">help</span> for available commands.`, false);
    return;
  }
  const result = typeof handler === 'function' ? handler() : null;
  if (result) termPrint(result, false);
}

(function initTerminal() {
  const input   = document.getElementById('termInput');
  const tClose  = document.getElementById('termClose');
  const overlay = document.getElementById('termOverlay');
  if (!input) return;

  tClose.addEventListener('click', termClose);
  overlay.addEventListener('click', termClose);

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      termExecCmd(input.value);
      input.value = '';
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (termHistIdx < termHistory.length - 1) input.value = termHistory[++termHistIdx];
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (termHistIdx > 0) input.value = termHistory[--termHistIdx];
      else { termHistIdx = -1; input.value = ''; }
    }
  });

  // CTRL+SHIFT+D activation
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      if (document.getElementById('devTerminal').classList.contains('open')) termClose();
      else termOpen();
    }
    if (e.key === 'Escape' && document.getElementById('devTerminal').classList.contains('open')) termClose();
  });

  // Secret word activation — type AYUSH anywhere
  let secretBuf = '';
  const SECRET = 'AYUSH';
  document.addEventListener('keypress', e => {
    if (['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
    secretBuf = (secretBuf + e.key.toUpperCase()).slice(-SECRET.length);
    if (secretBuf === SECRET) {
      secretBuf = '';
      termOpen();
    }
  });
})();


/* ═══════════════════════════════════════════════════════════
   FEATURE 3 — SKILL GALAXY
═══════════════════════════════════════════════════════════ */

const PLANETS = [
  { 
  id:'html',
  label:'HTML5',
  icon:'images/HTML.png',
  iconSize:'42px',
  color:'#e3541a', glow:'rgba(227,84,26,.6)',
    size:84, x:22, y:34,
    level:'Advanced · 95%',
    desc:'The foundation of everything I build. Deep expertise in semantic HTML5, accessibility, SEO structure, and clean markup.',
    projects:['NebulaBeat','ApexDrive','Aurum Suite'],
  },
  {
    id:'css', label:'CSS3', icon:'images/CSS.png'
    ,iconSize:'42px',
    color:'#2965f1', glow:'rgba(41,101,241,.6)',
    size:80, x:55, y:25,
    level:'Advanced · 90%',
    desc:'Animations, glassmorphism, responsive layouts, custom properties, keyframes — CSS is where I make things feel premium.',
    projects:['NebulaBeat','ApexDrive','Aurum Suite'],
  },
  {
    id:'js', label:'JavaScript', icon:'images/JavaScript.png',
    iconSize:'40px',
    color:'#f0db4f', glow:'rgba(240,219,79,.55)',
    size:96, x:72, y:58,
    level:'Intermediate · 70%',
    desc:'Vanilla JS — Web Audio API, WebRTC, Canvas particle physics, IntersectionObserver, real-time sync. No frameworks needed.',
    projects:['NebulaBeat','ApexDrive','Aurum Suite'],
  },
  {
    id:'gh', label:'GitHub',icon:'images/GitHub.png',
    iconSize:'48px',
    color:'#9d9d9d', glow:'rgba(157,157,157,.5)',
    size:68, x:30, y:68,
    level:'Intermediate · 70%',
    desc:'Version control, GitHub Pages deployment, branches, and open-source project hosting — all 3 projects live on GitHub.',
    projects:['NebulaBeat Repo','ApexDrive Repo','Aurum Suite Repo'],
  },
  {
    id:'pwa', label:'PWA',icon:'images/PWA.png',
    iconSize:'42px',
    color:'#a78bfa', glow:'rgba(167,139,250,.55)',
    size:60, x:46, y:72,
    level:'Applied',
    desc:'Progressive Web App implementation with service workers, manifest files, offline support, and install prompts.',
    projects:['NebulaBeat','Aurum Suite'],
  },
  {
    id:'webrtc', label:'WebRTC',icon:'images/WebRTC.png',
    iconSize:'46px',
    color:'#f472b6', glow:'rgba(244,114,182,.5)',
    size:70, x:15, y:58,
    level:'Applied',
    desc:'Peer-to-peer audio streaming, ICE/STUN/TURN servers, perfect negotiation pattern — used for real-time audio sharing in NebulaBeat.',
    projects:['NebulaBeat'],
  },
];

(function initGalaxy() {
  const canvas  = document.getElementById('galaxyCanvas');
  const wrapper = document.getElementById('skill-galaxy-wrap') || canvas?.parentElement;
  const planetContainer = document.getElementById('galaxyPlanets');
  const pModal  = document.getElementById('planetModal');
  const pClose  = document.getElementById('planetModalClose');
  if (!canvas || !planetContainer) return;

  // ── Star field on canvas ──
  const ctx = canvas.getContext('2d');
  const stars = [];

  function resizeCanvas() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  for (let i = 0; i < 120; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const now = performance.now() / 1000;
    stars.forEach(s => {
      const alpha = 0.2 + 0.5 * Math.abs(Math.sin(s.a + now * s.speed));
      ctx.beginPath();
      ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();

  // ── Build planet DOM nodes ──
  PLANETS.forEach(p => {
    const el = document.createElement('div');
    el.className = `gplanet ${p.id}`;
    el.style.cssText = `
      width:${p.size}px; height:${p.size}px;
      left:${p.x}%; top:${p.y}%;
    `;
    el.innerHTML = `
  <div class="gplanet-inner">
    <img src="${p.icon}"
         alt="${p.label}"
         class="planet-logo"
         draggable="false">
  </div>
  <span class="gplanet-label">${p.label}</span>
`;

    // Parallax on mouse move
    wrapper.addEventListener('mousemove', e => {
      if (!el.dataset.dragging) {
        const rect = wrapper.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width  / 2) / rect.width  * 10;
        const dy = (e.clientY - rect.top  - rect.height / 2) / rect.height * 10;
        el.style.setProperty('--px', `${dx}px`);
        el.style.setProperty('--py', `${dy}px`);
      }
    });

    // Drag support (desktop)
    el.addEventListener('mousedown', e => {
      e.stopPropagation();
      el.dataset.dragging = '0';
      const rect = wrapper.getBoundingClientRect();
      const startX = e.clientX, startY = e.clientY;
      let moved = false;

      function onMove(me) {
        const dx = Math.abs(me.clientX - startX);
        const dy = Math.abs(me.clientY - startY);
        if (dx + dy > 4) moved = true;
        el.dataset.dragging = '1';
        const nx = ((me.clientX - rect.left) / rect.width  * 100);
        const ny = ((me.clientY - rect.top)  / rect.height * 100);
        el.style.left = Math.max(5, Math.min(95, nx)) + '%';
        el.style.top  = Math.max(5, Math.min(90, ny)) + '%';
      }
      function onUp(ue) {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (!moved) openPlanetModal(p);
        setTimeout(() => { delete el.dataset.dragging; }, 50);
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });

    // Touch drag (mobile)
    el.addEventListener('touchstart', e => {
      e.stopPropagation();
      el.dataset.dragging = '0';
      const rect = wrapper.getBoundingClientRect();
      const t0 = e.touches[0];
      const startX = t0.clientX, startY = t0.clientY;
      let moved = false;

      function onTMove(te) {
        const t = te.touches[0];
        const dx = Math.abs(t.clientX - startX);
        const dy = Math.abs(t.clientY - startY);
        if (dx + dy > 6) { moved = true; te.preventDefault(); }
        el.dataset.dragging = '1';
        const rect2 = wrapper.getBoundingClientRect();
        const nx = ((t.clientX - rect2.left) / rect2.width  * 100);
        const ny = ((t.clientY - rect2.top)  / rect2.height * 100);
        el.style.left = Math.max(5, Math.min(95, nx)) + '%';
        el.style.top  = Math.max(5, Math.min(90, ny)) + '%';
      }
      function onTEnd() {
        el.removeEventListener('touchmove', onTMove);
        el.removeEventListener('touchend', onTEnd);
        if (!moved) openPlanetModal(p);
        setTimeout(() => { delete el.dataset.dragging; }, 50);
      }
      el.addEventListener('touchmove', onTMove, { passive:false });
      el.addEventListener('touchend', onTEnd);
    }, { passive:true });

    planetContainer.appendChild(el);
  });

  // ── Planet Modal ──
  function openPlanetModal(p) {
    const pmIcon = document.getElementById('pmIcon');
    pmIcon.innerHTML = `<img src="${p.icon}" class="planet-modal-logo" alt="${p.label}">`;
    document.getElementById('pmTitle').textContent  = p.label;
    document.getElementById('pmLevel').textContent  = p.level;
    document.getElementById('pmDesc').textContent   = p.desc;
    const list = document.getElementById('pmProjects');
    list.innerHTML = '';
    p.projects.forEach(pr => {
      const chip = document.createElement('span');
      chip.className = 'pmp-chip';
      chip.textContent = pr;
      list.appendChild(chip);
    });
    pModal.classList.add('open');
    pModal.setAttribute('aria-hidden','false');
  }

  if (pClose) pClose.addEventListener('click', closePlanetModal);
  if (pModal) pModal.addEventListener('click', e => { if (e.target === pModal) closePlanetModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && pModal && pModal.classList.contains('open')) closePlanetModal();
  });

  function closePlanetModal() {
    pModal.classList.remove('open');
    pModal.setAttribute('aria-hidden','true');
  }

  // helper
  function lighten(hex) {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgb(${Math.min(255,r+70)},${Math.min(255,g+70)},${Math.min(255,b+70)})`;
  }
})();