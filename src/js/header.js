const refs = { 
closeMenuElem : document.querySelector('.btn-close-menu'),
openMenuElem : document.querySelector('.btn-open-menu'),
modalMenuElem : document.querySelector('.mob-menu'),
};

refs.closeMenuElem.addEventListener('click', ()=>{
  refs.modalMenuElem.classList.remove('is-visible');
})

refs.openMenuElem.addEventListener( 'click', ()=>{
    refs.modalMenuElem.classList.add('is-visible');
})

