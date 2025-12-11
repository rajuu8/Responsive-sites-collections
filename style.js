let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let inner = document.querySelector('.inner');

let grow = 0

btn.addEventListener('click',()=> {
    btn.style.pointerEvents = 'none'
    
    let num = 50 + Math.floor(Math.random()*50)

   let i =  setInterval(()=> {
        grow++;
        h1.innerHTML = grow + '%'
        inner.style.width = grow + '%'
        btn.style.opacity = 0.9


    },num)

    setTimeout(() => {
        clearInterval(i)
    }, num*100);
     

})