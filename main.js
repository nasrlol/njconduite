document.addEventListener("DOMContentLoaded", function () {

  const callButtonSlide = document.querySelector(".banner-button-call-slide");
  const callButtonContainer = document.querySelector(".call-button-container");
  const callButton = document.querySelector(".banner-button-call");



  // Toggle the call slide when clicking the container (which includes the call button)
  callButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from bubbling up
    callButtonSlide.classList.toggle("expanded");
  });

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
});

document.querySelector('.menuButton').addEventListener('click', function() {
  const sideNav = document.getElementById('dropdownMenu');
  if (sideNav.classList.contains('open')) {
    sideNav.classList.remove('open');
  } else {
    sideNav.classList.add('open');
  }
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  })
})

const infoBoxes = document.querySelectorAll('.info-box' );

infoBoxes.forEach(infoBox => {
  observer.observe(infoBox);

});

const infoBoxesPermis = document.querySelectorAll('.info-box-permis');

infoBoxesPermis.forEach(BoxesPermis => {
  observer.observe(BoxesPermis);

});

