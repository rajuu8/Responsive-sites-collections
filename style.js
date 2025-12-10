let btn = document.querySelector('button');
let main = document.querySelector('main')

// btn.addEventListener('click',()=> {

//     let x = Math.floor(Math.random()*100)
//     let y = Math.floor(Math.random()*100)


//     let c1 = Math.floor(Math.random()*256)
//     let c2 = Math.floor(Math.random()*256)
//     let c3 = Math.floor(Math.random()*256)

//     let colors = `rgb(${c1} , ${c2} ,${c3})`
    
//     let div = document.createElement('div')
//     div.style.height = '50px'
//     div.style.width = '50px'
//     div.style.position = 'absolute'
//     div.style.backgroundColor = colors


//     div.style.left = x + '%'
//     div.style.top = y + '%'


//     main.appendChild(div)
// })


btn.addEventListener('click' , ()=>{
    let div = document.createElement('div')    

    let x = Math.random()*90
    let y = Math.random()*90

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)


    div.style.height = '50px'
    div.style.width = '50px'
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.position = 'absolute'
    div.style.top = x + '%'
    div.style.left = y + '%'




    main.appendChild(div)
    
})