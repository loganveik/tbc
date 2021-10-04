const videosBtn = document.getElementById("link-videos");
const videos = document.getElementById("videos");

videosBtn.addEventListener("click", () => {
    videos.classList.toggle("active");
});

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
    videos.classList.toggle("active");
});