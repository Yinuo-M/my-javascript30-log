const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

async function getVideo() {
	try {
		const mediaSource = await navigator.mediaDevices.getUserMedia({
			video: true,
			audio: false,
		});
		video.srcObject = mediaSource;
		video.play();
	} catch (error) {
		alert("Please enable webcam access!");
	}
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;

	function draw() {
		ctx.drawImage(video, 0, 0, width, height);
		let pixels = ctx.getImageData(0, 0, width, height);
		pixels = rgbSplit(pixels);
    console.log(pixels.data);
		ctx.globalAlpha = 0.1;
		ctx.putImageData(pixels, 0, 0);
	}
	return setInterval(draw, 20);
}

function takePhoto() {
	snap.currentTime = 0;
	snap.play();

	const data = canvas.toDataURL("image/jpeg");
	const link = document.createElement("a");
	link.href = data;
	link.setAttribute("download", "picture");

	const snapshot = document.createElement("img");
	snapshot.src = data;
	snapshot.alt = "A screenshot";
	link.prepend(snapshot);
	strip.prepend(link);
}

function redEffect(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i] += 100;
		pixels.data[i + 1] -= 50;
		pixels.data[i + 2] *= 0.5;
	}

	return pixels;
}

function rgbSplit(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i - 150] = pixels.data[i];
		pixels.data[i + 100] = pixels.data[i + 1];
		pixels.data[i + 200] = pixels.data[i + 2];
	}

	return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
