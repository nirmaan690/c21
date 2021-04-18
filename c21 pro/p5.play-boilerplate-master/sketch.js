var wall,thickness;
var bulet,speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed= random(223,321);
  weight=random(30,50);
  wall= createSprite(1200,200, thickness, height/2);
  wall.shapeColor=color(80,80,80);


  bullet= createSprite(50,200,50,5);
  bullet.shapeColor=color(255);
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damages>10)
    {
      wall.shapeColor=color(255,0,0);
    }
  }







drawSprites();
}




function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
else{
  return false
}

}




