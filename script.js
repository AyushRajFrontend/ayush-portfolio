window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 100){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

emailjs.init("6-g3zqSXuH6XNfiFs");

const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();

  sendBtn.textContent = "Sending...";
  sendBtn.disabled = true;

  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  emailjs.send(
    "service_1521",
    "template_at8p2wr",
    templateParams
  )
  .then(() => {
    const toast = document.getElementById("toast");

toast.textContent = "Message sent successfully 🚀";
toast.classList.add("show");

setTimeout(() => {
  toast.classList.remove("show");
}, 3000);
    contactForm.reset();
    sendBtn.textContent = "Send Message";
    sendBtn.disabled = false;
  })
  .catch((error) => {
    toast.textContent = "Failed to send message 😭";
toast.classList.add("show");

setTimeout(() => {
  toast.classList.remove("show");
}, 3000);
    console.log(error);
    sendBtn.textContent = "Send Message";
    sendBtn.disabled = false;
  });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (top < screen - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {
  if(musicPlaying){
    bgMusic.pause();
    musicBtn.textContent = "🎵";
    musicPlaying = false;
  } else {
    bgMusic.play();
    musicBtn.textContent = "⏸";
    musicPlaying = true;
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1800);
});

const roles = [
  "Frontend Developer",
  "UI Designer",
  "Creative Coder",
  "Premium Web Builder"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
const projectModal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");

function openProjectModal(title, desc, img, tags, live, git){
  const modal = document.getElementById("projectModal");

  modal.classList.remove("apex-theme","aurum-theme");

  if(title === "ApexDrive"){
    modal.classList.add("apex-theme");
  }

  if(title === "Aurum Suite"){
    modal.classList.add("aurum-theme");
  }

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("modalImage").src = img;
  document.getElementById("modalLive").href = live;
  document.getElementById("modalGit").href = git;

  const tagsContainer = document.getElementById("modalTags");
  tagsContainer.innerHTML = "";

  tags.forEach(tag=>{
    const span = document.createElement("span");
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  modal.classList.add("active");
}

function closeProjectModal(){
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active","apex-theme","aurum-theme");
}

document.getElementById("closeModal").addEventListener("click", closeProjectModal);

const cursor = document.querySelector(".cursor-glow");

if(cursor){
  document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  if(window.innerWidth < 900){
    cursor.style.display = "none";
  }
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

  let current = "";

  sections.forEach(section=>{
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop &&
     window.scrollY < sectionTop +                      section.offsetHeight
) {
  current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link=>{
    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });

});

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

  card.addEventListener("mousemove",(e)=>{
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = ((x - centerX) / 20);

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave",()=>{
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  });

});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

  mobileNav.classList.toggle("active");

  if(mobileNav.classList.contains("active")){
    menuToggle.textContent = "✕";
  }else{
    menuToggle.textContent = "☰";
  }

});

document.querySelectorAll("nav a").forEach(link=>{
  link.addEventListener("click",()=>{
    mobileNav.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});