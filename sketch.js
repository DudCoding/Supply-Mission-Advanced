var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var sideRed1, sideRed2, bottomRed;
var sideRed1Sprite, sideRed2Sprite, bottomRedSprite;
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

	sideRed1Sprite = createSprite(300,300,20,100);
	sideRed1Sprite.shapeColor = 'red';

	sideRed2Sprite = createSprite(400,300,20,100);
	sideRed2Sprite.shapeColor = "red";

	bottomRedSprite = createSprite(330,675,200,20);
	bottomRedSprite.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.0, isStatic: true});
	World.add(world, packageBody);

	sideRed1 = Bodies.rectangle(280,615, 20,100, {isStatic: true});
	World.add(world, sideRed1);

	sideRed2 = Bodies.rectangle(470,615,20,100,{isStatic: true});
	World.add(world, sideRed2);

	bottomRed = Bodies.rectangle(370,650,200,20, {isStatic: true});4
	World.add(world, bottomRed);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {




  keyPressed();
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  sideRed1Sprite.x = sideRed1.position.x;
  sideRed1Sprite.y = sideRed1.position.y;

  sideRed2Sprite.x = sideRed2.position.x;
  sideRed2Sprite.y = sideRed2.position.y;

  bottomRedSprite.x = bottomRed.position.x;
  bottomRedSprite.y = bottomRed.position.y;

  //console.log("package" + "the x: " + packageSprite.x + "the y: " + packageSprite.y);
  //console.log("copter" + "the x: " + helicopterSprite.x + "the y: " + helicopterSprite.y);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});	
	Matter.Body.setStatic(packageBody, false);



  }
}



