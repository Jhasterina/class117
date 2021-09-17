noseX = 0
noseY = 0

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/ZqS6kbhS/580b57fbd9996e24bc43bed5.png');
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
}

function draw() {
    
}

function take_snapshot() {
    save('SavedFilteredImage.png');
}
