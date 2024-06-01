
const menuBtn = document.getElementById('menu-btn')






const handleClick = () => {
   menuBtn.classList.toggle('menu-activate')
}


menuBtn.addEventListener('click', handleClick)