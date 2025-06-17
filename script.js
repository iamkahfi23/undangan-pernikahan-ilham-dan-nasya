document.addEventListener('DOMContentLoaded', () => {
  // === FADE IN DENGAN OBSERVER ===
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // stop observe biar lebih ringan
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // === AUDIO AUTOPLAY SAAT SCROLL ===
  let audioStarted = false;
  const toggleBtn = document.getElementById('audioToggle');
  const audio = document.querySelector('audio');

  window.addEventListener('scroll', () => {
    if (!audioStarted && audio) {
      audio.play().then(() => {
        audioStarted = true;
        toggleBtn.classList.remove('paused');
      }).catch(err => {
        console.warn("Audio autoplay gagal:", err);
      });
    }
  });

  // === TOMBOL TOGGLE AUDIO ===
  toggleBtn.addEventListener('click', () => {
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => {
        toggleBtn.classList.remove('paused');
      }).catch(err => {
        console.warn("Gagal play audio:", err);
      });
    } else {
      audio.pause();
      toggleBtn.classList.add('paused');
    }
  });

  // === COUNTDOWN TO EVENT ===
  const target = new Date("2025-06-28T07:00:00");
  const countdown = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date();
    let diff = target - now;

    if (diff <= 0) {
      countdown.innerText = "💍 Hari bahagia telah tiba! 🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    countdown.innerText =
      `💍 ${days} Hari ${String(hours).padStart(2, '0')} Jam ${String(minutes).padStart(2, '0')} Menit ${String(seconds).padStart(2, '0')} Detik menuju hari bahagia kami`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
