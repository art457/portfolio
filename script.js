
const btn = document.getElementById("enterBtn");
const music = document.getElementById("music");
const scene = document.querySelector(".scene");
const enterScreen = document.querySelector(".enter-screen");

btn.addEventListener("click", () => {
    music.play();
    scene.classList.remove("hidden");
    enterScreen.style.display = "none";
});


