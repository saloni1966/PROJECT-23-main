var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.09

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);


	boxx = 400;
	boxy = 630;

	boxleftsprite = createSprite(boxx,boxy-10,20,90);
	boxleftsprite.shapeColor = "lavender"
	
	boxleftbody= Bodies.rectangle(boxx+10,boxy-10,20,90, {isStatic:true} );
	World.add(world, boxleftbody);
	
	boxbasesprite = createSprite(boxx+65,boxy+30,150,20);
	boxbasesprite.shapeColor = "lavender"
	boxbasebody= Bodies.rectangle(boxx+65,boxy+25,150,20, {isStatic:true} );
	World.add(world, boxbasebody);
	
	boxrightsprite = createSprite(boxx+130,boxy-10,20,90);
	boxrightsprite.shapeColor = "lavender"
	boxrightbody= Bodies.rectangle(boxx+120,boxy-10,20,90, {isStatic:true} );
	World.add(world, boxrightbody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
 
  drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.setStatic(packageBody,false);
	   
	 }
	 else if(keyCode === RIGHT_ARROW){
	   helicopterSprite.x = helicopterSprite.x +20;
	   translation = {x : 20, y:0};
	   Matter.Body.translate(packageBody,	translation);
	 }
	 else if(keyCode === LEFT_ARROW){
	   helicopterSprite.x =helicopterSprite.x -20;
	   translation = {x : -20, y:0};
	   Matter.Body.translate(packageBody,	translation);
	 }
	 
   }