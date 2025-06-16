document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Musik auto play saat scroll
  let audioStarted = false;
  window.addEventListener('scroll', () => {
    if (!audioStarted) {
      const audio = document.querySelector('audio');
      if (audio) {
        audio.play();
        audioStarted = true;
      }
    }
  });

  // Tombol toggle audio
  const toggleBtn = document.getElementById('audioToggle');
  const audio = document.querySelector('audio');

  toggleBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      toggleBtn.classList.add('playing');
      toggleBtn.textContent = '🔊';
    } else {
      audio.pause();
      toggleBtn.classList.remove('playing');
      toggleBtn.textContent = '🔇';
    }
  });
});
