
const menuBtn = document.getElementById('menu-btn')






const handleClick = () => {
   menuBtn.classList.add('menu-activate')
}


menuBtn.addEventListener('click', handleClick)