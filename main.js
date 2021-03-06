song="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,450);
canvas.position(500,200);
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log("posenet is initialized");
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    console.log("leftwristx ="+leftwristx);
    console.log("leftwristy ="+leftwristy);

    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("rightwristx ="+rightwristx);
    console.log("rightwristy ="+rightwristy);
  }
}

function draw(){
  image(video,0,0,600,450);  
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}