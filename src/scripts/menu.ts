const navbar = document.querySelector(".navbar")!;
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
	if (window.innerWidth > 768) return;

	if (window.scrollY > lastScrollTop) {
		navbar.classList.remove("bottom-0");
		navbar.classList.add("-bottom-full");
	} else {
		navbar.classList.remove("-bottom-full");
		navbar.classList.add("bottom-0");
	}

	lastScrollTop = window.scrollY;
});
