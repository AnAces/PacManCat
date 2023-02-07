var fundo, fundoImg;
var patinha, patinhaImg;
var ratinho, ratinhoImg;
var gatinho, gatinhoImg;
var cachorro, cachorroImg;
var gatinhoBravo;
var ratinho2, ratinhoImg;
var ratinho3, ratinhoImg;
var ratinho4, ratinhoImg;
function preload()
{
	fundoImg= loadImage("fundo.jpg");
	patinhaImg = loadImage ("patinha.jpg");
    ratinhoImg = loadImage ( "ratinho.jpg");
    cachorroImg = loadImage ("cachorro.jpg");
	gatinhoImg = loadImage ("gatinho.jpg ");

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	fundo = createSprite (displayWidth/2, displayHeight/2-120);
	fundo.addImage(fundoImg);
	fundo.scale = 0.7;
	//Crie os Corpos aqui.

	gatinho = createSprite(width-2620,height-900);
    gatinho.addImage (gatinhoImg);
    gatinho.scale = 0.05;

	patinha= createSprite(width-100,height);
    patinha.addImage (patinhaImg);
	patinha.scale = 0.03;
  
	cachorro= createSprite(width-2300,height-870);
    cachorro.addImage(cachorroImg);
	cachorro.scale = 0.07 ;
  
	ratinho= createSprite(width-2620,height-1240);
    ratinho.addImage (ratinhoImg);
	ratinho.scale = 0.05;

	ratinho2= createSprite(width-1900,height-500);
    ratinho2.addImage (ratinhoImg);
	ratinho2.scale = 0.05;

	ratinho3= createSprite(width-2620,height-500);
    ratinho3.addImage (ratinhoImg);
	ratinho3.scale = 0.05;

	ratinho4= createSprite(width-1900,height-1240);
    ratinho4.addImage (ratinhoImg);
	ratinho4.scale = 0.05;
  
}


function draw() {
  background(0);
  
  drawSprites();

  	if(keyDown("RIGHT_ARROW")){
	gatinho.x+=10;

  }

  if(keyDown("DOWN_ARROW")){
	gatinho.y+=10;
	
  }


 	 if(keyDown("LEFT_ARROW")){
	gatinho.x-=10;
	
  }

  if(keyDown("UP_ARROW")){
	gatinho.y-=10;
	
  }
 
cachorro.x = gatinho.x;
cachorro.y = gatinho.y;

 
}



