var human,humanImg;
var ground;
var hurdle,hurdleImg;
var star,starImg;
const PLAY = 1;
const END = 0;
var gameState = PLAY;

function preload(){
 humanImg = loadAnimation("human.png","human2.png");
 starImg = loadImage("star1.png");
 hurdleImg = loadImage("hurdleImg");

}
function setup(){
  createCanvas(600,600);
  human = createSprite(400, 200, 50, 50);
  human.addAnimation(humanImg);
  human.scale = 0.5;

  ground = createSprite(300,300,600,600);
  ground.velocityX = -3;

  //group code
   hurdleGroup.createGroup();
   starGroup.createGroup();
}

function draw() {
  background(255,255,255); 
  
  if(gameState == PLAY){
   //moving ground
    if(ground.width/2<ground.x === 0){
     ground.x = 0; 
    } 

    //human movements
     if(keyDown("space")){
      human.velocityY = -3; 
     }

    //gravity code
     human.velocityY = human.velocityY+0.6; 

     //end code
    if(human.isTouching(hurdle)){
      gameState = END;
     }

     //calling functions
      spawnHurdles();
      spawnStars();
  }
    
    if(gameState == END){
     human.changeImage("human.png");
     ground.velocityX = 0;

    }
  drawSprites();


}

function spawnHurdles(){
 if(World.frameCount%100 === 0){
  hurdle = createSprite(600,580,10,10);
  hurdle.addImage(hurdleImg);
  hurdleGroup.add(hurdle);
  hurdle.scale = 0.5;
 } 
}

function spawnStars(){
 if(World.frameCount%50 === 0){
  star = createSprite(600,100,10,10);
  star.addImage("starImg"); 
  star.scale = 0.5;
  star.y = Math.round(random(100,200));
  starGroup.add(star);
 } 
}