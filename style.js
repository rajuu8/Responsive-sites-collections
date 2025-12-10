let arr = [
    {
        team:'CSK',
        primary:'yellow',
        secondary: 'blue'
    }, {
        team:'RCB',
        primary:'red',
        secondary: 'black'
    }, {
        team:'MI',
        primary:'blue',
        secondary: 'gold'
    }, {
        team:'KKR',
        primary:'purple',
        secondary: 'green'
    }, {
        team:'COD',
        primary:'yellow',
        secondary: 'blue'
    }
]

let main = document.querySelector('main');
let card = document.querySelector('.card');
let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
let a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a].team
    main.style.backgroundColor = arr[a].primary
    card.style.backgroundColor = arr[a].secondary

})