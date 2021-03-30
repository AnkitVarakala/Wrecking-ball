const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var box1, box2, box3, box4, box5
var ball, rope


function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(600,600,1200,20);

    box1 = new Box(700,200,70,70);
    box2 = new Box(700,200,70,70);
    box3 = new Box(700,200,70,70);
    box4 = new Box(700,200,70,70);
    box5 = new Box(700,200,70,70);
   
    ball = new Ball(200,200,60,60);

    
    rope = new Rope(ball.body,{x:500, y:50});
  
}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ball.display();
  rope.display();
  

  drawSprites();
}