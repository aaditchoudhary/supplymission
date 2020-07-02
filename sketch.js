var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bord;
var bord2;
var bord3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	packageSprite=createSprite(0, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible=(false);
	packageSprite.velocityX=2;
	
	helicopterSprite=createSprite(0, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=2

   bord=createSprite(400,345,200,20)
   bord2=createSprite(300,310,20,100)
   bord3=createSprite(500,310,20,100)
   bord.shapeColor=("red")
   bord2.shapeColor=("red")
   bord3.shapeColor=("red")

	groundSprite=createSprite(200,365,1500,20);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200, 5, {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2,380, width, 100 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
    
}


function draw() {
  rectMode(CENTER);
  groundSprite;
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(helicopterSprite.y=200){
	  packageSprite.visible=(true);
 }

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



