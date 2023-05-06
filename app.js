var ms = 0;
var s = 0;
var m = 0;
var h = 0;
var timer;

var display = document.querySelector('.display');
var startBtn = document.querySelector('.start');
var stopBtn = document.querySelector('.stop');
var resetBtn = document.querySelector('.reset');

function startTimer() {
  timer = setInterval(runTimer, 10);
}

function runTimer() {
  ms++;
  if (ms === 100) {
    ms = 0;
    s++;
  }
  if (s === 60) {
    s = 0;
    m++;
  }
  if(m === 60){
    h = 0;
    h++;
  }
  display.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  ms = 0;
  s = 0;
  m = 0;
  h = 0
  display.textContent = '00:00:00:00';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
