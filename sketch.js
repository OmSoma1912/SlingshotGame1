const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var a;
var b;
var c;

function setup(){
  var canvas = createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  a = new Hitter(200,250,30,30);
  b = new Holder(100,250,10,75);

  c = new Spring(a.body, b.body);

  d = new Ground(600,200,100,3);
  e = new Ground(600,400,100,3);
  z = new Ground(400,500,800,3);

  //1 platfrom, 1 row
  f = new BoxR(580,180,20,30);
  g = new BoxB(600,180,20,30);
  h = new BoxY(620,180,20,30);

  //1 platfrom, 2 row
  i = new BoxY(590,150,20,30);
  j = new BoxR(610,150,20,30);

  //1 platfrom, 3 row
  k = new BoxB(600,120,20,30);

  //2 platfrom, 1 row
  l = new BoxR(580,380,20,30);
  m = new BoxB(600,380,20,30);
  n = new BoxY(620,380,20,30);

  //2 platfrom, 2 row
  o = new BoxY(590,350,20,30);
  p = new BoxR(610,350,20,30);

  //2 platfrom, 3 row
  q = new BoxB(600,320,20,30);
}

function draw(){
    background(0,150,255);
    Engine.update(engine);
    
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    h.display();
    i.display();
    j.display();
    k.display();
    l.display();
    m.display();
    n.display();
    o.display();
    p.display();
    q.display();
    z.display();
    
}

function mouseDragged(){
  Matter.Body.setPosition(a.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  c.fly();
  Matter.Body.setPosition(a.body, {x: mouseX , y: mouseY});
}