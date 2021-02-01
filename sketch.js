const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200, 300, 400)
    box1 = new Box(200,100,50,50, "blue");
    box2 = new Box(210, 0, 50, 100, "red")
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display()
    box2.display()
}