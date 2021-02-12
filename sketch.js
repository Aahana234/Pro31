const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var umbrella;
var drops=[];
var thunderCreatedFrame;

function preload(){
    thunderImage1 = loadImage("Sprites/images/thunderbolt/1.png");
    thunderImage2 = loadImage("Sprites/images/thunderbolt/2.png");
    thunderImage3 = loadImage("Sprites/images/thunderbolt/3.png");
    thunderImage4 = loadImage("Sprites/images/thunderbolt/4.png");

    boy_walking = loadAnimation("Sprites/images/Walking Frame/walking_1.png");

}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(600,700)
  
umbrella = new Umbrella(200,500);

//creating drops
if(frameCount % 150 === 0 ){
  for(var i=0; i<maxDrops; i++){
    drops.push(new Drop(random(0,400), random(0,400)));
  }
  
  }


Engine.run(engine);
}

function draw(){
  background(0);
    Engine.update(engine);
  
  umbrella.display();
  spawnThunder();
  for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY()
    
}
  drawSprites();
}   

function spawnThunder(){
rand = Math.round(random(1,4));

if(frameCount%80===0){
thunderCreatedFrame=frameCount;
thunder = createSprite(random(10,370), random(10,30), 10,10);
switch(rand){
 case 1: thunder.addImage(thunderImage1);
  break;
  case 2:thunder.addImage(thunderImage2);
 break;

  case 3: thunder.addImage(thunderImage3);
  break;

  case 4: thunder.addImage(thunderImage4);
 default :  break;
}
thunder.scale = random(0.3,0.6);
}
if(thunderCreatedFrame + 10 ===frameCount && thunder){
  thunder.destroy();
}
}