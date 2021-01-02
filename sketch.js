var car, wall;
var speed, weight;
speed = random(55,90);
weight = random(400,1500);

function setup() {
  createCanvas(1600,800);
   car = createSprite(50, 200, 50, 50);
   car.velocityX = speed;
   car.shapeColor = "blue";
   wall  = createSprite(1500,200,60,height/2);
   wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x - car.x <(car.width * wall.width)/2){
    car.velocityX = 0; 
     var deformation;
     deformation = 0.5 * width * speed * speed / 22509;
     
  }
  if (car.deformation<100){
    car.shapeColor = "green";
  }
  if(defromation<180 && deformation>100){
    car.shapeColor = "yellow"
  }
  if(deformation>180){

    car.shapeColor = "red";

  }
}