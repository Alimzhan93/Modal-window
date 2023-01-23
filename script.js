// get all nece
const modalShowbtns = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')


// modalShowbtns.addEventListener('click', ()=>{
//    setTimeout( () => {
//       modal.classList.remove('hidden')
//       overlay.classList.remove('hidden')
//    },500)
   
// })

 for (let i = 0; i < modalShowbtns.length; i++){
    modalShowbtns[i].addEventListener('click', function(){
      setTimeout( () => {
         modal.classList.remove('hidden')
         overlay.classList.remove('hidden')
      },500)
    })
 }

 closeModal.addEventListener('click', () =>{
         setTimeout ( () =>{
            modal.classList.add('hidden')
            overlay.classList.add('hidden')
         }, 500)
 })

 overlay.addEventListener('click', function (){
   modal.classList.add('hidden')
   overlay.classList.add('hidden')
 })