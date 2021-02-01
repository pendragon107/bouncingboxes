class Box {
  constructor(x, y, width, height, color) {
    var options = {
        'restitution':1.5,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color= color;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push()
    translate(pos.x, pos.y)
    rotate(this.body.angle)
    fill(this.color);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
