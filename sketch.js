//renaming or nick-naming
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, ground,box1,box2;

function setup() {
  createCanvas(400,400);

//creating my engine
engine= Engine.create();
world= engine.world;
box1=new Box(200,300,50,50);
box2=new Box(230,100,50,100);
ground=new Ground(200,380,400,20);
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  ground.display();
  box2.display();
}
