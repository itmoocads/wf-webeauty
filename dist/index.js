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
      if (window.innerWidth > 992) {
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
      }
    });
    const version = "v0.0.4";
    showVersion(version);
  });
})();
//# sourceMappingURL=index.js.map
