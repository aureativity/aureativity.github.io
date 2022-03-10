function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(180, 212, 190);
  
  noStroke();
  fill(255, 218, 179); 
  ellipse(300, 270, 290, 345);  // head
  
  fill('white');
  //ellipse(255, 260, 60, 30);  // left eye
  //ellipse(385, 260, 60, 30);  // right eye
  
  fill(89, 51, 29);
  ellipse(230, 260, 30, 30);  // left iris
  ellipse(365, 260, 30, 30);  // right iris
  
  fill('black');
  ellipse(230, 260, 20, 20);  // left pupil
  ellipse(365, 260, 20, 20);  // right pupil
  
  fill('white');
  ellipse(225, 256, 10, 10);  // left eye shine
  ellipse(360, 256, 10, 10);  // right eye shine
  
  fill(74, 39, 21);  //  hair color
  rect(205, 220, 40, 7);  // left eyebrow
  rect(350, 220, 40, 7);  // right eyebrow
 
 // beginShape();
//  vertex(205, 220);
  //vertex(240, 230);
  //vertex(290, 240);
  //vertex(240, 250);
  //vertex(280, 260);
  //endShape();
  
}
