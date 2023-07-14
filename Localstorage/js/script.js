const email = document.querySelector('.email')
const firstName = document.querySelector('.name')
const formSubmit = document.querySelector('form')
const doc = document.querySelector('.doc')
const remove = document.querySelector('.remove')

//set Item yuklash ustanovka qilish
localStorage.setItem('name', 'Usmon')

//get item
// const name = localStorage.getItem('name')
// console.log(name);

//remove //clear
// remove.addEventListener('click', () => {
      // localStorage.removeItem('name')
      // localStorage.clear('name')
// })

formSubmit.addEventListener('submit', (e) => {
      e.preventDefault()

      const user = {
            email: email.value,
            name: firstName.value,
      }
      e.target.reset()
      console.log(user);

      localStorage.setItem('user', JSON.stringify(user))
})
const user = JSON.parse(localStorage.getItem('user'))
doc.textContent = `${user.name}`
// doc.textContent = `${name}`
