let count = document.querySelector('.count')

const buttons__dec = document.querySelector('.buttons__dec')
const buttons__reset = document.querySelector('.buttons__reset')
const buttons__inc = document.querySelector('.buttons__inc')

a=0
buttons__inc.addEventListener('click', function(){  
    a++
    document.querySelector('.count').innerText=a
})

buttons__dec.addEventListener('click', function(){  
    a--
    document.querySelector('.count').innerText=a
})

buttons__reset.addEventListener('click', function(){  
    a=0
    document.querySelector('.count').innerText=0
})
