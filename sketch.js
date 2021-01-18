var Ninja, BadNinja1, BadNinja2;
var wall1, wall2, wall3, wall4;
var ground, floor1, floor2, floor3, floor4;
var knife;
var score;
var NinjaRun1, NinjaRun2, NinjaRun3, NinjaRun4, NinjaRun5, NinjaRun6;
var NinjaStanding1, NinjaStanding2, NinjaStanding3;
var NinjaStanding4, NinjaStanding5;
var background1;



function preload(){

background1 = loadImage("images/garden.png");

NinjaRun1 = loadImage("images/NinjaRun1.jpg");
NinjaRun2 = loadAnimation("images/NinjaRun2.jpg");
NinjaRun3 = loadAnimation("images/NinjaRun3.jpg");
NinjaRun4 = loadAnimation("images/NinjaRun4jpg");
NinjaRun5 = loadAnimation("images/NinjaRun5.jpg");
NinjaRun6 = loadAnimation("images/NinjaRun6.jpg");

NinjaStanding1 = loadAnimation("images/NinjaStanding1.png");
NinjaStanding2 = loadAnimation("images/NinjaStanding2.png");
NinjaStanding3 = loadAnimation("images/NinjaStanding3.png");
NinjaStanding4 = loadAnimation("image/NinjaStanding4.png");
NinjaStanding5 = loadAnimation("image/NinjaStanding5.png");
}

function setup() {
  createCanvas(600, 200);
  
  Ninja = createSprite(300,100);
  Ninja.addAnimation("Standing", NinjaStanding1);
  Ninja.scale=0.2;
  
}

function draw() {

background1(background1);



  drawSprites();
}

