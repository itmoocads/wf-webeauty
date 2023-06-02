"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/greet.ts
  var showVersion = (version) => {
    console.log(`Version: ${version}!`);
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    window.addEventListener("scroll", function() {
      const navbar = document.getElementById("navbar-main-wrap");
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbarDropdownMenu = document.querySelectorAll(".nav-dropdown-wrap");
      if (scrollTop > 0) {
        navbar.style.height = "80px";
        navbarDropdownMenu.forEach((menu) => {
          menu.style.top = "115px";
        });
      } else {
        navbar.style.height = "130px";
        navbarDropdownMenu.forEach((menu) => {
          menu.style.top = "165px";
        });
      }
    });
    const servicesCards = document.querySelectorAll(".services-card");
    for (const card of servicesCards) {
      const video = card.querySelector(".service-video-bg video");
      card.addEventListener(
        "mouseover",
        function() {
          video.play();
        },
        false
      );
      card.addEventListener(
        "mouseout",
        function() {
          video.pause();
        },
        false
      );
    }
    const otherServiceCards = document.querySelectorAll(".other-services-card");
    for (const otherServiceCard of otherServiceCards) {
      const video = otherServiceCard.querySelector(".service-video-bg video");
      otherServiceCard.addEventListener(
        "mouseover",
        function() {
          video.play();
        },
        false
      );
      otherServiceCard.addEventListener(
        "mouseout",
        function() {
          video.pause();
        },
        false
      );
    }
    const version = "v0.0.2";
    showVersion(version);
  });
})();
//# sourceMappingURL=index.js.map
