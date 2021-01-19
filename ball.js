class Ball{


constructor(x,y,radius){

    var    options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
     }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius = radius/2;
    
    this.image = loadImage("sprites/paper.png");
    this.image.scale =70.0;

    
    World.add(myWorld,this.body);

   

}



display(){



    var pos = this.body.position;
    
    push();
    translate(pos.x,pos.y);
    
  imageMode(RADIUS);
   fill("pink");
    
 image(this.image,0,0,this.radius,this.radius);
    pop();



}













}