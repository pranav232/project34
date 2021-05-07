
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	bg=loadImage("gamingbackground1.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(400,680,800,20);
	bob1 = new bob(320,520,80);
	chain1 = new chain(bob1.body,{x:200,y:200});
	box1= new Box(500,650,100,100);
	box2= new Box(500,550,100,100);
	box3= new Box(500,450,100,100);
	monster=new Monster(650,550,100,100);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  bob1.display();
  roof1.display();
  box1.display();
  box2.display();
  box3.display();
  monster.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}


