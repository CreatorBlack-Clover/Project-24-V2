// variables
var engine, world, paper,ground,box1,box2,box3;
// physics rules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	// creating the engine
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// paper
	var paper_options =
	{
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}
	paper = Bodies.circle(100,200,15,paper_options);
	World.add(world,paper);

	// Box Parts
	var box_options = 
	{
		isStatic: true
	}
	box1 = Bodies.rectangle(578,622,15, 100, box_options);
	World.add(world,box1);

	box3 = Bodies.rectangle(722,622,15, 100, box_options);
	World.add(world,box3);

	box2 = Bodies.rectangle(650,660,170, 15, box_options);
	World.add(world,box2);

	


	// Ground options
	var ground_options =
	{
		isStatic: true
		
	}

	// The ground
	ground = Bodies.rectangle(400,680,800,20,ground_options);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  
  // drawing paper
  ellipse(paper.position.x, paper.position.y,30);

  // drawing the ground
  rect(ground.position.x, ground.position.y, 800,20);

  // drawing the bin
  rect(box2.position.x, box2.position.y, 170, 25);
  rect(box1.position.x, box1.position.y, 25, 100);
  rect(box3.position.x, box3.position.y, 25, 100);


  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper,paper.position,{x:35,y:-30});
	}
}



