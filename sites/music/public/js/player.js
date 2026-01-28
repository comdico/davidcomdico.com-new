(function () {
  const audio = document.getElementById("audio");
  const playlistEl = document.getElementById("playlist");
  const tracks = window.MUSIC_TRACKS || [];

  if (!audio || !playlistEl || !tracks.length) return;

  let current = 0;

  function loadTrack(i, autoplay = false) {
    current = i;
    const t = tracks[i];

    // Use relative paths so /music hosting works
    audio.src = t.src;
    audio.setAttribute("data-title", t.title);

    // update UI
    [...playlistEl.querySelectorAll("li")].forEach((li, idx) => {
      li.classList.toggle("active", idx === i);
    });

    if (autoplay) audio.play().catch(() => {});
  }

  // render list
  tracks.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<button type="button">${t.title}</button>`;
    li.querySelector("button").addEventListener("click", () => loadTrack(i, true));
    playlistEl.appendChild(li);
  });

  audio.addEventListener("ended", () => {
    const next = (current + 1) % tracks.length;
    loadTrack(next, true);
  });

  loadTrack(0, false);
})();
