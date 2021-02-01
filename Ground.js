class Ground {
    constructor(x, y, width) {
      var options = {
          isStatic: true
          
         
      }
      this.body = Bodies.rectangle(x, y, width, 30, options);
      this.width = width;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  