const ratingSum = document.querySelector(".rating__sum");
const inputs = document.querySelectorAll(".rating__star");

/* рейтинг по default из разметки */

const getDefault = () => {

    inputs.forEach(element => {
        if (element.checked) {
            ratingSum.textContent = `${element.value}.0`;
        }
    });
    return ratingSum.textContent;
};

/* пересчет рейтинга */

const getRating = () => {
  const ratingValue = getDefault();
  let array = [Math.floor(ratingValue)];
  inputs.forEach(element => {
      element.addEventListener('click', ()=> {
          let newIndex = element.value;
          array.push(+newIndex);
          console.log(array);
          let sum = array.reduce((accumulator, newIndex) => Number(accumulator) + Number(newIndex), 0);
          console.log(sum);
          const result = Number(sum) / array.length;
          console.log('ratingResult', result);
          const ratingResult = result.toFixed(1);
          ratingSum.textContent = ratingResult;
      })
  });
}

getRating();
