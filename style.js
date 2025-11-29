let allbtns = document.querySelectorAll('button')


allbtns.forEach((e)=> {
    e.addEventListener('click' , ()=> {
        if(e.innerHTML === 'add frnd') {
            e.innerHTML = 'remove'
        }
        else {
            e.innerHTML = 'add frnd'
        }
    })
})