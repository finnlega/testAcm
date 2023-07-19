/* Обновляем процент шкалы Progress bar */

const updateProgress = (value) => {

  const progressIndex = document.querySelector('.progress-bar__index');
  const progressActive = document.querySelector('.progress-bar__active');

  progressActive.style.width = value +'%';
  progressIndex.textContent = value + '%';
}

/* начальное значение ширины полосы */

let progressValue = 20;

/* принимаем ширину полосы за 100% */

const SCALE = 100;

/* Каждые 100 млс увеличиваем значение */

const getScale = setInterval(() => {
  progressValue++;
  updateProgress(progressValue);

  if (progressValue === SCALE) {
    clearInterval(getScale);
  }
}, 75);
