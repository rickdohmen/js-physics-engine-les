const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let myArray = [];

canvas.width = width;
canvas.height = height;

let background = new GraphBackGround();

for(let i=0; i<numberOfPoints; i++){
    let 
}

background.draw();

let point = new Point(200,200,15,"red",true);

point.draw();

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clear(0,0,width,heigth);
    background.draw();
    point.draw();
}