leftwristY= "";
leftwristX= "";

rightwristY= "";
rightwristX= "";

scoreleft= "";
scoreright= "";

function preload() {

}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(550,150);
    video= createCapture(VIDEO);
    video.hide()

    modelattacher = ml5.poseNet(video, ModelLoaded)
modelattacher.on("pose" , gotPoses);
}
function draw() {
    image(video , 0 ,0, 500, 500);
    fill("grey");
    stroke("grey");

    if (leftwristX > 0 && leftwristX < 250) {
        document.getElementById("greaterman").src= "61f-XLjixoL._SX522_-removebg-preview.png";
    }
    if (leftwristX > 250 && leftwristX < 500) {
        document.getElementById("greaterman").src= "output_5zE9Rg.gif";
    }
    if (rightwristX > 0 && rightwristX < 250) {
        document.getElementById("greaterman").src= "61f-XLjixoL._SX522_-removebg-preview.png";
    }
    if (rightwristX > 250 && rightwristX < 500) {
        document.getElementById("greaterman").src= "output_5zE9Rg.gif";
    }
    }
    function ModelLoaded() {
    console.log("MODEL IS LOADED MAM/SIR");        
    }

    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
            leftwristX = results[0].pose.leftWrist.x;
            rightwristX = results[0].pose.rightWrist.x;
    
            leftwristY = results[0].pose.leftWrist.y;
            rightwristY = results[0].pose.rightWrist.y;
    
            scoreleft= results[0].pose.keypoints[9].score;
            scoreright= results[0].pose.keypoints[10].score;
        }
    }
