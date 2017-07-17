let canvas;
let ctx;
let cir_x =

window.onload = function () {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');

    let vid = document.querySelector("#myVideo");
    vid.play();




    //drawball();
    window.addEventListener("mousemove",mouseXY);
    setInterval(startGame, 17);


}
let cir_X = 300;
let dir_X = 1;
let cir_Y = 300;
let R = 20;
let dir_Y = 1;
let bar_X =20;
let bar_Y =150;
let bar_W = 30;
let bar_H = 100;

function mouseXY(event){
    bar_Y = event.clientY;
}

function startGame(){
    drawball();
    drawbar();
}
function drawball(){
                //clearing everything from canvas
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.closePath();
    // 2. Drawing the circle in a new position
    ctx.beginPath();
    ctx.fillStyle="blue";
    ctx.arc(cir_X, cir_Y,20,0,2*Math.PI);
    //if(cir_X+R > canvas.width)// going off from the right edge
    //    dir_X*=-1;
    //if(cir_X-R<0)// going off from the left edge
//        dir_X*=-1
if (cir_X+R > canvas.width || cir_X-R<0 ) {
    dir_X*=-1
}
if (cir_Y+R > canvas.height || cir_Y-R<0 ) {
    dir_Y*=-1
}
if (cir_X - R <= bar_W+bar_W && (cir_Y>bar_Y) && cir_Y<bar_Y+bar_H)
dir_Y*=-1;

//hit box on bar

//
if(cir_X-R<= bar_W){
    dir_X*=-1
}
    cir_X+=2*dir_X;  // cir_X = cir_X+5 increasing object 5 pixels
    cir_Y+=8*dir_Y;
    ctx.fill();
    ctx.closePath();

}


function drawbar(){

    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.fillRect(bar_X,bar_Y ,bar_W,bar_H);
    ctx.fill();
    ctx.closePath();







}