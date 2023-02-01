const btn = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')


// btn.addEventListener('click', function(){
//     modal.classList.remove('hidden')
//     overlay.classList.remove('hidden')
// })

closeModal.addEventListener('click', function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click',function(){
//         modal.classList.remove('hidden')
//         overlay.classList.remove('hidden')
//     })
    
// }

overlay.addEventListener('click', function (){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  })


  btn.forEach(function(item){
    item.addEventListener('click',function(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
  })