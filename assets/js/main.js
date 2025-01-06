/**
 * Template Name: FlexStart
 * Updated: Sep 18 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 10;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          aos_init();
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfokio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();

document
  .getElementById("submitAssignmentButton")
  .addEventListener("click", function () {
    Swal.fire({
      title: "Pilih Metode Submit",
      text: "Silakan pilih salah satu metode untuk mengumpulkan tugas Anda:",
      icon: "info",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Via Google Form",
      denyButtonText: "Via WhatsApp",
    }).then((result) => {
      if (result.isConfirmed) {
        // Arahkan ke Google Form
        window.open("https://forms.gle/your-google-form-link", "_blank");
      } else if (result.isDenied) {
        // Arahkan ke WhatsApp
        const whatsappLink =
          "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20submit%20tugas%20Project%20Perkenalan.%20Berikut%20detailnya%3A";
        window.open(whatsappLink, "_blank");
      }
    });
  });

// document
//   .getElementById("submitAssignmentButton")
//   .addEventListener("click", function () {
//     Swal.fire({
//       title: "Pilih Assignment",
//       html: `
//         <div style="text-align: left;">
//           <h4>Assignment 1: Web Perkenalan</h4>
//           <p>Buatlah website perkenalan seperti contoh web ini, lalu deploy ke Vercel via GitHub.</p>
//           <button class="swal2-confirm swal2-styled" id="assignment1Button" style="margin-bottom: 10px;">Lihat Detail</button>
          
//           <h4>Assignment 2: Laravel Project</h4>
//           <p>Buat project Laravel 11 dengan satu controller dan tampilkan halaman index.</p>
//           <button class="swal2-confirm swal2-styled" id="assignment2Button" style="margin-bottom: 10px;">Lihat Detail</button>
          
//           <h4>Assignment 3: Install Debian/Ubuntu</h4>
//           <p>Instal Debian/Ubuntu di VirtualBox, lalu buat user biasa dan sudo.</p>
//           <button class="swal2-confirm swal2-styled" id="assignment3Button" style="margin-bottom: 10px;">Lihat Detail</button>
          
//           <h4>Assignment 4: Shortcut MS Excel</h4>
//           <p>Hafalkan 10 shortcut penting di MS Excel atau Google Sheets.</p>
//           <button class="swal2-confirm swal2-styled" id="assignment4Button" style="margin-bottom: 10px;">Lihat Detail</button>
//         </div>
//       `,
//       showConfirmButton: false,
//     });

//     // Assignment 1 detail
//     document
//       .getElementById("assignment1Button")
//       .addEventListener("click", function () {
//         Swal.fire({
//           title: "Assignment 1: Web Perkenalan",
//           text: "Buatlah website perkenalan seperti contoh ini, lalu deploy ke Vercel via GitHub. Berikan URL live dan screenshot proses deploy.",
//           icon: "info",
//           confirmButtonText: "OK",
//         });
//       });

//     // Assignment 2 detail
//     document
//       .getElementById("assignment2Button")
//       .addEventListener("click", function () {
//         Swal.fire({
//           title: "Assignment 2: Laravel Project",
//           text: "Buat project Laravel 11, buat controller dan view, konfigurasikan route di web.php, dan tampilkan halaman index.",
//           icon: "info",
//           confirmButtonText: "OK",
//         });
//       });

//     // Assignment 3 detail
//     document
//       .getElementById("assignment3Button")
//       .addEventListener("click", function () {
//         Swal.fire({
//           title: "Assignment 3: Install Debian/Ubuntu",
//           text: "Instal Debian/Ubuntu di VirtualBox. Buat user biasa dan user sudo, sertakan 5 screenshot (instalasi, hostname, user biasa, user sudo, tampilan awal).",
//           icon: "info",
//           confirmButtonText: "OK",
//         });
//       });

//     // Assignment 4 detail
//     document
//       .getElementById("assignment4Button")
//       .addEventListener("click", function () {
//         Swal.fire({
//           title: "Assignment 4: Shortcut MS Excel",
//           text: "Hafalkan 10 shortcut penting di MS Excel atau Google Sheets. Sesi hafalan akan diuji langsung.",
//           icon: "info",
//           confirmButtonText: "OK",
//         });
//       });
//   });
