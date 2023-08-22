const menuClick = document.querySelector('.head-info_burger')
const pageFeedback = document.querySelector('.page-burger')
const closeBurger = document.querySelector('.logo-burger__back')
const content = document.querySelector('.content')

menuClick.addEventListener('click', () => {
  pageFeedback.classList.add('pageBurger')
  content.classList.add('background-menu')
})
closeBurger.addEventListener('click', () => {
  pageFeedback.classList.remove('pageBurger')
  content.classList.remove('background-menu')
})

content.addEventListener('click', (event) => {
  if (event.target === content) {
    pageFeedback.classList.remove('pageBurger')
    content.classList.remove('background-menu')
  }
})
