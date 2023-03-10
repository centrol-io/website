// Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Video player
const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('video');
const playButton = videoPlayer.querySelector('.play-button');
const playIcon = playButton.querySelector('i');

function togglePlay() {
  if (video.paused) {
    video.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  } else {
    video.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  }
}

playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

// Scroll reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

sr.reveal('.animate-left', {
  origin: 'left',
  interval: 100
});

sr.reveal('.animate-right', {
  origin: 'right',
  interval: 100
});

sr.reveal('.animate-top', {
  origin: 'top',
  interval: 100
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  interval: 100
});

sr.reveal('.animate-zoomIn', {
  interval: 100
});

sr.reveal('.animate-opacity', {
  interval: 100
});

// Parallax effect
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
