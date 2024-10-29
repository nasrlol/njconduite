document.addEventListener("DOMContentLoaded", function () {
  const callButtonSlide = document.querySelector(".banner-button-call-slide");
  const callButtonContainer = document.querySelector(".call-button-container");
  const callButton = document.querySelector(".banner-button-call");

  // Toggle the call slide when clicking the container (which includes the call button)
  if (callButton) {
    callButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event from bubbling up
      callButtonSlide.classList.toggle("expanded");
    });
  }

  // Close the slide if clicked outside the call button or the slide itself
  document.addEventListener("click", function (event) {
    if (
      !callButtonContainer.contains(event.target) &&
      !callButtonSlide.contains(event.target) &&
      callButtonSlide.classList.contains("expanded")
    ) {
      callButtonSlide.classList.remove("expanded");
    }
  });

  // Menu button for opening and closing side navigation
  const menuButton = document.querySelector('.menuButton');
  const sideNav = document.getElementById('dropdownMenu');
  
  if (menuButton && sideNav) {
    menuButton.addEventListener('click', function () {
      sideNav.classList.toggle('open');
    });
  }

  // Intersection Observer for info-box elements
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  });

  // Observe regular .info-box elements (start immediately)
  const infoBoxes = document.querySelectorAll('.info-box');
  infoBoxes.forEach(infoBox => {
    observer.observe(infoBox);
  });

  // Splash screen logic
  window.addEventListener("load", function () {
    const splash = document.getElementById("mainSplash");

    if (splash) {
      const hideSplash = function () {
        splash.classList.add("splashscreen-hidden");

        // Start observing .info-box-permis elements only after splash screen disappears
        const infoBoxesPermis = document.querySelectorAll('.info-box-permis');
        infoBoxesPermis.forEach(BoxesPermis => {
          observer.observe(BoxesPermis);
        });
      };

    }
  });
});