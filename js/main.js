const btn = document.querySelector('.show-modal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')


btn.addEventListener('click', function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

closeModal.addEventListener('click', function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
