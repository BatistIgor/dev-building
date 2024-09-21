const adress = document.querySelector('#adress')
const floor = document.querySelector('#floor')
const flat = document.querySelector('#flat')
const buildPaths = document.querySelectorAll('.build-path')

console.log(adress,floor,flat,buildPaths)

buildPaths.forEach(build => {
   build.addEventListener('mouseover', ()=> {
    const dataAdress = build.getAttribute('data-adress')
    const dataFloor = build.getAttribute('data-floor-quantity')
    const dataFlat = build.getAttribute('data-flat-quantity')

    adress.innerHTML = dataAdress 
    floor.innerHTML = dataFloor 
    flat.innerHTML = dataFlat 
   })
})


const button = document.querySelector('.hamburger')
const menu = document.querySelector('.header__navigation')

button.addEventListener('click', ()=> {
    button.classList.toggle('is-active');
    menu.classList.toggle('header__navigation-active');
})