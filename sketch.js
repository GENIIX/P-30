const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var floor,roof,plat1,plat2;
var slingshot,hexa,box;
var engine,world;


function preload(){







}


function setup(){
   
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;



roof=new Ground(700,50,1400,15);
floor=new Ground(600,390,1200,15);
sidewall=new Ground(floor.x+300,200,15,1200);
plat1=new Ground(600,300,300,10);
plat2=new Ground(600,150,200,10);

box=new Box(600,200,70,70);


}

function draw(){
    background("cyan");
    Engine.update(engine);









floor.display();
roof.display();
sidewall.display();
plat1.display();
plat2.display();

box.display();
}