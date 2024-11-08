window.addEventListener("load", function () {
  const splash = document.getElementById("mainSplash");

  splash.addEventListener("click", function () {
    splash.classList.add("splashscreen-hidden");
  });

  // Hide splash screen after 2 seconds if not clicked
  setTimeout(function () {
    if (!splash.classList.contains("splashscreen-hidden")) {
      splash.classList.add("splashscreen-hidden");
    }
  }, 1800);
});
