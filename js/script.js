let cvsElem = document.getElementById('cvs');
cvsElem.style.border = '2px solid black';
//cvsElem.style.width
cvsElem.width = '500';
cvsElem.height = '500';
let ctx = cvsElem.getContext('2d');

//console.log(ctx);
//ctx.fillStyle = 'rgb(255, 0, 0)';
//ctx.strokeStyle = 'rgb(0,255, 0)';
//ctx.fillRect(100, 100, 100, 100);
//ctx.strokeRect(210, 100, 100, 100);

//ctx.beginPath();
/*for (let i = 0; i < 50; i++) {
    //ctx.beginPath();
    ctx.arc(300, 300, i * 5, 0 + Math.PI / 180 * i, Math.PI * 2 + Math.PI / 180 * i, false);
    //ctx.stroke();
}*/

// let tr = [[150, 150], [200, 50], [250, 150]];

// function draw() {
//     ctx.clearRect(0, 0, 500, 500);
//     tr[0][0] = 150 + (Math.random() * 2 - 1) * 10;  //+=
//     tr[0][1] = 150 +  (Math.random() * 2 - 1) * 10;
//     tr[1][0] = 200 +  (Math.random() * 2 - 1) * 10;
//     tr[1][1] = 50 +  (Math.random() * 2 - 1) * 10;
//     tr[2][0] = 150 +  (Math.random() * 2 - 1) * 10; 
//     tr[2][1] = 150 +  (Math.random() * 2 - 1) * 10;

//     ctx.beginPath();
//     ctx.moveTo(tr[0][0], tr[0][1]);
//     ctx.lineTo(tr[1][0], tr[1][1]);
//     ctx.lineTo(tr[2][0], tr[2][1]);
//     ctx.lineTo(tr[0][0], tr[0][1]);
//     ctx.stroke();

// }

// setInterval(draw, 10)


let rect = {};
rect.x = 0;
rect.y = 0;

let direction = 'KeyD';



function draw() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(rect.x, rect.y, 50, 50);
    if (isJump) {
        jump();
    }
}

let speed = 13;
let isJump = false;
let jumpCount = 10;

function jump() {
    // if (jumpCount === -10) {
    //     isJump = false;
    //     jumpCount = 10;
    // }
    rect.y -= jumpCount ** 3 / 50;
    jumpCount--;
    if (jumpCount < -10) {
        isJump = false;
        jumpCount = 10;
    }
    // jumpCount--;

}


function moveHandler(event) {
    if (event.code === 'KeyW') {
        if (rect.y - speed > 0) {
            rect.y -= speed;
        } else {
            rect.y = 0;
        }
        console.log('Up');
    } else if (event.code === 'KeyA') {
        if (rect.x - speed > 0) {
            rect.x -= speed;
        } else {
            rect.x = 0;
        }
        console.log('Left');
    } else if (event.code === 'KeyD') {
        //console.log(rect.x + speed > 500 - 50)
        if (rect.x + speed < 500 - 50) {
            rect.x += speed;
        } else {
            rect.x = 450;
        }
        console.log('Right');
    } else if (event.code === 'KeyS') {
        if (rect.y + speed < 500 - 50) {
            rect.y += speed;
        } else {
            rect.y = 450;
        }
        console.log('Down');
    } else if (event.code === 'Space' && isJump === false) {
        isJump = !isJump;
    }
}



setInterval(draw, 10);
document.addEventListener('keypress', event => moveHandler(event));


