song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload()
{
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    { 
        console.log(results);
        leftWristX=[0].pose.leftWrist.x;
        leftWristY=[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        rightWristX=[0].pose.rightWrist.x;
        rightWristY=[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }
}
function draw(){
    image(video,0,0,500,500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}