let img = document.querySelector("img#animationImg");

document.querySelector("img.menu-button").addEventListener("click", function() {
	TweenMax.to(img, 8, { top: -500 });
});
