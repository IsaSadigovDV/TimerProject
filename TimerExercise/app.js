const stopwatch = document.getElementById("stopwatch");
const timer = document.getElementById("timer");
const startBtn = document.getElementById("start-button");
const stopBtn = document.getElementById("stop-button");
const resetBtn = document.getElementById("reset-button");

let [milliseconds, seconds, minutes] = [0, 0, 0];
let int = null;

startBtn.addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
    resetBtn.disabled = true;
  }

  int = setInterval(displayTimer, 10);
  stopBtn.disabled = false;
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(int);
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes] = [0, 0, 0];
  timer.innerHTML = `00:00:000`;
  startBtn.disabled = false;
  resetBtn.disabled = true;
});

function displayTimer() {
  milliseconds += 10;

  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  timer.innerHTML = `${m}:${s}:${ms}`;
}
