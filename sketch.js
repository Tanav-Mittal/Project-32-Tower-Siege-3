const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonImg,backgroundImg
var score = 0;

function preload()
{
  polygonImg = loadImage("polygon.png");
  getTime();
}

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground = new Ground(400,370,1600,20)

  platform1 = new Ground(300,300,200,10)
  platform2 = new Ground(600,225,200,10)

  box1 = new Box(300,285,20,20)
  box2 = new Box(325,285,20,20)
  box3 = new Box(275,285,20,20)
  box4 = new Box(350,285,20,20)
  box5 = new Box(250,285,20,20)
  box6 = new Box(375,285,20,20)
  box7 = new Box(225,285,20,20)

  box8 = new Box(300,265,20,20)
  box9 = new Box(325,265,20,20)
  box10 = new Box(275,265,20,20)
  box11 = new Box(350,265,20,20)
  box12 = new Box(250,265,20,20)

  box13 = new Box(300,245,20,20)
  box14 = new Box(325,245,20,20)
  box15 = new Box(275,245,20,20)

  box16 = new Box(300,225,20,20)


  box17 = new Box(600,210,20,20)
  box18 = new Box(625,210,20,20)
  box19 = new Box(575,210,20,20)
  box20 = new Box(650,210,20,20)
  box21 = new Box(550,210,20,20)
  box22 = new Box(675,210,20,20)
  box23 = new Box(525,210,20,20)

  box24 = new Box(600,190,20,20)
  box25 = new Box(625,190,20,20)
  box26 = new Box(575,190,20,20)
  box27 = new Box(650,190,20,20)
  box28 = new Box(550,190,20,20)

  box29 = new Box(600,170,20,20)
  box30 = new Box(625,170,20,20)
  box31 = new Box(575,170,20,20)

  box32 = new Box(600,150,20,20)

  polygon = Bodies.circle(100,200,20);
  World.add(world,polygon)

  slingshot = new SlingShot(polygon,{x:100,y:200});
}

function draw() {
  if(backgroundImg)
    {
    background(backgroundImg);
    }
    fill("white")
    textSize(35)
    text("score: " + score,width-300,50)

  Engine.update(engine) 
  
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)

  ground.display();

  platform1.display();
  platform2.display();

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();

  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();

  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();

  box16.display();
  box16.score();


  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();

  box24.display();
  box24.score();
  box25.display();
  box25.score();
  box26.display();
  box26.score();
  box27.display();
  box27.score();
  box28.display();
  box28.score();

  box29.display();
  box29.score();
  box30.display();
  box30.score();
  box31.display();
  box31.score();

  box32.display();
  box32.score();

  slingshot.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode == 32)
  {
    slingshot.attach(polygon);
  }
}

async function getTime()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    
    var dateTime = responseJSON.datetime
    var hour = dateTime.slice(11,13);
    if(hour >= 06 && hour <= 18)
    {
         back = "Day.jpg"
    }
    else
    {
        back = "Night.jpg"
    }
    backgroundImg = loadImage(back)

}