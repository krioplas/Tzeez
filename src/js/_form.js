const click = document.querySelectorAll('.content_reserve')
const closeFeedback = document.querySelectorAll('.feedback-forms__button')
const feedback = document.querySelector('.feedback')
const content = document.querySelector('.content')

click.forEach(function (btn) {
  btn.addEventListener('click', () => {
    feedback.classList.add('pageBurger')
    content.classList.add('background-menu')
  })
})

closeFeedback.forEach(function (btn) {
  btn.addEventListener('click', () => {
    feedback.classList.remove('pageBurger')
    content.classList.remove('background-menu')
  })
})
content.addEventListener('click', (event) => {
  if (event.target === content) {
    feedback.classList.remove('pageBurger')
    content.classList.remove('background-menu')
  }
})
