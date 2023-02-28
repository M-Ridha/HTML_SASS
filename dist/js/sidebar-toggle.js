const menuToggleBtn = document.querySelector('.menu-toggle')
const sideBar = document.querySelector('.sidebar')


menuToggleBtn.addEventListener('click' , ()=>{
    sideBar.classList.toggle('open')
})