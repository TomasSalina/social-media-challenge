const checkbox = document.querySelector('#checkbox')
let darkMODE = window.matchMedia('(prefers-color-scheme: dark)').matches 

if (darkMODE) {
  checkbox.setAttribute('checked', true)
} 

checkbox.addEventListener('change', function (event) {
  if (this.checked) {
    document.body.classList.remove('is-light-mode')
    document.body.classList.add('is-dark-mode')
  } else {
    document.body.classList.remove('is-dark-mode')
    document.body.classList.add('is-light-mode')
  }
})





