

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
const hidden = document.querySelector('.hidden');

for(let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

btnCloseModal.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        if(!modal.classList.contains('hidden')) {
            modal.classList.add('hidden')
            overlay.classList.add('hidden')
        }
    }
})


