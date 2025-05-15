import '../css/style.css'

const button = document.querySelector('.button');
const trans = document.querySelector('.trans_cover');



button.addEventListener('click', ()=> {
    trans.classList.add('active_button')
})