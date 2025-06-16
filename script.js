document.addEventListener('DOMContentLoaded', () => {
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
});
