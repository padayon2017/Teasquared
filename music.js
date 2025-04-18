if (!window.persistentAudio) {
  const audio = new Audio("Lay Bankz - Tell Ur Girlfriend (Official Video).mp3");
  audio.loop = true;
  window.persistentAudio = audio;

  const savedTime = localStorage.getItem("audioTime");
  if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
  }

  if (localStorage.getItem("isPlaying") === "true") {
    audio.play().then(() => {
      setTimeout(() => {
        const btn = document.getElementById("playPauseBtn");
        if (btn) btn.src = "image/pause.png";
      }, 100);
    });
  }

  // Save time before page unloads
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("audioTime", audio.currentTime);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const playPauseBtn = document.getElementById("playPauseBtn");
  const audio = window.persistentAudio;

  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseBtn.src = "image/pause.png";
      localStorage.setItem("isPlaying", "true");
    } else {
      audio.pause();
      playPauseBtn.src = "image/play.png";
      localStorage.setItem("isPlaying", "false");
    }
  });
});
