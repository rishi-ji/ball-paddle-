var ballImg,ball,paddleImg,paddle;

function preload(){
    ballImg=loadImage("ball.png")
   paddleImg=loadImage("paddle.png")
}

function setup() {
   createCanvas(400, 400);
   ball=createSprite(40,200,20,20);
   ball.addImage("ball",ballImg)
   ball.velocityX=9
   paddle=createSprite(350,200,10,100);
   paddle.addImage("paddle",paddleImg)
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
 

  ball.bounceOff(paddle,randomVelocity);
  
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.y=paddle.y-20
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20
  }
  drawSprites();
  
}

function randomVelocity(){
  
 ball.velocityY=random(-5,8)
} 
