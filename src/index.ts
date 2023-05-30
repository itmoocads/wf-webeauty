import { showVersion } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar-main-wrap'); // Replace "navbar" with the ID of your navbar element
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbarDropdownMenu = document.querySelectorAll('.nav-dropdown-wrap');

    if (scrollTop > 0) {
      navbar.style.height = '80px';
      navbarDropdownMenu.forEach((menu) => {
        menu.style.top = '115px'; // Adjust the top position to your desired value
      });
    } else {
      navbar.style.height = '130px';
      navbarDropdownMenu.forEach((menu) => {
        menu.style.top = '165px'; // Adjust the top position to your desired value
      });
    }
  });
  // Get All Videos
  const servicesCards = document.querySelectorAll('.services-card');

  //Loop over videos to add eventListeners
  for (const card of servicesCards) {
    const video = card.querySelector('.service-video-bg video');
    //Play on Mouseover
    card.addEventListener(
      'mouseover',
      function () {
        video.play();
      },
      false
    );

    card.addEventListener(
      'mouseout',
      function () {
        video.pause();
      },
      false
    );
  }

  // Get All Videos
  const otherServiceCards = document.querySelectorAll('.other-services-card');

  //Loop over videos to add eventListeners
  for (const otherServiceCard of otherServiceCards) {
    const video = otherServiceCard.querySelector('.service-video-bg video');
    //Play on Mouseover
    otherServiceCard.addEventListener(
      'mouseover',
      function () {
        video.play();
      },
      false
    );

    otherServiceCard.addEventListener(
      'mouseout',
      function () {
        video.pause();
      },
      false
    );
  }
  const version = 'v0.0.2';
  showVersion(version);
});
