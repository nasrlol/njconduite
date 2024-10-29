document.addEventListener("DOMContentLoaded", function () {
	const callButtonSlide = document.querySelector(".banner-button-call-slide");
	const callButtonContainer = document.querySelector(
		".call-button-container"
	);
	const callButton = document.querySelector(".banner-button-call");

	if (callButton) {
		callButton.addEventListener("click", function (event) {
			event.stopPropagation(); // Prevent event from bubbling up
			callButtonSlide.classList.toggle("expanded");
		});
	}

	document.addEventListener("click", function (event) {
		if (
			!callButtonContainer.contains(event.target) &&
			!callButtonSlide.contains(event.target) &&
			callButtonSlide.classList.contains("expanded")
		) {
			callButtonSlide.classList.remove("expanded");
		}
	});

	const menuButton = document.querySelector(".menuButton");
	const sideNav = document.getElementById("dropdownMenu");

	if (menuButton && sideNav) {
		menuButton.addEventListener("click", function () {
			sideNav.classList.toggle("open");
		});
	}

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				observer.unobserve(entry.target); // Stop observing once it's visible
			}
		});
	});

	const infoBoxes = document.querySelectorAll(".info-box");
	infoBoxes.forEach((infoBox) => {
		observer.observe(infoBox);
	});

	window.addEventListener("load", function () {
		if (True) {
			const infoBoxesPermis =
				document.querySelectorAll(".info-box-permis");
			infoBoxesPermis.forEach((BoxesPermis) => {
				observer.observe(BoxesPermis);
			});
		}
	});
});
