//Create variables here
var dogImg, happyDog, database, foodS, foodStoke, readStock;
var dog

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.1;

  foodStock = database.ref('Food');
  foodStock.on("value", readStoke);
}


function draw() { 
  background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("red");
  stroke("white");
  text("Note: Press the up arrow to feed the dog milk", 60, 50);
}

function readStoke(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  });
}



