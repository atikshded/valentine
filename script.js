/* ================= PETAL FALL ================= */

function createPetal() {
  const petal = document.createElement("img");
  petal.src = "assets/petal.png";
  petal.className = "petal";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (6 + Math.random() * 4) + "s";

  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 700);


/* ================= SURPRISE PAGE (YES / NO) ================= */

function sayYes() {
  const msg = document.getElementById("final-message");
  const hug = document.getElementById("hug-img");

  if (!msg || !hug) return;

  msg.innerHTML = `
    You said YES 😭💖<br>
    My heart chose you,<br>
    just like Bubu chose Dudu 🐻🐰<br><br>
    I love you Khushi ❤️
  `;
  msg.classList.add("reveal");

  hug.classList.remove("hidden");
  setTimeout(() => hug.classList.add("show"), 300);

}

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");
  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.position = "absolute";
      noBtn.style.left = Math.random() * 70 + "%";
      noBtn.style.top = Math.random() * 70 + "%";
    });
  }
});



/* ================= SLIDESHOW ================= */

const slides = [
  "assets/us1.jpeg","assets/us2.jpeg","assets/us3.jpeg","assets/us4.jpeg",
  "assets/us5.jpeg","assets/us6.jpeg","assets/us7.jpeg","assets/us8.jpeg",
  "assets/us9.jpeg","assets/us10.jpeg","assets/us11.jpeg","assets/us12.jpeg",
  "assets/us13.jpeg","assets/us14.jpeg","assets/us16.jpeg"
];

let slideIndex = 0;
let slideshowTimer = null;

function startSlideshow() {
  const img = document.getElementById("slide-image");
  const bg = document.getElementById("bg-blur");
  const music = document.getElementById("slideshow-music");

  if (!img || !music) return;

  // 🎵 MUSIC
  music.src = "assets/song1.mp3";
  music.currentTime = 50;
  music.volume = 0.6;
  music.play().catch(() => {
    console.log("Autoplay blocked — user interaction required");
  });

  img.src = slides[slideIndex];
  if (bg) bg.src = img.src;
  img.style.opacity = 1;

  slideshowTimer = setInterval(() => {
    img.style.opacity = 0;

    setTimeout(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      img.src = slides[slideIndex];
      if (bg) bg.src = img.src;
      img.style.opacity = 1;
    }, 1200);
  }, 5000);
}


function stopSlideshow() {
  clearInterval(slideshowTimer);
  const music = document.getElementById("slideshow-music");
  if (music) music.pause();
}

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("slide-image");
  if (img) {
    img.src = slides[0];
    img.style.opacity = 1;
  }
});
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1800);
});
// ===== TYPEWRITER EFFECT =====
const text = "Because loving you feels like home 🐻🐰";
let i = 0;

function startTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  el.innerHTML = "";
  i = 0;

  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 60);
}

document.addEventListener("DOMContentLoaded", startTypewriter);
// ===== BACKGROUND SPARKLES =====
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 5000);
}

// gentle rate (not noisy)
setInterval(createSparkle, 900);
