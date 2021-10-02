canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//ROVER VARIABLES//
rover_width = 110;
rover_height = 120;
rover_x = 10;
rover_y = 10;
background_image = "mars secret base.jpg"
rover_image = "rover.png"
//ROVER VARIABLES END//
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

        if(keyPressed == '38') {
            
            up();
            console.log(up);

        }

        if(keyPressed == '40') {
            
            down();
            console.log(down);

        }

        if(keyPressed == '37') {
            
            left();
            console.log(left);

        }

        if(keyPressed == '39') {
            
            right();
            console.log(right());

        }
} 


function up() {

    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("WHEN UP ARROW IS PRESSED, x =" +rover_x + "y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {

    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("WHEN DOWN ARROW IS PRESSED, x =" +rover_x + "y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left() {

    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("WHEN LEFT ARROW IS PRESSED, x =" +rover_x + "y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {

    if(rover_x <= 500) {
        rover_x = rover_x + 10;
        console.log("WHEN RIGHT ARROW IS PRESSED, x =" +rover_x + "y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}