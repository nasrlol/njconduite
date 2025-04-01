document.addEventListener("DOMContentLoaded", function () {
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
