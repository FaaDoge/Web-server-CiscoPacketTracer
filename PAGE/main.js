document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const fadeIn = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add('active');
      }
    });
  };

  const slideIn = () => {
    const images = document.querySelectorAll('.slide-left, .slide-right');

    images.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imageTop < windowHeight - 100) {
        image.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', fadeIn);
  window.addEventListener('scroll', slideIn);
});
