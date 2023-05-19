let enterBtn = document.getElementById('enter');
let introOverlay = document.getElementById('introOverlay');
let heroBG = document.getElementById('heroBg');

heroBG.pause();





enterBtn.addEventListener('click', () => {
    gsap
      .timeline({
        delay: 0
      })
      .to(enterBtn, {
        duration: 1,
        opacity: 0,
        ease: 'linear',
      })
      .to('#introOverlay .intro--inner svg', {
        duration: 1,
        opacity: 0,
        delay: 0.8,
      })
      .to(introOverlay, {
        duration: 5,   // animation duration in seconds
        opacity: 0,    // animate to zero opacity (completely transparent)
        ease: "power1.out"  // easing function for the animation
    });
    heroBG.play();
    setTimeout(() => {
      introOverlay.classList.add('entered');
    }, 2000);
});

