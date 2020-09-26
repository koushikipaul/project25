
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObject,paperObject;

var Img,bin;
function preload()
{
	Img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	bin = createSprite(1099,520,860,30);
    bin.addImage(Img);
    bin.scale = 0.69;

	//Create the Bodies Here.
	paperObject = new Paper(200,450,70);
	groundObject=new Ground(width/2,620,width,20);
	bin1=new Dustbin(1200,510,20,200);
	bin2=new Dustbin(1000,510,20,200);
	bin3=new Dustbin(1100,600,200,20);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  paperObject.display();
  groundObject.display();
 bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
//keyPressed();

}
function keyPressed(){
if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:74,y:-75});


  }

}