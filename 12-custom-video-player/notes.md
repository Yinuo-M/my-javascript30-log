# what I learnt

- The HTMLVideoElement API, including methods such as .play() and .pause(), and properties such as vid.currentTime, video.paused. I also learnt about video events like isplaying, progress and updateTime.
- The convenience of HTML dataset attributes.
- How to create a simple dragging interface using onmousedown, onmouseup and onmousemove.

# questions

- Why is togglePlay not working properly once the video is in fullscreen? Because HTML5 video controls are visible in fullscreen mode even if it's disabled in the HTML markup. To solve the problem, we need to understand shadowDOM. I will look into these two pages to understand what exactly is going on https://css-tricks.com/custom-controls-in-html5-video-full-screen/ https://javascript.info/shadow-dom
