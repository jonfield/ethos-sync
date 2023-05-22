let enterBtn = document.getElementById('enter');
let introOverlay = document.getElementById('introOverlay');
let heroBG = document.getElementById('heroBg');

// heroBG.pause();


// // Function to get a cookie
// const getCookie = (name) => {
//   let nameEQ = name + "=";
//   let ca = document.cookie.split(';');
//   for(let i=0;i < ca.length;i++) {
//       let c = ca[i];
//       while (c.charAt(0)==' ') c = c.substring(1,c.length);
//       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//   }
//   return null;
// }
// let cookieName = "entered";
// // if cookie; dont show overlay and play home hero bg video
// if(getCookie(cookieName) !== null) {
//   introOverlay.style.display = 'none';
//   heroBG.play();

// } 


// enterBtn.addEventListener('click', () => {
//     gsap
//       .timeline({
//         delay: 0
//       })
//       .to(enterBtn, {
//         duration: 1,
//         opacity: 0,
//         ease: 'linear',
//       })
//       .to('#introOverlay .intro--inner svg', {
//         duration: 1,
//         opacity: 0,
//         delay: 0.8,
//       })
//       .to('#introOverlay .overlay--logo', {
//         duration: 0.5,
//         opacity: 0,
//       })
//       .to(introOverlay, {
//         duration: 5,   // animation duration in seconds
//         opacity: 0,    // animate to zero opacity (completely transparent)
//         ease: "power1.out"  // easing function for the animation
//     });
//     heroBG.play();
//     setTimeout(() => {
//       introOverlay.classList.add('entered');
//     }, 7000);
//     //set cookie
//     let date = new Date();
//     date.setTime(date.getTime() + (60*60*1000)); // Set the expiration to 1 hour from now
//     let expires = `; expires=${date.toGMTString()}`;
//     document.cookie = `entered=1${expires}; path=/`;
// });

document.addEventListener("DOMContentLoaded", function() {
    let menuBtn = document.querySelector(".hamburger");
    let nav = document.querySelector(".menu--mobile");

    menuBtn.addEventListener("click", function() {
        nav.classList.toggle("opened");
        menuBtn.classList.toggle("close");
    });
});