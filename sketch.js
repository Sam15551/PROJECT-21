var bullet,wall;
var speed,weight 
var thickness;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50, 200, 50, 10)
  wall=createSprite(1200, 200, thickness, height/2)
  bullet.shapeColor = "white";
  wall.shapeColor = color(80,80,80)
  
}

function draw() {
  background(0);
  if(keyDown("space"))bullet.velocityX = speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * weight / (thickness * thickness * thickness)
    if(damage > 10){
      wall.shapeColor = "red";
    }
    else{
          wall.shapeColor = "green";
    }
  }   

  drawSprites();
}