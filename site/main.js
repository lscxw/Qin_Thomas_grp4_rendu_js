document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
  });

  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("tab-active");
      });

      const contents = document.querySelectorAll(".content");
      contents.forEach(function (content) {
        content.classList.remove("active");
      });

      this.classList.add("tab-active");

      if (this.classList.contains("tab-griffondor")) {
        document.querySelector(".content-griffondor").classList.add("active");
      } else if (this.classList.contains("tab-serpentard")) {
        document.querySelector(".content-serpentard").classList.add("active");
      } else if (this.classList.contains("tab-poufsouffle")) {
        document.querySelector(".content-poufsouffle").classList.add("active");
      } else if (this.classList.contains("tab-serdaigle")) {
        document.querySelector(".content-serdaigle").classList.add("active");
      }
    });
  });

  const toggleDarkModeButton = document.querySelector(".toggle-dark-mode");

  toggleDarkModeButton.addEventListener("click", function () {
    const body = document.body;

    body.classList.toggle("dark");
  });
});
