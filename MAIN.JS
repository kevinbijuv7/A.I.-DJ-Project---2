song1 = "";
song2 = "";
function preload() {
    song1 = loadSound("hall_of_fame.mp3");
    song2 = loadSound("ymca.mp3")
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPose);
}
function draw() {
    image(video, 0, 0, 600, 500)
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log("model loaded");
}
function gotPose(result) {
    
}