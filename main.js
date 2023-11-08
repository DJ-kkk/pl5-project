function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

tint_color = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
   fill("red" );
   stroke("red");
   circle(50,50,80);
   circle(590,50,80);
   circle(590,400,80);
   circle(50,400,80);
   rectangle()
}

function take_snapshot(){
    save('student_name.png');
}

