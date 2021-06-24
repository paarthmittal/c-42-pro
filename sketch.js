var blast
var docking =false
var time=20
function preload(){
  station=loadImage('images/iss.png')
  back=loadImage('images/spacebg.jpg')
  space1=loadAnimation('images/spacecraft1.png')
  space2=loadAnimation('images/spacecraft2.png')
  space3=loadAnimation('images/spacecraft3.png')
  space4=loadAnimation('images/spacecraft4.png')
  blast2=loadAnimation('images/vlast.png')
  blast1=loadAnimation('images/vlast2.png')
}



function setup() {
  createCanvas(800,400);
 station1=createSprite(400,150,20,20)
 station1.addAnimation('state',station)
 station1.addAnimation('sblast',blast2)
 shuttle=createSprite(random(50,750),random(0,400),20,20)
 shuttle.addAnimation("shut",space1)
 shuttle.addAnimation("shut2",space2)
 shuttle.addAnimation("shut3",space3)
 shuttle.addAnimation("shut4",space4)
 shuttle.addAnimation("shut5",blast2)

 shuttle.scale=0.15
}

function draw() {
  background(back);  
  
  if(docking===false){
  if(keyDown('up')){
    shuttle.y=shuttle.y-5
    shuttle.changeAnimation("shut2",space2)
   
  }//else{
    //shuttle.changeAnimation("shut",space1)
  //}
 

  if(keyDown('right')){
    shuttle.x=shuttle.x+5
    shuttle.changeAnimation('shut3',space3)
  
  }//else{
   // shuttle.changeAnimation("shut",space1)
//}

  if(keyDown('down')){
    shuttle.y=shuttle.y+5
    shuttle.changeAnimation("shut2",space4)
  
  }


 if(keyDown('left')){
  shuttle.x=shuttle.x-5
  shuttle.changeAnimation("shut4",space4)

 } 
}
console.log(time)
//330:x
//233:y
if(((((shuttle.x>325)&&shuttle.x<335)&&shuttle.y>215)&&shuttle.y<225)&&time>0){
  docking=true
}
if(docking==true){
 
  shuttle.changeAnimation("shut",space1)
  
}
drawSprites()
if(docking==true){
  textSize(36)
  fill('white')
  text("docking successfull !!",400,200)
  shuttle.y=shuttle.y-20
  shuttle.lifetime=20
  text("well done u saved them",350,250)
}
if(docking==false){
  text("hurry! the shuttle will explode in time",300,350)
  text('park the shuttle on station before time to protect the crew',200,380)
}
time=time-0.1
if((time<=0)&&docking==false){
  docking=blast
}
text("time : "+time,50,50)
if(time<0){
  time=0
}
if(docking==blast){
  textSize(36)
  fill('white')
text("MISSION FAILED",400,200)
shuttle.changeAnimation("shut5",blast2)
shuttle.scale=1
station1.changeImage('sblast',blast2)
station1.scale=2
}
}