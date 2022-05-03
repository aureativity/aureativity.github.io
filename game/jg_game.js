var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0; 
var imgb, img1, img2, img3, img4;
var gameState = "begin";
var c;


function preload() {
 imgb = loadImage('https://aureativity.github.io/images/begin.png'); // start screen
 img1 = loadImage('https://aureativity.github.io/images/field.png'); // background
 img2 = loadImage('https://aureativity.github.io/images/strawberry.png'); 
 img3 = loadImage('https://aureativity.github.io/images/blueberries.png');
 img4 = loadImage('https://aureativity.github.io/images/raspberry.png');
 img5 = loadImage('https://aureativity.github.io/images/end.png'); // end screen
}

function setup() {
  createCanvas(800, 544);
  let c = color(255, 255, 255); // text color 
  fill(c);
  textAlign(CENTER);
  textSize(20); 
} // end of setup

function draw() {
  
  if(gameState == "begin"){
  background(imgb);
  beginGame(); 
  }
  if(gameState == "L1"){
    background(img1); 
  levelOne(); 
  }
  if(gameState == "L2"){
    background(img1); 
    levelTwo(); 
  }
  if(gameState == "L3"){
    background(img1); 
    levelThree();
  }
  if(gameState == "win"){
    background(img5); 
    win();
  }
  cursor('https://aureativity.github.io/images/hand.png', 20, 20);
  
 // text(("score: " + score), width/2, 40);
} // end of draw

function beginGame(){
  if (mouseIsPressed === true){
    gameState = "L1";
 
} // end of begin game
}
function levelOne(){
  text("~ level 1 ~", width/2, height-20); 
  text(("score: " + score), width/2, 40);
  var distToBall = dist(ballx+30, bally+30, mouseX, mouseY); 
  if(distToBall < ballSize/2){
    ballx = random(width-15);
    bally = random(height-15);
    score = score + 1;
  }
  
  if(score >= 5){
   gameState = "L2";
  }
  
 // line(ballx+20, bally+20, mouseX, mouseY); 
  // ellipse(ballx, bally, ballSize, ballSize);
  
  image(img2, ballx, bally);
  
} // end of level 1

function levelTwo(){
  text("~ level 2 ~", width/2, height-20); 
  text(("score: " + score), width/2, 40);
  var distToBall = dist(ballx+30, bally+30, mouseX, mouseY); 
  if(distToBall < ballSize/2){
    ballx = random(width-15);
    bally = random(height-15);
    score = score + 1;
  }
  
  if(score >= 15){
   gameState = "L3";
  }
  
 // line(ballx+20, bally+20, mouseX, mouseY); 
  // ellipse(ballx, bally, ballSize, ballSize);
  
  image(img3, ballx, bally);
  
} // end of level 2

function levelThree(){
  text("~ level 3 ~", width/2, height-20); 
  text(("score: " + score), width/2, 40);
  var distToBall = dist(ballx+30, bally+30, mouseX, mouseY); 
  if(distToBall < ballSize/2){
    ballx = random(width-15);
    bally = random(height-15);
    score = score + 1;
   // ballSize = ballSize - 5;
  }
  
  if(score >= 30){
    gameState= "win"; 
  }
  
 // line(ballx+20, bally+20, mouseX, mouseY); 
  // ellipse(ballx, bally, ballSize, ballSize);
  
  image(img4, ballx, bally);
  
} // end of level 3

function win(){

} // end win
