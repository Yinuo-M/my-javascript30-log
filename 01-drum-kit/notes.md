# what I learnt:

- The HTMLMediaElement interface and related methods and properties, such as .play and .pause.
- The transitionend event.

# questions:

- When using transitionend event to remove .playing (like in index-after.js), repeatedly pressing the same key causes the transitionend event to stop happening. As a result, the .playing class is 'stuck'. However, when using setTimeout (like in index-before.js), this is not a problem. Why is that?
