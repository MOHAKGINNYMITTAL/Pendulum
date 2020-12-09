var bob1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	bob1=createSprite(100,300,20,20,circle);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



