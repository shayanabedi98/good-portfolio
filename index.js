const h3 = document.querySelector('h3')

h3.addEventListener('click', () => {
    h3.style.color = 'red'
    h3.style.fontSize = '50px'
    h3.innerHTML = 'Nice!'
    h3.style.transition = '3s'
})