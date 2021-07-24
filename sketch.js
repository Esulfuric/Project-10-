var sea, ship, ship_moving
function preload(){
  background = loadAnimation(sea.png)
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(600,400);

 var sea = createSprite(200, 200);
 sea.addAnimation("seabg", background);
 
  var ship = createSprite(50, 160, 20, 50);
  ship.addAnimation("moving", ship_moving)
}

function draw() {
  background("#00FFFF");
 
}
