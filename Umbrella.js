class Umbrella {
    constructor(x,y){

        var options={
           isStatic:true

        }
    this.body = Bodies.circle(x,y,30,options);
    
    this.image = loadImage("Sprites/images/Walking Frame/walking_1.png");
       World.add(world,this.body)
    }
 
 display(){

    var pos = this.body.position;
    imageMode(CENTER);
   
   // fill("brown");
    image(this.image,pos.x,pos.y,300,300);

 }
  
     



}