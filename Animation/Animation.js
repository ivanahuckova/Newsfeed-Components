let img = document.querySelector("img#animationImg");

document.querySelector("img.menu-button").addEventListener("click", function() {
	TweenMax.to(img, 5, { top: -200, repeat: 1, ease: Power2.easeInOut, yoyo: true });
});
