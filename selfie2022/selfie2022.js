function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(180, 212, 190);
  
  noStroke();
  
  fill(89, 51, 29);
  ellipse(300, 400, 380, 700);  // back hair
  ellipse(300, 240, 380, 380);  // back hair
  ellipse(300, 230, 380, 380);  // back hair
  
  fill(255, 186, 192);
  ellipse(300, 600, 350, 400);  // body
  
  fill(255, 207, 156);
  ellipse(300, 265, 280, 335);  // head
  
  fill(255, 107, 126, 30);
  ellipse(220, 300, 65, 35);  // blush left
  ellipse(375, 300, 65, 35);  // blush right
  
  fill(242, 181, 114);
  triangle(280, 310, 300, 260, 300, 325);  // nose
  
  fill(89, 51, 29);
  ellipse(230, 260, 30, 30);  // left iris
  ellipse(365, 260, 30, 30);  // right iris
  
  fill('black');
  ellipse(228, 260, 20, 20);  // left pupil
  ellipse(363, 260, 20, 20);  // right pupil
  
  fill('white');
  ellipse(224, 256, 10, 10);  // left eye shine
  ellipse(359, 256, 10, 10);  // right eye shine
  
  fill(74, 39, 21);  //  hair color
  quad(205, 212, 257, 210, 260, 220, 205, 220);  //left eyebrow
  quad(338, 210, 393, 212, 393, 220, 336, 220);  //right eyebrow

  push();
  strokeWeight(2.5);
  stroke(74, 39, 21);
  noFill();
  arc(234, 275, 70, 60, 3.72699081699, -1);  // left eye
  arc(360, 274.5, 70, 60, 4.18879020479, 5.69778714378);  // right eye
  
  stroke(74, 39, 21);
  line(212, 251, 204, 249);  // left eyelash
  line(382, 251, 391, 249);  // right eyelash
  
  stroke(74, 39, 21);
  arc(300, 340, 80, 70, 1, 2.5); // mouth
  
  stroke(255, 199, 31);
  arc(281, 314, 15, 15, 0, PI+HALF_PI);  // nose ring
  pop();
  
  push();
  fill(89, 51, 29);
  translate(360, 210);
  rotate(600);
  arc(0, 0, 205, 305, QUARTER_PI, PI+QUARTER_PI);  // right bang
  pop();
  
  push();
  fill(89, 51, 29);
  translate(230, 210);
  rotate(900);
  arc(0, 0, 290, 195, QUARTER_PI, PI+QUARTER_PI);  // left bang
  pop();
  
  push();
  fill(255, 207, 156);
  ellipse(440, 290, 40, 60);  // ear
  pop();
  
    // earrings
  push();
  fill(255, 199, 31);
  rect(438, 310, 10, 20);
  ellipse(447, 275, 8, 8);
  ellipse(445, 295, 5, 5);
  fill(255, 150);
  stroke(255, 199, 77);
  ellipse(443, 338, 15, 15);
  pop();
  
}
