var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0; 
var imgb, img1, img2, img3, img4, img5, img6, img7, img8, img9, imge, imgr, imgt, imgy, imgu, imgi, imgo;
var gameState = "begin";
var c;
var speed = 2;
var y=-20;
var x=200;


function preload() {
 imgb = loadImage('https://aureativity.github.io/images/start.png'); // start screen
 img1 = loadImage('https://aureativity.github.io/images/strawbfield.png'); // strawberry background
 img2 = loadImage('https://aureativity.github.io/images/strawberry1.png'); 
 img3 = loadImage('https://aureativity.github.io/images/farm.jpg'); // farm
 img4 = loadImage('https://aureativity.github.io/images/egg.png');
 img5 = loadImage('https://aureativity.github.io/images/lake.png'); // lake 
 img6 = loadImage('https://aureativity.github.io/images/water.png');
 img7 = loadImage('https://aureativity.github.io/images/wheatfield.png'); // wheatfiled
 img8 = loadImage('https://aureativity.github.io/images/wheat.png');
 img9 = loadImage('https://aureativity.github.io/images/bucket.png');
 imgr = loadImage('https://aureativity.github.io/images/milkfield.png'); // milkfield
 imgt = loadImage('https://aureativity.github.io/images/milk.png');
 imgy = loadImage('https://aureativity.github.io/images/sugarfield.png'); // sugarfield
 imgu = loadImage('https://aureativity.github.io/images/sugarcane.png');
 imgo = loadImage('https://aureativity.github.io/images/sugarbucket.png');
 imgi = loadImage('https://aureativity.github.io/images/kitchen.jpg'); // kitchen
 imgp = loadImage('https://aureativity.github.io/images/bowl.png');
 imge = loadImage('https://aureativity.github.io/images/baked.png'); // end screen
}

function setup() {
  createCanvas(1000, 600);
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
    background(img3); 
    levelTwo(); 
  }
  if(gameState == "L3"){
    background(img5); 
    levelThree();
  }
  if(gameState == "L4"){
    background(img7); 
    levelFour();
  }
  if(gameState == "L5"){
    background(imgr); 
    levelFive();
  }
  if(gameState == "L6"){
    background(imgy); 
    levelSix();
  }
  if(gameState == "L7"){
    background(imgi); 
    levelSeven();
  }
  if(gameState == "win"){
    background(imge); 
    win();
  }
  
  cursor('https://aureativity.github.io/images/hand.png', 20, 20);
  
} // end of draw

function beginGame(){
  if (mouseIsPressed === true){
    gameState = "L1";
 
} // end of begin game
}
function levelOne(){
  text("~ pick all the strawberries! ~", width/2, height-20); 
  text(("total ingredients: " + score), width/2, 40);
  var distToBall = dist(ballx+30, bally+30, mouseX, mouseY); 
  if(distToBall < ballSize/2){
    ballx = random(width-30);
    bally = random(height-30);
    score = score + 1;
  }
  
  if(score >= 15){
   gameState = "L2";
  }
  
  image(img2, ballx, bally);
  
} // end of level 1

function levelTwo(){
  text("~ collect the eggs as they appear! ~", width/2, height-20); 
  text(("total ingredients: " + score), width/2, 40);
  var distToBall = dist(ballx+30, bally+30, mouseX, mouseY); 
  if(distToBall < ballSize/2){
    ballx = random(width-30);
    bally = random(height-30);
    score = score + 1;
  }
  
  if(score >= 25){
   gameState = "L3";
  }
  
  image(img4, ballx, bally);
  
} // end of level 2

function levelThree(){
  text("~ catch all the water droplets! ~", width/2, height-20); 
  text(("total ingredients: " + score), width/2, 40);

  image(img9, mouseX-50, height-120, 100, 109)
    image(img6, x, y, 60, 88)


  y+= speed;
  if(y>height){
    screen =2

   }
  if(y>height-160 && x>mouseX-80 && x<mouseX+80){
    y= -80
    speed+= 0.4
    score+= 1

  }
  if(y== -80){
    pickRandom();
  }
  
  if(score >= 45){
    gameState= "L4"; 
  }
  
  
} // end of level 3

function pickRandom(){
  x= random(20,width-20)
}

function levelFour(){
  text("~ pick all the wheat! ~", width/2, height-20); 
  text(("total ingredients: " + score), width/2, 40);
  var distToBall = dist(ballx+30, bally+30, mouseX, mouseY); 
  if(distToBall < ballSize/2){
    ballx = random(width-30);
    bally = random(height-30);
    score = score + 1;
   // ballSize = ballSize - 5;
  }
  
  if(score >= 60){
    gameState= "L5"; 
  }
  
  
  image(img8, ballx, bally);
  
} // end of level 4

function levelFive(){
  text("~ gather all the filled milk bottles! ~", width/2, height-20); 
  text(("total ingredients: " + score), width/2, 40);
  var distToBall = dist(ballx+25, bally+50, mouseX, mouseY); 
  if(distToBall < ballSize/2){
    ballx = random(width-30);
    bally = random(height-30);
    score = score + 1;
  }
  
  if(score >= 70){
   gameState = "L6";
  }
  
  image(imgt, ballx, bally);
  
} // end of level 5

function levelSix(){
  text("~ catch all the sugarcane! ~", width/2, height-20); 
  text(("total ingredients: " + score), width/2, 40);

  image(imgo, mouseX-50, height-120, 100, 109)
    image(imgu, x, y, 60, 60)


  y+= speed;
  if(y>height){
    screen =2

   }
  if(y>height-160 && x>mouseX-80 && x<mouseX+80){
    y= -80
    speed+= 0.1
    score+= 1

  }
  if(y== -80){
    pickRandom();
  }
  
  if(score >= 85){
    gameState= "L7"; 
  }
  
  
} // end of level 6

function levelSeven(){
  text("~ put the mixed ingredients into the oven! ~", width/2, height-20); 
  text(("total ingredients: " + score), width/2, 40);
  var distToBall = dist(ballx+100, bally+78, mouseX, mouseY); 
  if(distToBall < ballSize/2){
    ballx = random(width-120);
    bally = random(height-120);
    score = score + 1;
  }
  
  if(score >= 86){
   gameState = "win";
  }
  
  image(imgp, ballx, bally);
  
} // end of level 7

function win(){

//  if (mouseIsPressed === true){
//    gameState = "begin";
  
} // end win
