
const hamburguerButton = document.getElementById('hamburguer__button');
const nav = document.getElementById('nav')
const buttonContact = document.getElementById('button-border-black');
const body = document.getElementById('body');

hamburguer__button.addEventListener('click', ()=>{
  nav.classList.toggle("open");
  buttonContact.classList.toggle("open");
  body.classList.toggle("open__body");
})


window.addEventListener('resize', ()=>{
  let newWidth = window.innerWidth;
  if( newWidth >= 768 ) {
    body.classList.remove("open__body");
    nav.classList.remove("open");
    buttonContact.classList.remove("open");
  }
})
