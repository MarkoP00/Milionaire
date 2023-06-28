const inputEls = document.querySelectorAll('.inputEl');

inputEls.forEach((input) => {
    input.addEventListener('click', () => {
        const spanElement = input.nextElementSibling;
        spanElement.style.backgroundColor = 'green';
        spanElement.style.color = '#fff';
    });
});


// const answerBtn = document.querySelectorAll('.btn1');
// const span = inputEls.nextElementSibling;
// answerBtn.forEach((btn) => {
//     btn.addEventListener('click', () =>{
//         span.style.backgroundColor = 'green';
//     })
// })


const answerBtns = document.querySelectorAll('.btn1');

answerBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.container');
    const inputEl = container.querySelector('.inputEl');
    const span = inputEl.nextElementSibling;
    if (inputEl && span) {
      span.style.backgroundColor = 'green';
      span.style.color = '#fff'
    }
  });
});
