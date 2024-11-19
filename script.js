/* Apple Game by Kate */
/* global createCanvas, stroke, width, collideRectCircle, height, fill, random, background, noStroke, 
colorMode, ellipse, rect, triangle, createButton, image, loadSound, keyIsDown, loadImage, mouseX, keyIsPressed LEFT_ARROW RIGHT_ARROW, text, textSize, noLoop */

let basket, farm, apple, piggy, hit, mySound, 
    fallSpeed = 10, gameIsOver = false, appleImg, 
    basketImg, startButton, 
    startGame, restartButton;
let score = 0, lives = 3;
var apples = [];
let incremented = false;

function preload(){
  mySound = loadSound('https://cdn.glitch.com/7373b518-cb07-4e34-bc94-a6e0907cf0dd%2FSuper%20Mario%20World%20Restored%20-%20Athletic%20(Yoshi).mp3?v=1628033786485');
  appleImg = loadImage('https://cdn.glitch.com/7373b518-cb07-4e34-bc94-a6e0907cf0dd%2Fapple.png?v=1628036509246');
  basketImg = loadImage('https://cdn.glitch.com/7373b518-cb07-4e34-bc94-a6e0907cf0dd%2Fbasket.png?v=1628036523590');
  farm = loadImage('https://cdn.glitch.com/7373b518-cb07-4e34-bc94-a6e0907cf0dd%2FGame%20Screen.png?v=1628086385056');
  piggy = loadImage('https://cdn.glitch.com/7373b518-cb07-4e34-bc94-a6e0907cf0dd%2FSmiling.svg?v=1628087534244');
}

function setup(){
  width = 800;
  height = 600
  createCanvas(width, height);
  startButton = createButton('Start Game');
  restartButton = createButton('Try Again');
  restartButton.hide();
}

function draw(){
  instructions();
  if (startGame == true){
    startButton.hide();
    playGame();
  } 
} 

function begin(){
  lives = 3;
  score = 0;
  startGame = true;
  gameIsOver = false;
  mySound.stop();
  mySound.loop();
  basket = new Basket();
  apple = new Apple();
}

// this code executes once at the beginning of the game (main menu)
function instructions(){
  background(95);
  startButton.show();
  startButton.position(300, 300);
  startButton.mousePressed(begin);
}

// This code executes when the game is over
function gameOver(){
  mySound.stop();
  fill("black");
  rect(0,0,width,height);
  fill("red");
  textSize(30);
  text("GAME OVER!",225,225); 
  text(`Your Score: ${score}`,230,255);
  restartButton.position(300, 300);
  restartButton.mousePressed(begin);
}

// this is what triggers the actual game
function playGame(){
  drawBackground();
  basket.show();
  apple.show();
  apple.fall();
  hit = collideRectCircle(basket.x, basket.y + 40, basket.width, basket.height - 40, apple.x, apple.y + 10, apple.radius);
  if (hit){
    score++;
    apple = new Apple();
  } 
  else if (apple.offscreen()){
    lives--;
    apple = new Apple();
  }
  if (lives <= 0){
    gameIsOver = true;  
    restartButton.show();
    gameOver();
  }
  else restartButton.hide();
  textSize(14);    
  text(`Score: ${score}`, 20,20);
  text(`Lives: ${lives}`, 20,40) 
}

// draws the farm background
function drawBackground(){
  // background('#87CEEB'); // creates the sky
  // noStroke();
  // fill('GREEN');
  // rect(0, 400, width, 200);
  // fill('RED');
  // rect(250, 200, 225, 250);
  // triangle(250, 200, 370, 100, 475, 200);
  image(farm, 0, 0, width, height);
  image(piggy, 40, 400);
}

// Creates the basket
class Basket{
  constructor(){
    this.x = 300;
    this.y = 475;
    this.width = 125;
    this.height = 100;
    this.speed = 10;
  }
  show(){
    image(basketImg, this.x, this.y, this.width, this.height);
    if (keyIsDown(LEFT_ARROW)) this.x -= this.speed;
    else if (keyIsDown(RIGHT_ARROW)) this.x += this.speed;
  }
}

// Helps create a new apple
class Apple{
  constructor(){
    this.x = random(0, 600);
    this.y = 0;
    this.radius = 45;
    this.fallspeed = 10;
  }
  show(){
    image(appleImg, this.x - 15, this.y - 15, this.radius , this.radius);
  }
  fall(){
    if (this.y < 600) this.y += this.fallspeed;
    if (gameIsOver) this.fallspeed = 0;
  }
  offscreen(){
    if (this.y >= 600) return true;
    return false;
  }
}

