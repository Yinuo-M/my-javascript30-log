window.addEventListener("keydown", drum);

function drum(event) {
	let key = document.querySelector(`div[data-key=${event.code}]`);
	if (!key) return;

	key.classList.add("playing");

	let audio = document.querySelector(`audio[data-key=${event.code}]`);
	audio.currentTime = 0;
	audio.play();
}

let keys = document.querySelectorAll(".key");
keys.forEach((key) => {
	key.addEventListener("transitionend", removePlaying);
});

function removePlaying(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
	console.log(e);
}
