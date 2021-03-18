window.addEventListener("keydown", drum);

function drum(event) {
	let key = document.querySelector(`div[data-key=${event.code}]`);
	if (!key) return;

	key.classList.add("playing");
	setTimeout(() => key.classList.remove("playing"), 100);

	let audios = document.querySelectorAll("audio");
	audios.forEach((audio) => {
		audio.pause();
		audio.currentTime = 0;
	});

	let newAudio = document.querySelector(`audio[data-key=${event.code}]`);
	newAudio.play();
}
