let btn = document.querySelector('button');
let main = document.querySelector('main')
let h1 = document.querySelector('h1')


let arr = ['raju' ,'abishek', 'alok' , 'om' , 'arpan']

btn.addEventListener('click' , ()=>{
    let h1 = document.createElement('h1')
    let a = Math.floor(Math.random()*arr.length)

    // Random
    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)

    // Rotate
    let r = Math.floor(Math.random()*361)
    // sclae
    let s = Math.random()*4


    
    h1.innerHTML = arr[a]
    h1.style.position = 'absolute'
    h1.style.top = x + '%'
    h1.style.left = y + '%'
    h1.style.rotate = r + 'deg'
    h1.style.scale = s 






    main.append(h1)
})