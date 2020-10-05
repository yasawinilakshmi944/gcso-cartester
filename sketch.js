var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50,25);
  car.shapeColor="80,80,80";
  wall = createSprite(1300,200,60,height/2)
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background("black");  
  car.velocityX=speed;
  if(wall.x - car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight *speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor="yellow";
    }
    if(deformation<100)
    {
      car.shapeColor="green";
    }
  }
  if(car.isTouching(wall)){
    car.velocityX=0;
  }
  drawSprites();
}