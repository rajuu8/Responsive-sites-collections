let btn = document.querySelector('button');
let main = document.querySelector('main');
let h1 = document.querySelector('h1');

let arr = {
    models: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900",
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=900",
        "https://images.unsplash.com/photo-1521190339977-0e75f2d2d258?w=900",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900",
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900",
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=900",
        "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=900",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900",
        "https://images.unsplash.com/photo-1428930377079-45a584b6dd6b?w=900",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900",
        "https://images.unsplash.com/photo-1496346556741-1e6ec06fe944?w=900",
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=900"
    ]
};

main.addEventListener('mousemove', () => {

    let img = document.createElement('img');

    // Correct way to get random model image
    let index = Math.floor(Math.random() * arr.models.length);

    // Random position
    let x = Math.floor(Math.random() * 80);
    let y = Math.floor(Math.random() * 80);

    // Rotate
    let r = Math.floor(Math.random() * 360);

    // Scale
    let s = Math.random() * 1.5 + 0.5; // 0.5 - 2 scale

    img.src = arr.models[index];
    img.style.width = "50px";
    img.style.position = "absolute";
    img.style.top = x + "%";
    img.style.left = y + "%";
    img.style.rotate = r + "deg";
    img.style.transform = `scale(${s})`;
    img.style.borderRadius = "50%";

    main.appendChild(img);
});
