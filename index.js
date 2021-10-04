// MUSIC PAGE TOGGLE
const musicBtn = document.getElementById("link-music");
const music = document.getElementById("music");

musicBtn.addEventListener("click", () => {
    music.classList.toggle("active");
});

const closeBtnMusic = document.getElementById("closeBtn-music");

closeBtnMusic.addEventListener("click", () => {
    music.classList.toggle("active");
});

// // VIDEOS PAGE TOGGLE
const videosBtn = document.getElementById("link-videos");
const videos = document.getElementById("videos");

videosBtn.addEventListener("click", () => {
    videos.classList.toggle("active");
});

const closeBtnVideos = document.getElementById("closeBtn-videos");

closeBtnVideos.addEventListener("click", () => {
    videos.classList.toggle("active");
});

// // TOUR PAGE TOGGLE
const tourBtn = document.getElementById("link-tour");
const tour = document.getElementById("tour");

tourBtn.addEventListener("click", () => {
    tour.classList.toggle("active");
});

const closeBtnTour = document.getElementById("closeBtn-tour");

closeBtnTour.addEventListener("click", () => {
    tour.classList.toggle("active");
});

// // STORE PAGE TOGGLE
const storeBtn = document.getElementById("link-store");
const store = document.getElementById("store");

storeBtn.addEventListener("click", () => {
    store.classList.toggle("active");
});

const closeBtnStore = document.getElementById("closeBtn-store");

closeBtnStore.addEventListener("click", () => {
    store.classList.toggle("active");
});

// // FOLLOW PAGE TOGGLE
const followBtn = document.getElementById("link-follow");
const emailBtn = document.getElementById("email");
const follow = document.getElementById("follow");

followBtn.addEventListener("click", () => {
    follow.classList.toggle("active");
});
emailBtn.addEventListener("click", () => {
    follow.classList.toggle("active");
});

const closeBtnFollow = document.getElementById("closeBtn-follow");

closeBtnFollow.addEventListener("click", () => {
    follow.classList.toggle("active");
});