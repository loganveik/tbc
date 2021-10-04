const musicBtn = document.getElementById("link-music");
const music = document.getElementById("music");

musicBtn.addEventListener("click", () => {
    music.classList.toggle("active");
});

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
    music.classList.toggle("active");
});