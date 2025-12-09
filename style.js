let card =  document.querySelector('.card'); 
let i = document.querySelector('i');


card.addEventListener('dblclick', ()=> {
    i.style.transform = 'translate(-50%,-50%) scale(1)'
    i.style.opacity = 0.6

    setTimeout(() => {
    i.style.opacity = 0        
    }, 1000);
    setTimeout(() => {
    i.style.transform = 'translate(-50%,-50%) scale(0)'
    }, 2000);
})