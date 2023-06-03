//Qo'shimcha script fayllarni bir biriga ulab olish
// function loadScript(src) {
// const script = document.createElement('script');
// script.src = script;
// script.async = false;
// document.body.append(script);
// }
// console.log('script/second.js');
// console.log('script/third.js');







// DOMContentLoaded vazifasi sayt ishga tushganda hamma narsa ishga tushgandan keyin rasmlarham javascript ishga tushishini taminlab beradi
document.addEventListener('DOMContentLoaded', () => {
const adv = document.querySelectorAll('.promo__adv img'),
    wrapper = document.querySelector('.promo__bg'),
    genre = wrapper.querySelector('.promo__genre'),
    seriesList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    inputVal = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector("[type='checkbox']");

  const seriesDB = {
    series: [
      'Omar',
      'The Final Legacy',
      'Ertugrul',
      'Magnificent Century',
      'The Great Seljuks: Guardians...',
    ],
  };
  //32 DARS Uyga vazifa
  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newSerius = inputVal.value;
    const favourite = checkbox.checked;

    if (newSerius) {
      if (newSerius.length > 18) {
        newSerius = `${newSerius.substring(0, 18)}...`;
      }
      if (favourite) {
        console.log('Sevimli serial qoshildi');
      }

          seriesDB.series.push(newSerius);
          sortArr(seriesDB.series);

          createSeriusList(seriesDB.series, seriesList);
    }

    event.target.reset();
  });

//1-) Vazifa
const deleteAdv = (arr) => {
  adv.forEach((item) => {
    item.remove();
  });
};

const makeChanges = (changes) => {
genre.textContent = 'comediya';
wrapper.style.backgroundImage = 'url("../img/1.jpg")';
};

const sortArr = (arr) => {
  arr.sort();
};

function createSeriusList(series, parent) {
  parent.innerHTML = '';
  sortArr(series);
series.forEach((item, idx) => {
  parent.innerHTML += `
       <li class="promo__interactive-item">${idx + 1} ${item}
         <div class="delete"></div>
       </li>
     `;
   });
   document.querySelectorAll('.delete').forEach((trash, idx) => {
    trash.addEventListener('click', () => {
      trash.parentElement.remove();
      seriesDB.series.splice(idx, 1);
      createSeriusList(series, parent);
    });
   });
  }
  sortArr(seriesDB.series);
  deleteAdv(adv);
  makeChanges();
createSeriusList(seriesDB.series, seriesList);



});
