const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1;
var box2;
var box3;
var box4;

var circle1;

var triangle1;

var ground;

function setup(){
    
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(200,100,50,100);
    box3 = new Box(150,300,50,50);
    box4 = new Box(250,300,50,50);
    box5 = new Box(100,300,50,50);
    box6 = new Box(300,300,50,50);
    box7 = new Box(150,100,50,120);
    box8 = new Box(250,100,50,120);
    box9 = new Box(100,100,50,150);
    box10 = new Box(300,100,50,150);

    pillar1 = new Box(50,300,50,200);
    pillar2 = new Box(350,300,50,200);
    pillar3 = new Box(50,100,50,50);
    pillar4 = new Box(350,100,50,50);

    circle1 = new Circle(200,20,20);
    circle2 = new Circle(150,20,20);
    circle3 = new Circle(250,20,20);
    circle4 = new Circle(100,20,20);
    circle5 = new Circle(300,20,20);

    ground = new Ground(200,380,400,50);
}

function draw(){
    
    background(0);
    
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    pillar1.display();
    pillar2.display();
    pillar3.display();
    pillar4.display();

    circle1.display();
    circle2.display();
    circle3.display();
    circle4.display();
    circle5.display();

   ground.display();
}