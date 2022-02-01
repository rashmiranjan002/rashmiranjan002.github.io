Burger = document.querySelector('.hamburger')
navigation = document.querySelector('.navigation')
navList = document.querySelector('.navList')

Burger.addEventListener('click', ()=>{
    navigation.classList.toggle('h-nav-resp');
    setTimeout(() => {
        navList.classList.toggle('v-class-resp');
    }, 100);
})

const burger = document.querySelector('.hamburger');
let menuOpen = false;
burger.addEventListener('click', ()=> {
    if(!menuOpen) {
        burger.classList.add('open');
        menuOpen = true;
    }
    else {
        burger.classList.remove('open');
        menuOpen = false;
    }
});
