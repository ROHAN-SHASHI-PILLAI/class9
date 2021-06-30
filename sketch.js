var box
function setup() {
  createCanvas(400,400);
 box = createSprite(200,200,5,5)





}

function draw() 
{
  background(30);

if (keyIsDown(RIGHT_ARROW)){
box.x+= 3;
}


drawSprites();
}




