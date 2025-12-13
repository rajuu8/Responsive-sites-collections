let card = document.querySelector('.card');
let i = document.querySelector('i');


card.addEventListener('dblclick', ()=> {
    
    i.style.opacity = 0.8
    i.style.transform = `translate(-50%, -50%) scale(3) `

    setTimeout(() => {
    i.style.transform = `translate(-50%, -1500%) scale(3)  rotate(-60deg)`
    }, 800);
    setTimeout(() => {
    i.style.opacity = 0

    }, 1000);

    setTimeout(() => {
    i.style.transform = `translate(-50%, -50%) scale(0) rotate(-60deg) `

    }, 1200);
})