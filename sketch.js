function setup() {
    //creates a canvas 600 pixels wide
    //and 400 pixels high
    createCanvas(650, 400);
}

function draw() {
    //sky blue background
    background(135, 206, 235);
    //sun in top-right corner
    fill("yellow");
    circle(550, 50, 100);

    //grass on bottom half
    fill(74, 209, 56);
    rect(0, 200, 650, 200);

    //emojis
    textSize(70)

    text("Pongame 100 profe", 1, 120)
    text("💩", mouseX, mouseY) //kk
    text("𐐘💥╾━╤デ╦︻ඞා", 1, 200)
}