const giftBox = document.getElementById("giftBox");
const intro = document.getElementById("intro");
const invitation = document.getElementById("invitation");
let opened = false;

function lanzarConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#ff9ecb", "#ffc1da", "#ff6fa5", "#ffd6ea", "#43a86f", "#8ed9aa", "#ffffff"];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("div");
    piece.className = Math.random() > 0.72 ? "ribbon" : "confetti";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-30px";
    piece.style.animationDelay = Math.random() * 0.45 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);

    setTimeout(() => piece.remove(), 3800);
  }
}

function openInvitation() {
  if (opened) return;
  opened = true;

  giftBox.classList.add("open");
  lanzarConfetti();

  setTimeout(() => intro.classList.add("hide"), 650);

  setTimeout(() => {
    intro.classList.add("hidden");
    invitation.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1200);
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

giftBox.addEventListener("click", openInvitation);
giftBox.addEventListener("touchstart", openInvitation, { passive: true });
