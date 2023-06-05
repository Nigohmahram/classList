document.addEventListener('DOMContentLoaded', () => {

// const btns = document.querySelectorAll('button');
// const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));

// btns[3].classList.add('blue', 'some', 'gul'); //class qo'shadi vergul qo'yib hohlagancha class qo'shsa bo'ladi
// btns[1].classList.remove('blue');// uchirib tashlaydi
// btns[1].classList.toggle('blue');// bor bo'lsa uchiradi  yo'q qiladi yo'q bo'lsa qo'shadi

// if (btns[0].classList.contains('blue')) {//divni ichida shunday class bor ekanini tekshirib beradi
//      console.log('Bor ekan');
// }

// btns[0].addEventListener('click', () => {
//      if (!btns[1].classList.contains('red')) {
//           btns[1].classList.add('red');
//      }else (btns[1].classList.remove('red'));
//      btns[2].classList.toggle('red');
//      console.log('click');
// });

// wrapper.addEventListener('click', () => {
//      console.log('Hello babay'); // Hamma joyni bossa consoleda click chiqadi
// });

// wrapper.addEventListener('click', (event) => {
//      if(event.target && event.target.classList.contains('red')) {//bu yerda ona classdan foydalanib qaysi elementda 'red' class list bo'lsa shu ishlasun deyilvotti [5 element]
//           console.log('Butto click');
//      }
// });

// btns.forEach((item) => {
//      item.addEventListener('click', () =>{//bu barcha knopkalarni bosilishini taminlaydi
//           console.log('Salom Yawwamagur');
//      });
// });

// btns[5].classList.add('gul');//class list qo'shish

// const btn = document.createElement('button');
// btn.classList.add('red');// bu yerda yangi btn nomli button class list qo'shilvotti va yuqoridadi [5 element]ga qo'shib qo'yilvotti agarda 'red' class o'rniga boshqa class bolganida bunday bu element bosilmagan bo'lar edi
// wrapper.append(btn);


// const place = confirm("Are you here?")
// console.log(place);

// const currentPlace = prompt("Where are you?", "Samar")
// console.log(currentPlace);

// const age = +prompt("How old a you", "18")
// console.log(typeof age);

// const favoriteColor = [];
// favoriteColor[0] = prompt("Whatas you color #1", "")
// favoriteColor[1] = prompt("Whatas you color #2", "")
// favoriteColor[2] = prompt("Whatas you color #3", "")
// console.log(favoriteColor);

// const channel = prompt("klassed youtuber")
// console.log(`https://youtube.com/${channel}`);

//incr decr
// let incr = 10;
// let decr = 10;
// console.log(incr++);
// console.log(decr--);

//console.log(5*5 == "25");//== tenglashtirish belgisi == qiymatni gina solishtiradi halos
//console.log(5*5 === "25");// === uchta barobar bolganda esa ham  number bolishi kerak ham qiymat teng bolishini solishtiradi

// && = va bu yerda hammasi true bo'lsa shunda true malumot turini olish mumkin
// || = yoki bu yerda bitta true malumot turi bolsaham true malumot turini olish mumkin
// ! = teskari qaytarib beradi true malumot turini false qilib beradi




// const age = +prompt("How old are you", "");
// if (age >= 25) {
//      console.log("Horror Films");
// }else if (age >= 18) {
//      console.log("Boevik films");
// }else {
//      console.log("Carton");
// }

//Ternory operator
// age >= 25 ? console.log("Horror films") : console.log("Carton");

//switch case
// const color = "red";
//Switch case hardoim Qat'i rejimda ishlaydi === shu tarzda bu == tarzda emas

// const color = prompt("red", "")

// switch(color) {
//      case "red":
//           console.log("Stop");
//           break;
//      case "green":
//           console.log("Goo");
//           break;
//      case "yellow":
//           console.log("Slowly");
//           break;
//      default:
//           console.log("Traffic jam");
//           break;
// }
// let start = 8;

//1--First
// while (start >= 1){
//    console.log(start);
//    start--;
// }

//2--Second
// do {
//      console.log(start);
//      start++;
// }while (start <= 10);

//3--Third
// for ( let i = 1; i <= 10; i++) {
//      console.log(start);
//      start++;
// }

// for (let i = 1; 1 <= 10; i++) {
//      if (i === 8) {
//           break;// break sindirib beradi
          //    continue;// bizga 8 ni ko'rsatmay beradi
//      }
//      console.log(i);
// }

// function calc(a, b) {
//      console.log(a + b);
// }
// calc(10, 1);
// const user = "Samar"
// console.log(user.substr(1, 2));





// function first(cb) {
//      //code
//      setTimeout(() => {
//           console.log(1);
//           cb()
//      }, 2000)
// }
// function second () {
//      //code
//      console.log(2);
// }
// first(second)

// function edu (subject, callback) {
//      console.log(`I wanna teach ${subject}`);
//      callback();
// }
// edu ("JavaScript", function () {
//      console.log("That's great");
// });

// const thief = {
//      jacket: "black",
//      height: 1.7,
//      colors: {
//           hair: "gray",
//           style: "curley",
//      },
// };
//
// howOut: function() {
//      console.log("eshikdan");
// }
// thief.howOut()

// let count = 0;
// for (let key in thief) {
// count++
     // if (typeof thief[key] === "object") {
     //      for (let i in thief[key]) {
     //           console.log(`Property ${i} has value  ${thief[key][i]}`);
     //      }
     // }else{
     //      console.log(`Property ${key} has value ${thief[key]}`);
     // }
// }
// console.log(count);
// console.log(Object.keys(thief).length);
// console.log(thief.height);
// delete thief.jacket;
// console.log(thief);
// const arr = [2, 3, 4, 5 ,6];
// arr.forEach(function (item, index, arr) {
//      console.log(`${index}: ${item} intro arr ${arr}`);
// })

// arr.pop()
// arr.push(7)

// arr.shift()
// arr.unshift(0)
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//      console.log(arr[i]);
// }

// const car = {
//      motor: 'X',
//      color: 'red',
//      isAirbag: true,
//      isSpeed: function () {
//           console.log(320);
//      }
// }
// const gm = {
//      isAirbag: false
// }
// Object.setPrototypeOf(gm, car)

// console.log(gm);


// const seriusDB = {
//      count: 0,
//      serius: {},
//      actors: {},
//      genres: [],
//      private: false,
//      start: function () {
//           seriusDB.count = +prompt("Nechta serial ko'rdingiz?", "");
//      while (
//           seriusDB.count == "" ||
//           seriusDB.count == null ||
//           isNaN(seriusDB.count)
//      ) {
//           seriusDB.count = +prompt("Nechta serial ko'rdingiz?", "");
//      }
//    },
//    rememberMySerius: function () {
//      for (let i = 0; i < 2; i++) {
//           const a = prompt("Oxirgi ko'rgan serialingiz?"),
//           b = prompt("Nechi baxo berasiz?");
//           if ( a != null && b != null && a != "" && b != "") {
//                seriusDB.serius[a] = b;
//                console.log("done");
//           }else {
//                console.log("Error");
//                i--;
//           }
//      }
// },
// detecLevelSerius: function (count) {
//      if (count <= 5) {
//           console.log("Kam serial ko'ribsiz");
//      }else if(count > 5 && count <= 10 ) {
//           console.log("Siz classik tomoshabin ekansiz");
//      }else{
//           console.log("Siz serialchi zvezda ekansiz");
//      }
// },
// showDb: function () {
//      if (!seriusDB.private) {
//           console.log(seriusDB);
//      }
// },
// visileDB: function() {
//  if (seriusDB.private) {
//      seriusDB.private = false
//  }else {
//      seriusDB.private = true
//  }
// },
// writeGenres: function() {
//      for (let i = 0; i <= 2; i++) {
//           const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);

//           if (genre === '' || genre === null ) {
//                console.log("Siz noto'g'ri ma'lumot kiritdingiz");
//                i--
//           }else{
//                seriusDB.genres[i] = genre;
//           }
//      }
//      seriusDB.genres.forEach((item, idx) => {
//           console.log(`Yaxshi ko'rgan janringiz ${idx + 1} - nomi ${item}`);
//      })
// },
// };

// to string
//--1
// console.log(typeof String(4));
//--2
// console.log('samar' + 21);
// const youtubeChanel = 10
// console.log('youtube.com/channel/' + youtubeChanel);

// to number
//--1
// console.log(typeof Number('4'));
//--2
// console.log(typeof + '5');
//--3
// console.log(typeof parseInt('15'));

// const box = document.getElementById('box')
// console.log(box);

// const buttons = document.getElementsByTagName('button')[1]
// // console.log(buttons);

// const circles = document.getElementsByClassName('circle')[0]
// // console.log(circles);

// const elsHeats = document.querySelectorAll('.heart')[0];
// console.log(elsHeats);
// elsHeats.forEach((item) => {
//      console.log(item);
// });

// const elBox = document.querySelector('#box')

// console.log(elBox);
// elBox.style.backgroundColor = 'red'
// elBox.style.height = '100px'
// elBox.style.width  = '100px'

// const elApp = document.querySelector('.app')
// const elsButtons = elApp.querySelectorAll('button')
// elsButtons[0].style.width = '1000px'

// const elsCircile = document.querySelectorAll('.circle')
// elsCircile[0].style = "background-color :green; width: 100px; height: 100px;"
// elsCircile[1].style.backgroundColor = "aqua"
// elsCircile[2].style.backgroundColor = "blue"

// const elsHeart = elApp.querySelectorAll('.heart')

// for ( let i = 0; i < elsHeart.length; i++) {
//      elsHeart[i].style.backgroundColor = 'aqua';
// }

// elsHeart.forEach((item) => {
//      item.style.backgroundColor = 'aqua';
// });

// const elsbtn = document.createElement('button')
// const text = document.createTextNode('I am text')
// document.body.append(elsbtn);

// const elCircleWrapper = document.querySelector('.circle__wrapper')
// const myCircle = document.createElement('div')
// myCircle.classList.add('circle')
// elCircleWrapper.append(myCircle)
// elCircleWrapper.(myCircle)
// elsCircile[0].before(myCircle)
// elCircleWrapper.append(myCircle)
// elsCircile[1].remove()
// myCircle.innerHTML = '<pre>bugun</pre>'
// myCircle.textContent = 'E'



//Reklama blocklarini olib tashlash
// const elPromoAdv = document.querySelector('.promo__adv')
// const elsImg = elPromoAdv.querySelectorAll('img')
// elsImg.forEach((item) => {
     // item.remove()
// });
// elsImg[0].remove()
// elsImg[1].remove()
// elsImg[2].remove()
// elsImg[3].remove()

//Drama so'zini comediyaga o'zgartirish
//  const elPromoGenre = document.querySelector('.promo__genre')
//  elPromoGenre.textContent = 'Comediya'


 //Backgraund imgni o'zgartirish
//  const elPromoBj = document.querySelector('.promo__bg')
//  elPromoBj.style.backgraundImage = "url('./img/1.jpg')";

 //Ustoz bilan qilganda
const elsAdv = document.querySelectorAll('.promo__adv img'),
      elWrapper = document.querySelector('.promo__bg'),
      elGenre = document.querySelector('.promo__genre'),
      elSeriesList = document.querySelector('.promo__interactive-list'),
      elAddForm = document.querySelector('.add'),
      elInputVal = elAddForm.querySelector('.adding__input'),
      elCheckbox = document.querySelector("[type='checkbox']")


      const seriusDB = {
          serius: [
               'Omar',
               'The Final Legacy',
               'Ertugrul',
               'Magnificent Century',
               'The Great Seljuks: Guardians...',
          ]
      }
      // Submit knopkani refresh holatini tohtatish
      elAddForm.addEventListener('submit', (event) => {
          event.preventDefault()

          let newSerius = elInputVal.value
          const favorite = elCheckbox.checked

          if (newSerius) {
               // 18ta harfdan kop bolsa uchta nuqta quyib beradi
               if (newSerius.length > 18 ) {
                    newSerius = `${newSerius.substring(0, 18)}...`
               }
               if (favorite) {
                    console.log("Sevimli serialingiz qo'shildi")
               }
               console.log(favorite);
               seriusDB.serius.push(newSerius)
               sortArr(seriusDB.serius)

               createSeriusList(seriusDB.serius, elSeriesList)
          }


          // malumot kirishi tugallangandan keyin oldingi bo'sh holatiga qaytadi
          event.target.reset()
      })

            // film ro'yxatini js yordamida quyish kerak
      function createSeriusList(series, parent) {
          parent.innerHTML = ''
          series.forEach((item, idx) => {
               parent.innerHTML +=
               `<li class="promo__interactive-item">${idx + 1} ${item}<div class="delete"></div></li>`
           })
          }


          //bitta fnksionga olib quyish
          const deleteAdv = (arr)  => {
               //Reklamani uchirish
      elsAdv.forEach((item) => {
          item.remove()
     })
          }


          const makeChanges = () => {
               //Dramani so'zini Comediya so'ziga o'zgartirish kerak
      elGenre.textContent = 'Comediya'

      //backgraundni boshqa rasmga o'zgartirish
      elWrapper.style.backgroundImage = "url('img/1.jpg')"
          }

          const sortArr = (arr) => {
               arr.sort()
          }

          //Alfavit bo'yicha ishga tushirish
          sortArr(seriusDB.serius)
      createSeriusList(seriusDB.serius, elSeriesList)
      deleteAdv(elsAdv)
      makeChanges()
      //buttonlar knopkalar bilan ishlash
     //  const elBlock = document.querySelectorAll('.block')

      //knopka bosishning birinchi yo'li
     //  elBlock[0].onclick = function () {
     //      alert('Click from js')
     //  };

     // 2-- doimi foydalaniladigan yo'llari
     // elBlock[0].addEventListener('click', () => {
     //      alert('click')
     // })

     // elBlock[0].addEventListener('mouseenter', (event) => {
          // alert('Hover')
          // console.log(event.target);
          // event.target.remove()
     // })

     // let i = 0
     // const addElement = (event) => {
     //      i++
     //      if (i === 3) {
     //           elBlock[0].removeEventListener('click', addElement)
     //      }
     //      console.log(i);
     // }
     // elBlock[0].addEventListener('click', addElement)


     // button ga o'xshagan All kodlarni olishda forEach yordamida interatsiya qilib olish kerak boladi  shundada har bir knopkaga massiv berib utirish shart bolmaydi pastda misol korsatilgan MISOL

     // elBlock.forEach((item) => {
     //      item.addEventListener('click', () => {
     //           console.log(1);
     //      })
     // })





     // const deleteElement = (event) => {
     //      event.target.remove()
     // }
     // elBlock[0].addEventListener('click', deleteElement)

     // elBlock[0].removeEventListener('click', deleteElement)
});