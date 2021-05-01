const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
let timerId;

function timer(seconds) {
	clearInterval(timerId);
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);
	function count() {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		console.log(secondsLeft);
		if (secondsLeft < 0) {
			clearInterval(timerId);
			return;
		}
		displayTimeLeft(secondsLeft);
	}
	timerId = setInterval(count, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60)
		.toString()
		.padStart(2, "0");
	const remainderSeconds = (seconds % 60).toString().padStart(2, "0");
	const display = `${minutes}:${remainderSeconds}`;
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hours = end.getHours().toString().padStart(2, "0");
	const minutes = end.getMinutes().toString().padStart(2, "0");
	endTime.textContent = `Be Back At ${hours}:${minutes}`;
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

function startTimer() {
	timer(this.dataset.time);
}

document.customForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	this.reset();
});