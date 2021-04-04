//create global variables here
var tom;
var jerry;

var tomrest_img,tomwalk_img,tomhappy_img;
var jerryrest_img,jerrytease_img,jerryhappy_img;

var background1,background1_img;

function preload() {
    //load the images here
    tomrest_img=loadImage("cat1.png");
    jerryrest_img=loadImage("mouse1.png");

    tomwalk_img=loadAnimation("cat2.png","cat3.png");
    jerrytease_img=loadAnimation("mouse2.png","mouse3.png");

    tomhappy_img=loadAnimation("cat4.png");
    jerryhappy_img=loadAnimation("mouse4.png");

    background1_img=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,635);

    background1=createSprite(370,300,1000,1500);
    background1.addImage("forest",background1_img);
    background1.scale=1.0;
    
    //create tom and jerry sprites here
    tom=createSprite(710,520,40,40);
    tom.addImage("cat",tomrest_img);
    tom.scale=0.20;

    jerry=createSprite(100,500,20,20);
    jerry.addImage("mouse",jerryrest_img);
    jerry.scale=0.20;
}

function draw() {

    background("background1_img");
    //Write condition here to evalute if tom and jerry collide

    if (tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.addAnimation("happyone",tomhappy_img);
        tom.changeAnimation("happyone");
        tom.setVelocity(0,0);
        tom.x=jerry.x+135;

        jerry.addAnimation("HAPPY",jerryhappy_img);
        jerry.changeAnimation("HAPPY");
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW) {
    jerry.addAnimation("teasethecat",jerrytease_img);
    jerry.changeAnimation("teasethecat");
  
    tom.addAnimation("walking",tomwalk_img);
    tom.changeAnimation("walking");
    tom.setVelocity(-10,0);

  }
}