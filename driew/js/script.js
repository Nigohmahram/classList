'use strict';

const btn = document.querySelector('#btn');

let timeId;
let i = 0;
function myAnimation() {
  const car = document.querySelector('.car')
  let pos = 0;

  const timeId = setInterval(frame, 10)

  function frame() {
    if (pos === 700) {
      clearInterval();
    }else{
      console.log(pos);
      pos++;
      car.style.left = pos + 'px';
    }
  }
}
btn.addEventListener('click', myAnimation)
// btn.addEventListener('click', () => {

  //  timeId =  setTimeout(logger, 1000)
  //  timeId =  setInterval(logger, 500)
// })
// const timeId =  setTimeout(logger, 1000)
// clearInterval(timeId)
// function logger() {
//   if ( i === 3) {
//     clearInterval(timeId)
//   }
//   console.log('set time out');
//   i++;
//   console.log(i);
// }

// let id = setTimeout(function log() {
//   console.log('hello');
//   id = setTimeout(log, 500)
// }, 500)