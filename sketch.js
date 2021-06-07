const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Iron1,ruuber1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
  Iron1 = new Iron(1000,350)
  rubber1 = new Rubber(600,300,30)
  stone1 = new stone(200,300)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Iron1.display();
    rubber1.display();
 stone1.display();
}