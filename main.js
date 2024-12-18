document.addEventListener("DOMContentLoaded", function () {
	const callButtonSlide = document.getElementById("call-slide");
	const callButtonContainer = document.getElementById("call-container");
	const callButton = document.getElementById("call-button");
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

	const menuButton = document.querySelector(".menu-button");
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

	const infoBoxes = document.querySelectorAll("article");
	infoBoxes.forEach((infoBox) => {
		observer.observe(infoBox);
	});

});
