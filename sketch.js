var carR, carG, carY, carW;
var wall1 , wall2, wall3 ;
var thickness;
var bullet, speed, weight ; 
var BH1, BH2, BH3, BH4; 
var D1, D2, D3, D4;
var S1, S2, S3, S4;
var W1, W2, W3, W4;

function setup() {
  createCanvas(400, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
 
   S1= random(223, 321);
   S2= random(223, 321); 
   S3= random(223, 321);
   S4= random(223, 321);

   W1 = random(30, 52);
   W2 = random(30, 52);
   W3 = random(30, 52);
   W4 = random(30, 52);


  wall1 = createSprite(200, 200, 400, 10 );
  wall1.shapeColor = "white";

  wall2 = createSprite(200, 300, 400, 10 );
  wall2.shapeColor = "white";

  wall3 = createSprite(200, 100, 400, 10 );
  wall3.shapeColor = "white";

  carR = createSprite(50, 350, 10, 10);
  carR.shapeColor = "red" ;
  carR.velocityX = S1;
  carR.weight = W1;

  carG = createSprite(50, 50, 10, 10);
  carG.shapeColor = "green";
  carG.velocityX = S2;
  carG.weight = W2;
 
  carY = createSprite(50, 250, 10, 10 );
  carY.shapeColor = "yellow";
  carY.velocityX = S3;
  carY.weight = W3;

  carW = createSprite(50, 150, 10, 10);
  carW.shapeColor = "white";
  carW.velocityX = S4;
  carW.weight = W4;

  BH1 = createSprite(350, 350, thickness, 70);
  BH1.shapeColor = "gray";

  BH2 = createSprite(350, 250, thickness, 70 );
  BH2.shapeColor = "gray";

  BH3 = createSprite(350, 150, thickness, 70 );
  BH3.shapeColor = "gray";

  BH4 = createSprite(350, 50, thickness, 70 );
  BH4.shapeColor = "gray";
  
}

function draw() {
  background("black");  
  
  D1 = (0.5 * W1 * S1 * S1 )/(thickness * thickness * thickness);
  D2 = (0.5 * W2 * S2 * S2 )/(thickness * thickness * thickness);
  D3 = (0.5 * W3 * S3 * S3 )/(thickness * thickness * thickness);
  D4 = (0.5 * W4 * S4 * S4 )/(thickness * thickness * thickness);


  if(D1 > 10){
    BH1.shapeColor = "red";
  }
  else
  {
    BH1.shapeColor = "green";
  }

  if(D2 > 10){
    BH2.shapeColor = "red";
  }
  else
  {
    BH2.shapeColor = "green";
  }

  if(D3 > 10){
    BH3.shapeColor = "red";
  }
  else
  {
    BH3.shapeColor = "green";
  }

  if(D4 > 10){
    BH4.shapeColor = "red";
  }
  else
  {
    BH4.shapeColor = "green";
  }

 /*
 if(wall.x - carR.x <(carR.widht + wall.widht)/2)
 {
   carR.velocityX = 1;
   var deformation = 0.5 * weight * speed * speed/22509;
   if(deformation<180 && deformation>100)
   {
     carR.shapeColor = color("green");
   }

   if(deformation<100)
   {
       carR.shapeColor = color(0, 255, 0);
       carG.shapeColor = color(0, 255, 0);

   }

   if(carR.isTouching(wall1)){
    speed.velocityX = 0; 
    carR.velocityX = 0;
   }
   
     if(wall.x - carG.x <(carG.widht + wall.widht)/2)
   {
     carG.velocityX = 1;
     var deformation = 0.5 * weight * speed * speed/22509;
     if(deformation<180 && deformation>100)
     {
       carG.shapeColor = color(255, 0, 0);
     }
    
    }
  */

   drawSprites();
 }
