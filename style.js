let btnall = document.querySelectorAll('button');

btnall.forEach((elem)=> {
    elem.addEventListener('click' ,()=> {


    if(elem.innerHTML == 'Add frnd') {
        elem.innerHTML = 'Remove frnd'

    } else{
        elem.innerHTML = 'Add frnd'

    }
    })
    
})
