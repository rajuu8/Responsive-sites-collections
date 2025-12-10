let arr = [
    {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60" ,story:"https://plus.unsplash.com/premium_photo-1690397038570-7ec0cacb37f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",story:"https://plus.unsplash.com/premium_photo-1723701834298-86b6a4ef23d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60",story:"https://images.unsplash.com/photo-1586448325968-5ec7ba1da737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"},
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60",story:"https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60",story:"https://images.unsplash.com/photo-1739825353765-e25b96851cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"},
    {dp:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60" , story:"https://images.unsplash.com/photo-1555003118-9de18babe026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"}
]

let sum = '';

arr.forEach(function(elem,idx){
    sum += `
        <div class="sotry">
            <img id ="${idx}" src="${elem.dp}" alt="">
        </div>`;
})


let story = document.querySelector('.sotyea')
story.innerHTML = sum

let fullScreen = document.querySelector('.full-screen');
story.addEventListener('click',(dets)=> {
    fullScreen.style.display = "block"
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(() => {
    fullScreen.style.display = "none"
    fullScreen.style.transition = 'all ease 0.2s;'
        
    }, 3000);
})