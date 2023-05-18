const buttonOpenModal = document.getElementById('openModal')

const modalWarpper = document.querySelector('.modal-warpper')

buttonOpenModal.onclick = function(){
    modalWarpper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    const IsEscKey = event.key === 'Escape'

if(IsEscKey){
    modalWarpper.classList.add('invisible')
}
})
