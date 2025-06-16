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
});
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
