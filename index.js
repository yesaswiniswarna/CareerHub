//  tutorial : https://codepen.io/ebinabo/pen/WNwjEaL

/*
https://gsap.com/
*/
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
  
    const body = document.body;
    const footer = document.querySelector('footer');
    const isDark = body.classList.toggle('dark-mode');
    
    gsap.to(body, {
      backgroundColor: isDark ? '#2f2f2f' : '#fbfbf0',
      color: isDark ? '#f6f6dc' : '#2f2f2f',
      duration: 0.25
    });
  
    gsap.to(footer, {
      borderColor:isDark ? '#f6f6dc' : '#2f2f2f',
      duration: 0.15});
  });
  
  // Remove the Swiper initialization code
// const swiper = new Swiper(".swiper-slider", { ... });

// Update the navigation links to scroll to the new boxes
document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      scroller.scrollTo(targetSection);
    });
  });
  
  // Update the "go top" link to scroll to the top of the page
  document.querySelector('.go').addEventListener('click', function (e) {
    e.preventDefault();
    scroller.scrollTo(0);
  });
  
  // Initialize the Locomotive Scroll
  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
  
  
  // go top
  document.querySelector('.go').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    scroller.scrollTo(targetSection);
  });
  
  