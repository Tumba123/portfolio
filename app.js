    // Add a scroll-triggered effect to the hero section
    window.addEventListener("scroll", function() {
        const hero = document.querySelector(".hero");
        const windowScroll = window.pageYOffset;
        hero.style.opacity = 1 - windowScroll / 400;
        hero.style.transform = "translateY(" + windowScroll / 2 + "px)";
      });
      
      const programs = document.querySelectorAll('.program');

      function showPrograms() {
        programs.forEach(program => {
          const position = program.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
      
          if (position < screenPosition) {
            program.classList.add('show');
          } else {
            program.classList.remove('show');
          }
        });
      }
      
      window.addEventListener('scroll', showPrograms);
      