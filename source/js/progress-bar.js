const progressIndex = document.querySelector('.progress-bar__index');
const progressActive = document.querySelector('.progress-bar__active');

/* принимаем ширину полосы за 100% */

const SCALE = 100;

/* Обновляем процент шкалы Progress bar */

const updateProgress = (value) => {
  progressActive.style.width = value +'%';
  progressIndex.textContent = value + '%';
}

/* начальное значение ширины полосы берем из разметки */

let progressValue = Number(progressIndex.innerHTML.replace('%', ''));

/* Каждые 75 млс увеличиваем значение */

const getScale = setInterval(() => {
  progressValue++;
  updateProgress(progressValue);

  if (progressValue === SCALE) {
    clearInterval(getScale);
  }
}, 75);
