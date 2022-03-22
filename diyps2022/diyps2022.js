var img;
var initials ='jg'; // my initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
// you can link to an image on your github account
  img = loadImage('https://aureativity.github.io/images/peach.png');
  img5 = loadImage('https://aureativity.github.io/images/strawbcake.png');
  img3 = loadImage('https://aureativity.github.io/images/basket.png');
  img2 = loadImage('https://aureativity.github.io/images/blanket.png');
  img1 = loadImage('https://aureativity.github.io/images/grass.png');
  img7 = loadImage('https://aureativity.github.io/images/burger.png');
  img4 = loadImage('https://aureativity.github.io/images/plate.png');
  img8 = loadImage('https://aureativity.github.io/images/bento.png');
  img9 = loadImage('https://aureativity.github.io/images/sushi.png');
  img0 = loadImage('https://aureativity.github.io/images/pink.png');
  imgB = loadImage('https://aureativity.github.io/images/purple.png');
}

function setup() {
createCanvas(800, 800);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1') {  // grass
    image(img1, 0, 0, 800, 800);
    
  } else if (toolChoice == '2') { // blanket
    image(img2, mouseX-270, mouseY-270);
    
  } else if (toolChoice == '3') { // basket
    image(img3, mouseX-120, mouseY-110);
    
  } else if (toolChoice == '4') { // plate
    image(img4, mouseX-100, mouseY-30);
    
  } else if (toolChoice == '5') { // strawberry cake
    image(img5, mouseX-75, mouseY-60);
    
  } else if (toolChoice == '6') { // peach
    image(img, mouseX-40, mouseY-40);
    
  } else if (toolChoice == '7') { // burger
    image(img7, mouseX-60, mouseY-60);
    
  } else if (toolChoice == '8') { // bento
    image(img8, mouseX-95, mouseY-55);
    
  } else if (toolChoice == '9') { // sushi
    image(img9, mouseX-90, mouseY-70);
    
  } else if (toolChoice == '0') { // pink boba
    image(img0, mouseX-50, mouseY-90);
    
  } else if (toolChoice == '-') { // purple boba
    image(imgB, mouseX-55, mouseY-90);
    
  } 
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
