document.querySelector(".hamburger")!.addEventListener("click", () => {
	document.querySelector(".nav-links")!.classList.remove("hidden");
});

document.querySelector(".hamburger-close")!.addEventListener("click", () => {
	document.querySelector(".nav-links")!.classList.toggle("hidden");
});
