const player = document.querySelector(".player");
const video = player.querySelector(".player__video");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");
const fullscreenButton = player.querySelector(".fullscreen");

function togglePlay() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function updateButton() {
	const icon = this.paused ? "►" : "| |";
	toggle.textContent = icon;
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = parseFloat(this.value);
}

function handleProgress() {
	progressBar.style.width = (video.currentTime / video.duration) * 100 + "%";
}

function updateProgress(e) {
	const progressRatio =
		(e.clientX - progress.getBoundingClientRect().left) / progress.offsetWidth;
	video.currentTime = video.duration * progressRatio;
}

function makeFullscreen() {
	video.requestFullscreen();
}

toggle.onclick = togglePlay;
video.onclick = togglePlay;
//create separate functions for icon change because they might change for reasons other than toggle being clicked.
video.onplay = updateButton;
video.onpause = updateButton;
video.ontimeupdate = handleProgress;

let mousedown = false;
progress.onclick = updateProgress;
progress.onmousedown = () => (mousedown = true);
progress.onmouseup = () => (mousedown = false);
progress.onmousemove = (e) => {
	if (mousedown) {
		updateProgress(e);
	}
};
skipButtons.forEach((button) => (button.onclick = skip));
ranges.forEach((range) => (range.oninput = handleRangeUpdate));
fullscreenButton.onclick = makeFullscreen;
