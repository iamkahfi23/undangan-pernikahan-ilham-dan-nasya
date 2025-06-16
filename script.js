document.addEventListener('DOMContentLoaded', () => {
  // IntersectionObserver dan audio toggle tetap sama, tapi aku sertakan di sini biar lengkap

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Musik auto play saat scroll
  let audioStarted = false;
  const toggleBtn = document.getElementById('audioToggle');
  const audio = document.querySelector('audio');

  window.addEventListener('scroll', () => {
    if (!audioStarted) {
      if (audio) {
        audio.play();
        audioStarted = true;
        toggleBtn.classList.remove('paused');
      }
    }
  });

  // Tombol toggle audio
  toggleBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      toggleBtn.classList.remove('paused');
    } else {
      audio.pause();
      toggleBtn.classList.add('paused');
    }
  });

  // Countdown waktu mundur dengan format "X Hari XX Jam XX Menit XX Detik"
  const target = new Date("2025-06-28T07:00:00");
  const countdown = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date();
    let diff = target - now;

    if (diff < 0) {
      countdown.innerText = "💍 Hari bahagia telah tiba! 🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    // Format output, misal: "1 Hari 23 Jam 14 Menit 07 Detik"
    countdown.innerText = `💍 ${days} Hari ${String(hours).padStart(2, '0')} Jam ${String(minutes).padStart(2, '0')} Menit ${String(seconds).padStart(2, '0')} Detik menuju hari bahagia kami`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
