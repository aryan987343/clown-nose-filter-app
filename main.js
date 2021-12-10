noseX = 50
noseY = 50

function preload() {
clownNose = loadImage("https://i.postimg.cc/g0XmbH9b/clown-nose-image.png")
}

function setup() {
Canvas = createCanvas(300, 300);
Canvas.center();
video = createCapture(VIDEO);
video.hide();

pose = ml5.poseNet(video, model);

pose.on("pose", gotresult);
}

function gotresult(result) {
    if (result.length > 0) {
console.log(result);

noseX = result[0].pose.nose.x;
noseY = result[0].pose.nose.y;

console.log(result[0].pose.nose.x);

console.log(result[0].pose.nose.y);
 }
}

function model() {
    console.log("model has loaded");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownNose,noseX,noseY,30,30)
    /*fill(255,0,0)
    stroke(255,0,0)
    circle(noseX,noseY,20)*/
}

function take_snapshot() {
    save("cloun_nose_app.png");
}