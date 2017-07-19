let canvas;
let ctx;
let vid;

window.onload = function () {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');

    vid = document.querySelector("#myVideo");
    //vid.play();

    let play = document.querySelector("#playBtn");
    play.addEventListener("click", ()=>{vid.play();});

    let pause = document.querySelector("#pauseBtn");
    pause.addEventListener("click", ()=>{vid.pause();});

    let tog = document.querySelector("#toggleBtn");
    tog.addEventListener("click", ()=>{
        // longer version
        // if (vid.paused == true){
        // vid.play();
        // } else {
        //     vid.pause();
        // }

        vid.paused ? vid.play() : vid.pause();
    });

    let dur = document.querySelector("#vidDuration");
    setInterval(()=>{
        dur.innerHTML = vid.currentTime +  " / " + vid.duration;
    })

    vid.currentTime = 19;




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
let endFlag = false;

function drawVid(){
    ctx.drawImage(vid,0,0,canvas.width,canvas.height);

}

function mouseXY(event){
    bar_Y = event.clientY;
}

function startGame(){
    drawball();
    drawbar();
    //drawVid();
}

function drawball(){
                //clearing everything from canvas
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.closePath();
    //ctx.clearRect(0,0,canvas.width, canvas.height);

    // 2. Drawing the circle in a new position
    ctx.beginPath();
    ctx.fillStyle="blue";
    ctx.arc(cir_X, cir_Y,20,0,2*Math.PI);

    if (cir_X+R > canvas.width) {
        dir_X*=-1
    }
    if(cir_X-R<0){
        // cir_X=0;
        // cir_Y=0;
        drawVid();
        endFlag = true;
        setTimeout(()=>{endFlag=false}, vid.duration);
    }
    if (cir_Y+R > canvas.height || cir_Y-R<0 ) {
        dir_Y*=-1
    }
    if ((cir_X-R <= bar_W*1.66) && (cir_Y>bar_Y && cir_Y<bar_Y+bar_H)){
        dir_X*=-1;
    }


    cir_X+=3*dir_X;  // cir_X = cir_X+5 increasing object 5 pixels
    cir_Y+=3*dir_Y;
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