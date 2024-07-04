let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;
function start() {
  timer = true;
  stopwatch();
}
function pause() {
  timer = false;
}
function reset() {
  timer = false;
  count = 0;
  sec = 0;
  hr = 0;
  min = 0;

  document.querySelector("#count").innerHTML = "00";
  document.querySelector("#sec").innerHTML = "00";
  document.querySelector("#min").innerHTML = "00";
  document.querySelector("#hr").innerHTML = "00";
}
function stopwatch() {
  if (timer) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    let countStr = count;
    let secStr = sec;
    let minStr = min;
    let hrStr = hr;

    if (count < 10) {
      countStr = "0" + count;
    }
    if (sec < 10) {
      secStr = "0" + sec;
    }
    if (min < 10) {
      minStr = "0" + min;
    }
    if (hr < 10) {
      hrStr = "0" + hr;
    }
    document.querySelector("#count").innerHTML = countStr;
    document.querySelector("#sec").innerHTML = secStr;
    document.querySelector("#min").innerHTML = minStr;
    document.querySelector("#hr").innerHTML = hrStr;

    setTimeout("stopwatch()", 10);
  }
}
