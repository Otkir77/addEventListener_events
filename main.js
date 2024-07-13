let plus = document.querySelector('.Addition')
let minus = document.querySelector('.Subtraction')
let cosn = document.querySelector('.Num')
let box = document.querySelector('.box')
plus.addEventListener( 'click' , () => {
    cosn.innerHTML++
})



minus.addEventListener( 'click' , ()=> {
    cosn.innerHTML--
})
