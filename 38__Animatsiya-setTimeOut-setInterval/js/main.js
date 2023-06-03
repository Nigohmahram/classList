window.addEventListener('DOMContentLoaded', () => {
// // setTimeout(() => {
// //      console.log('text');
// // }, 1000);//1 yo'li eski

// setTimeout(logger, 1000);

// function logger () {
//      console.log('set time out');
// }//2 yo'li eski

//  const btn = document.querySelector('#btn');

// function myAnimation () { //myAnimation degan funksiya bor
//      const car = document.querySelector('.car');// car elementni olvoldik
//      let pos = 0;

//      const timerId = setInterval(frame, 10); //set interval nima qiladi har 10secondda frame ishga tushadi


//      function frame() {
//           if (pos == 700) {//pozitsiya 700ga teng yani yo'lni ohiri
//                clearInterval(timerId);
//           }else {
//                pos++;
//                car.style.left = pos + 'px';
//           }
//      }
// }
// btn.addEventListener('click', myAnimation);
//setInterval bir ishni malum bir vaqt ichida avtomatic qayta qayta bajaraveradi
//clearInterval setIntervali avtomatic ishlashini tohtatib beradi


     //#46. Function constructor
//       function Car(name, color) {
//           this.name = name;
//           this.color = color;
//           this.airBag = true;
//      }
//      const bmw = new Car('bmw', 'red');
//      console.log(bmw);
//console.log(Car);


// #47. Context this & Closure  //xar doim nimagadur qaram (osiladi)

     // function logger(a, b) {
     //      console.log(this);
     //      function sum() {
     //           return this.a + this.b;
     //      }
     // }
     // logger();
//(1) Oddiy Function Contectni yani this xar doim window global objectga qaram bo'ladi
     //Yani osiladi. Agarda Qat'i rejim yoqu bolsa(use strict) contect undifinedga teng


     //Closure
     // const a = 4;
     // function log() {
     //      console.log(a);
     // }
     // log();

//Contect thisobjectni ichidagi metodda obj ni o'ziga teng
     // const obj = {
     //      x: 10,
     //      y: 15,
     //      sum: function () {
     //           console.log(this);
     //      }
     // };
     // obj.sum();


     const btns = document.querySelector('#butto');
     this.addEventListener('click', function () {
          btns.style.width = '500px';
     });
});