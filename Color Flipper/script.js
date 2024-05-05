const box = document.querySelector('.box')
const btn = document.querySelector('.btn')
const bgName = document.querySelector('.bgName')
let colors = ['red','blue', 'orange', 'maroon', 'purple', 'fuchsia', 'green', 'lime', 'aqua', 'teal', 'brown', 'darkgray'];

btn.addEventListener('click', function(){
    
    const randomColor = colors[Math.floor(colors.length * Math.random())];
    document.body.style.backgroundColor=randomColor
    bgName.innerText = randomColor
    
})








