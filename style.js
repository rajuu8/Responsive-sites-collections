let main = document.querySelector('main');
let cursor = document.querySelector('.cursor');


main.addEventListener('mousemove', (dext)=> {
    cursor.style.left = dext.x+'px'
    cursor.style.top = dext.y+'px'

})