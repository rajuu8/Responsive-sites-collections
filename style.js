let h1 = document.querySelector('h1');

let aud = new Audio('./39.mp3');
let aud1 = new Audio('./40.mp3');

document.addEventListener('keydown', (e) => {
    h1.innerHTML = e.code;

    if (e.code === 'KeyA') {
        aud.currentTime = 0;
        aud.play();
    } 
    else if (e.code === 'KeyB') {
        aud1.currentTime = 0;
        aud1.play();
    }
});
