// creating sprite objects

var cat,catImg1,catImg2,catImg3;
var rat,ratImg1,ratImg2,ratImg3;
var bg,bgImg;


function preload() {
    //load the images here

    bgImg = loadImage("garden.png");


    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    

    ratImg1 = loadImage("mouse1.png");
    ratImg2 = loadAnimation("mouse2.png","mouse3.png");
    ratImg3 = loadAnimation("mouse4.png");
   
}

function setup(){

    // crating canvas
    createCanvas(1000,800);

    //create tom and jerry sprites here
    rat = createSprite(100,700,50,50);
    rat.addImage(ratImg1);
    rat.scale=0.1;
    cat = createSprite(700,700,50,50);
    cat.addImage(catImg1);
    cat.scale=0.1;


}

function draw() {

    background(bgImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - rat.x < (cat.width - rat.width)/(2)){

        cat.addAnimation("cat",catImg3);
        cat.changeAnimation("cat",catImg3);
        cat.velocityX=0;
        cat.x=300;
       
        rat.addAnimation("rat",ratImg3);
        rat.changeAnimation("rat",ratImg3);

      }

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here

   if(keyCode === LEFT_ARROW){

    cat.velocityX=-4;
    cat.addAnimation("catTeasing",catImg2);
    cat.changeAnimation("catTeasing");

    rat.addAnimation("rat",ratImg2);
    rat.changeAnimation("rat");
    
       

   }


}
