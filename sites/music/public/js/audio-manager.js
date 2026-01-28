(function () {
  const players = Array.from(document.querySelectorAll("audio.track-audio"));
  if (!players.length) return;

  players.forEach((player) => {
    player.addEventListener("play", () => {
      players.forEach((p) => {
        if (p !== player && !p.paused) {
          p.pause();
          // Optional: rewind others
          // p.currentTime = 0;
        }
      });
    });
  });
})();
