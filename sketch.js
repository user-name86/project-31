const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, p1, canvas;
var world, engine;
var divisions =[];
var plinkos = [];
var particles = [];

var divisionHeight=300;

function setup() {
  canvas =createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,480,20);

  for (var k = 20; k<=canvas.width; k=k+85){
    divisions.push(new Division(k,500+300/2,10,300));
  
  }

  for(var j =40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,75,10,10));
  }
 

  for(var i =50; i<=width; i = i+50){
    plinkos.push(new Plinko(i,175,10,10));
  }
  

  for(var k =20; k<=width; k = k+55){
    plinkos.push(new Plinko(k,275,10,10));
  }
  

  for(var l =20; l<=width; l = l+55){
    plinkos.push(new Plinko(l,375,10,10));
  }
 

  Engine.run(engine);
 
}

function draw() {
  Engine.update(engine);
  
  background(0); 
  
  for (var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var l=0; l<plinkos.length; l++){
    plinkos[l].display();
  }
  for(var k=0; k<plinkos.length; k++){
    plinkos[k].display();
  }
  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  ground.display();

  
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-100,width/2+100),10,10));
  }
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }

  drawSprites();
}