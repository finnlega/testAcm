const progressIndex = document.querySelector('.progress-bar__index');
const progressActive = document.querySelector('.progress-bar__active');

/* принимаем ширину полосы за 100% */

const SCALE = 100;

const getScale = () => {

    progressActive.style.width = '20%';
    const index = progressIndex.innerHTML.replace('%', '');

    let newIndex = Number(index);
    for (let i = newIndex; i < SCALE; i++) {
      newIndex += 1;
      progressActive.style.width = `${newIndex}%`;
      progressIndex.textContent =  `${newIndex}%`;
    }
}

setTimeout(getScale, 500);
