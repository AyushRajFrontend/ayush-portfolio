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