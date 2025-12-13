let main = document.querySelector('main');
let box = document.querySelector('.box');

main.addEventListener('mousemove', (dets) => {

    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    box.style.left = dets.x + 'px';
    box.style.top = dets.y + 'px';
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
});
