class Polygon{

    constructor(x,y){
   
       var options = {
   
           isStatic : false,
           density : 0.1,
           friction : 0

       }
   
     this.polygon = Bodies.rectangle(x,y,20,20,options)
     this.img = loadImage("polygon.png");
     
     World.add(world, this.polygon);
    
    }

    display(){

     var pos = this.polygon.position;

      imageMode(CENTER);
      image(this.img,pos.x,pos.y,20,30);

    }
}