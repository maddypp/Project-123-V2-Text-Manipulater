function preload() {

}

function setup() {
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO);
    webcam.size(300,400);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes)
    
}

function draw() {

}

function modelloaded() {
    console.log("model is loaded");
}

function gotposes() {
    if (results > 0) {
        console.log(results);
    }
}