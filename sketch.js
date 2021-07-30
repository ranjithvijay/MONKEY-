var survivalTime = 0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup;
var FoodGroup, obstacleGroup,survivalTime;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,380);
  monkey = createSprite(400,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite (400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup= createGroup();
  obstacleGroup = createGroup();
  
 

  
  
  
  
}
  


  


function draw() {
  background("purple")
  monkey.collide(ground);
  //obstacleGroup.collide(ground)
  
  
  if(keyWentDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  
  banana();
  obstacles();
  
    stroke("white");
  textSize(20);
  fill("white");
  text("score: ",score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  
  
  drawSprites()
  
  text("survival Time: "+survivalTime,100,50)   
}


function banana(){
  if(frameCount%80===0){
  var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200)) ;
    banana.addImage(bananaImage)
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 150;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana)
  }
}
function obstacles(){
  if (frameCount%300 ===0){
   var obstacles = createSprite(600,310,50,50);
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -4;
    obstacles.lifetime = 150;
    obstacleGroup.add(obstacles)
   }
}







