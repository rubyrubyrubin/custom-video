const vidContainer = document.querySelector(".video-player");
const vid = document.querySelector(".video-player video");
const btn = document.querySelector(".video-player-button");
vid.playbackRate = 6; // Debug only

function togglePlay() {}

btn.addEventListener("click", togglePlay);
