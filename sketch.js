const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;



function preload()
{
   
}

function setup() {
	createCanvas(900, 500);
 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	polygon = new Polygon(300,400);
	sling = new Sling(polygon.body,{x:350,y:500});

    
   ground = new Ground(400,500,1500,20);
	 
   Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  
  background("lightBlue");
  
  ground.display();
  polygon.display();
  sling.display();
 
 
  
}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
   sling.fly();
}



function keyPressed(){

if(keyCode === 32){


sling.attach(polygon.body);
   
}

}









