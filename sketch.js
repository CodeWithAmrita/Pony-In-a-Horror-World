var L1 = 1;
var L2 = 2;
var L3 = 3;
var L4 = 4;
var END = 5;
var gameState = 2;

var pony, ponyImg;
var gameover, gameoverImg, restart, restartImg;
var background1, background1Img;
var ground, groundImg, ground2;
var invisibleGround;
var cross, crossImg;
var pillar,pillar1, pillar2, pillar;
var ghost, ghostImg;
var coin, coinImg;
var dollImg;
var points = 0;

function preload(){
  
  ponyImg = loadAnimation("ponyImgs/pony1.png","ponyImgs/pony2.png","ponyImgs/pony3.png","ponyImgs/pony4.png","ponyImgs/pony5.png","ponyImgs/pony6.png","ponyImgs/pony7.png","ponyImgs/pony8.png");
  
  background3Img = loadAnimation("BG/bg1.gif","BG/bg2.gif","BG/bg3.gif","BG/bg4.gif","BG/bg5.gif","BG/bg6.gif","BG/bg7.gif","BG/bg8.gif","BG/bg9.gif","BG/bg10.gif","BG/bg11.gif","BG/bg12.gif");
  
  background1Img = loadImage("Castle1.jpg");
  background2Img = loadImage("background.jpg");
  ground1Img = loadImage("fire.png");
  ground2Img = loadImage("blackgrass.png");
  grass1 = loadImage("grass.png");
  //crossImg = loadImage("cross.png");
  pillars1 = loadImage("pillar1.png");
  pillars2 = loadImage("pillar2.png");
  pillars3 = loadImage("pillar3.png");
  pillars4 = loadImage("pillar4.png");
  ghostImg = loadImage("ghost.png");
  coin1Img = loadImage("coin.png");
  coin2Img = loadImage("coin2.png");
  coin3Img = loadImage("coin3.png");
  dollImg = loadImage("doll.png");
  ghostyImg = loadImage("Ghost2.png");
  gameoverImg = loadImage("Gameover1.jpg");
  restartImg = loadImage("restart.png");
  backy = loadImage("Backy.jpg");
  ground1 = loadImage("ground.jpg");
  
}

function setup(){
  createCanvas(650,600);
        
  background1 = createSprite(300,300,10,10);
  background1.addImage(background1Img);
  //background1.scale = 1
  
  background2 = createSprite(300,290);
  background2.addImage(background2Img);
  background2.scale = 0.4;
  
  background3 = createSprite(340,300);                background3.addAnimation("background",background3Img);
  background3.scale = 1.45;
  
  ground = createSprite(350,535,300,50);
  ground.addImage(ground1Img);
  ground.scale = 1.2;
  ground.velocityX = -6;
  ground.x = ground.width /2;
  
  points = 0;
    
  pony = createSprite(250,530,10,10);
  pony.setCollider("rectangle",0,0,350,250);
  pony.addAnimation("pony",ponyImg);
  pony.scale = 0.35;
  
  ghosty = createSprite(70,480,10,10);
  ghosty.addImage(ghostyImg);
  ghosty.scale = 0.7;
  
  gameover = createSprite(325,300,10,10);
  gameover.addImage(gameoverImg);
  
  restart = createSprite(300,550,10,10);
  restart.addImage(restartImg);
   
  invisibleGround = createSprite(350,600,1000,10);
  invisibleGround.visible = false;
  
  
  dollGroup = new Group();
  groundGroup = new Group();
  ghostGroup  = new Group()
  pillarGroup = new Group();
  pillarGroup2 = new Group();
  coinGroup = new Group();
}

function draw(){
  if(gameState === L1){
    background("pink");
  }
  
  if(gameState === L2){
       
        ground.addImage(ground1Img);
        ground.velocity = -6; 
        ground.y = 535;
        background3.visible = false;
        background2.visible = false;
        gameover.visible = false;
        restart.visible = false;
    
        pony.visible = true;
        ghosty.visible = true;
    
        ghosty.y = pony.y;
  
        pony.collide(invisibleGround);

        if (pony.isTouching(coinGroup)){
          points = points+10;
          coinGroup.destroyEach();
        }

        //console.log(ground.x);
        if(pony.isTouching(pillarGroup)){
          gameState = END;
        }

         if(keyDown("space") && pony.y >=250) {
            pony.velocityY = -10;
          }

          pony.velocityY = pony.velocityY + 0.8;


          if (ground.x < 0){
            ground.x = ground.width/2;
          }

           
      if(points > 9){
        gameState = L3;
      }
    
      //spawnDolls();
      spawnPillar();
      spawnCoins();
     
  }
  else if(gameState === L3){   
       
        background("red");
        ground.y = 535;    
        background2.visible = true;    
        coin.addImage(coin2Img);
        coin.scale = 0.11;
        ground.addImage(ground2Img);
        gameover.visible = false;
        restart.visible = false;
    
        pony.visible = true;
        ghosty.visible = true;
    
        if(points > 19){
        gameState = L4;
        } 
    
        ghosty.y = pony.y;
  
        pony.collide(invisibleGround);

        if (pony.isTouching(coinGroup)){
          points = points+10;
          coinGroup.destroyEach();
        }

        //console.log(ground.x);
        if(pony.isTouching(pillarGroup2)){
          gameState = END;
        }

         if(keyDown("space") && pony.y >=250) {
            pony.velocityY = -10;
          }

          pony.velocityY = pony.velocityY + 0.8;


          if (ground.x < 0){
            ground.x = ground.width/2;
          }

      
      //spawnDolls();
      spawnPillar2();
      spawnCoins();
    
    
  }
  
  else if(gameState === L4){   
       
        background3.visible = true;
        background2.visible = false;    
        coin.addImage(coin3Img);
        //coin.scale = 0.13;
        ground.addImage(ground1);
        ground.velocity = -6;
        if (ground.x < 0){
            ground.x = ground.width/2;
          }
        ground.x = 400;
        ground.y = 850;
         //ground.visible = false;
        gameover.visible = false;
        restart.visible = false;
    
        pony.visible = true;
        ghosty.visible = true;
    
        text("Points: "+ points, 500,50);
    
        ghosty.y = pony.y;
  
        pony.collide(invisibleGround);

        if (pony.isTouching(coinGroup)){
          points = points+10;
          coinGroup.destroyEach();
        }

        //console.log(ground.x);
        if(pony.isTouching(pillarGroup2)){
          gameState = END;
        }

         if(keyDown("space") && pony.y >=250) {
            pony.velocityY = -10;
          }

          pony.velocityY = pony.velocityY + 0.8;
    
      spawnPillar2();
      spawnCoins();
    
    
  }
  else{
    if (gameState === END){        
      gameover.visible = true;
      restart.visible = true;
      pony.visible = false;
      ghosty.visible = false;
      coinGroup.destroyEach();
      pillarGroup2.destroyEach();
      pillarGroup.destroyEach();
      ghostGroup.destroyEach();
      
      if(mousePressedOver(restart)) {
      reset();
     }
    }
  }
  
   drawSprites();
  
  textSize(20);
  fill(255,187,187);
  text("Points: "+ points, 500,70);
    
}


function spawnDolls(){
  if (frameCount % 2500 === 0) {
    var doll = createSprite(600,120,40,10);
    doll.y = 570;
    doll.addImage(dollImg);
    doll.scale = 0.15;
    doll.velocityX = -5;    
    
    doll.lifetime = 200;
    
    dollGroup.add(doll);
  }
}

function spawnPillar() {
  if(frameCount % 100 === 0) {
    var pillar = createSprite(600,465);
    pillar.velocityX = -6 ;
   
        
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: pillar.addImage(pillar1);
        pillar.scale = 0.3;
        pillar.y = 540;
        //pillar.setCollider("rectangle",0,0,60,250);
         
              break;
      case 2: pillar.addImage(pillar2);
        //pillar.setCollider("rectangle",0,-140,100,300);
        pillar.scale = 0.3;
        pillar.y = 520;
        
              break;     
      default: break;
    }
            
    pillar.lifetime = 300;
    
    pillar.depth = ghosty.depth;
    ghosty.depth = ghosty.depth+1;
    
    pillarGroup.add(pillar);
    }
}

function spawnGhosts(){
  if (frameCount % 60 === 0){
    var ghost = createSprite(600,120,40,10);
    ghost.y = Math.round(random(300,600));
    ghost.addImage(ghostImg);    
    ghost.velocityX = -5;    
    ghost.lifetime =300;
    
    ghost.depth = ghosty.depth;
    ghosty.depth = ghosty.depth+1;
    
    ghostGroup.add(ghost);
  }
}

function spawnCoins(){
  if (frameCount % 110 === 0){
    var coin = createSprite(600,580);
    coin.y = Math.round(random(150,400));
    coin.addImage(coinImg);
    coin.scale = 0.2;
    coin.velocityX = -4;
    coin.lifetime = 160;
    
    coin.depth = ghosty.depth;
    ghosty.depth = ghosty.depth+1;
    
    coinGroup.add(coin);
  }
}

var L1 = 1;
var L2 = 2;
var L3 = 3;
var END = 4;
var gameState = 1;

var pony, ponyImg;
var gameover, gameoverImg, restart, restartImg;
var background1, backgroundImg;
var ground, groundImg, ground2;
var invisibleGround;
var cross, crossImg;
var pillar1, pillar2, pillar;
var ghost, ghostImg;
var coinImg;
var dollImg;
var points = 0;

function preload(){
  
  ponyImg = loadAnimation("ponyImgs/pony1.png","ponyImgs/pony2.png","ponyImgs/pony3.png","ponyImgs/pony4.png","ponyImgs/pony5.png","ponyImgs/pony6.png","ponyImgs/pony7.png","ponyImgs/pony8.png");
  
  backgroundImg = loadImage("Castle1.jpg");
  groundImg = loadImage("fire.png");
  //crossImg = loadImage("cross.png");
  pillar1 = loadImage("pillar1.png");
  pillar2 = loadImage("pillar2.png");
  ghostImg = loadImage("ghost.png");
  coinImg = loadImage("coin.png");
  dollImg = loadImage("doll.png");
  ghostyImg = loadImage("Ghost2.png");
  gameoverImg = loadImage("Gameover1.jpg");
  
}

function setup(){
  createCanvas(650,600);
        
  background1 = createSprite(300,300,10,10);
  background1.addImage(backgroundImg);
  //background1.scale = 1
  
  ground = createSprite(350,535,300,50);
  ground.addImage(groundImg);
  ground.scale = 1.2;
  ground.velocityX = -6;
  ground.x = ground.width /2;
  ground.shapeColor = "maroon";
  
  points = 0;
    
  pony = createSprite(250,530,10,10);
  pony.setCollider("rectangle",0,0,350,250);
  pony.addAnimation("pony",ponyImg);
  pony.scale = 0.35;
  
  ghosty = createSprite(70,480,10,10);
  ghosty.addImage(ghostyImg);
  ghosty.scale = 0.7;
  
  gameover = createSprite(325,300,10,10);
  gameover.addImage(gameoverImg);
  
 
  invisibleGround = createSprite(350,600,1000,10);
  invisibleGround.visible = false;
  
  
  dollGroup = new Group();
  groundGroup = new Group();
  ghostGroup  = new Group()
  pillarGroup = new Group();
  coinGroup = new Group();
}

function draw(){
    
  if(gameState === L1){
    
        gameover.visible = false;
        
    
        text("Points: "+ points, 500,50);
    
        ghosty.y = pony.y;
  
        pony.collide(invisibleGround);

        if (pony.isTouching(coinGroup)){
          points = points+10;
          coinGroup.destroyEach();
        }

        //console.log(ground.x);
        if(pony.isTouching(pillarGroup)){
          gameState = END;
        }

         if(keyDown("space") && pony.y >=250) {
            pony.velocityY = -10;
          }

          pony.velocityY = pony.velocityY + 0.8;


          if (ground.x < 0){
            ground.x = ground.width/2;
          }

       if (dollGroup.isTouching(pony)){
          spawnGhosts();    
        }
    
      spawnDolls();
      spawnPillar();
      spawnCoins();
     
  }
  else if(gameState === L2){
    
  }
  else{
    if (gameState === END){   
      gameover.visible = true;
      
      pony.visible = false;
      ghosty.visible = false;
      dollGroup.destroyEach();
      coinGroup.destroyEach();
      pillarGroup.destroyEach();
      ghostGroup.destroyEach();
      
     
    }
  }
  
   drawSprites();
}


function spawnDolls(){
  if (frameCount % 2500 === 0) {
    var doll = createSprite(600,120,40,10);
    doll.y = 570;
    doll.addImage(dollImg);
    doll.scale = 0.15;
    doll.velocityX = -5;    
    
    doll.lifetime = 200;
    
    dollGroup.add(doll);
  }
}

function spawnPillar() {
  if(frameCount % 100 === 0) {
    var pillar = createSprite(600,465);
    pillar.velocityX = -6 ;
   
        
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: pillar.addImage(pillar1);
        pillar.scale = 0.3;
        pillar.y = 540;
        //pillar.setCollider("rectangle",0,0,60,250);
         
              break;
      case 2: pillar.addImage(pillar2);
        //pillar.setCollider("rectangle",0,-140,100,300);
        pillar.scale = 0.3;
        pillar.y = 520;
        
              break;     
      default: break;
    }
            
    pillar.lifetime = 300;
    
    pillar.depth = ghosty.depth;
    ghosty.depth = ghosty.depth+1;
    
    pillarGroup.add(pillar);
    }
}

function spawnGhosts(){
  if (frameCount % 60 === 0){
    var ghost = createSprite(600,120,40,10);
    ghost.y = Math.round(random(300,600));
    ghost.addImage(ghostImg);    
    ghost.velocityX = -5;    
    ghost.lifetime =300;
    
    ghost.depth = ghosty.depth;
    ghosty.depth = ghosty.depth+1;
    
    ghostGroup.add(ghost);
  }
}

function spawnCoins(){
  if (frameCount % 110 === 0){
    var coin = createSprite(600,580);
    coin.y = Math.round(random(150,400));
    coin.addImage(coinImg);
    coin.scale = 0.2;
    coin.velocityX = -4;
    coin.lifetime = 160;
    
    coin.depth = ghosty.depth;
    ghosty.depth = ghosty.depth+1;
    
    coinGroup.add(coin);
  }
}
