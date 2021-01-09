class Block{
    constructor(x, y) {
        var options = {
            
            isStatic : false,
            friction: 0 ,
             density: 1.0

        }
        this.body = Bodies.rectangle(x, y, 20,30, options);
        this.width = 20;
        this.height = 30;
        
        World.add(world, this.body);
        
      }
      display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(pos.x,pos.y,20,30);
        pop();
      }
}