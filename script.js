

// document.getElementsByTagName('img')[0].style
// CSSStyleDeclaration {0: "position", 1: "left", 
// 2: "top", alignContent: "", alignItems: "", 
// alignSelf: "", alignmentBaseline: "", all: ""…}
/*



*/

console.log('catwalk');

//var imgReverse = document.getElementsByTagName('img')[0];
//imgReverse.style.transform = 'scaleX(-1)';

var movePixelsLeft = 10;
var movePixelsDown = 10;
var delayMs = 50;
var catTimer = null;
//var goRight = true;

function catWalk() {
	//get cat image
  var img = document.getElementsByTagName('img')[0];
  //get left offset of image. it's a string first, change to integer
  var currentLeft = parseInt(img.style.left);
  var currentHeight = parseInt(img.style.top);

   
  //increments pixels
  img.style.left = (currentLeft + movePixelsLeft) + 'px';
  img.style.top = (currentHeight + movePixelsDown) + 'px';
  
 
  //if cat gets to right hand side of screen..
  if (currentLeft > (window.innerWidth-img.width)) {
  	
  	//flip the image
  	img.style.transform = 'rotate(270deg)';
  	//img.style.transform = 'scaleX(-1)';

  	//change movePixels to negative value
		movePixelsLeft = movePixelsLeft * -1;
  }

  //if cat is at left hand side of screen
  else if((currentLeft < 0)){ 
  	img.style.transform = 'scaleX(1)';
  	movePixelsLeft = movePixelsLeft* -1;
  }
  //if cat gets to bottom of screen
  else if(currentHeight > (window.innerHeight-img.height)){ 
  	movePixelsDown = movePixelsDown* -1;
  }
  //if cat gets to top of screen
  else if (currentHeight < 0){ 
  	movePixelsDown = movePixelsDown* -1;
  }

  //if cat is in the middle of the screen
  else if(currentLeft == (window.innerWidth/2)){ 
  img.style.transform = 'rotate(270deg)';
}
 
}

function startCatWalk() {
	// //if (catTimer) !== null{
	// 	return;
	// }

  catTimer = window.setInterval(catWalk, delayMs);
}

//-----------------    declare button obects
var startButton = document.getElementById('start-button');
var speedButton = document.getElementById('speed-button');
var stopButton = document.getElementById('stop-button');


//-----------------     declare functions for what happens on button clicks
var pressStart = function(){
	console.log('START');
		delayMs = 50;
		movePixelsLeft = 10;
		movePixelsDown = 10;
		startCatWalk();
}
var pressSpeed = function(){
	console.log('SPEED');
	//
	delayMs = delayMs--;	//smoother
	movePixelsLeft++;
	movePixelsDown++;	//can be jolty animation
	//startCatWalk();
}
var pressStop = function(){
	console.log('STOP');
	//clearInterval(catTimer);
	//catTimer = null;

	movePixels = 0;
	//delayMs = 50;
	//startCatWalk();
}


//-----------------     add event listeners for buttons and call functions
startButton.addEventListener('click', pressStart);
speedButton.addEventListener('click', pressSpeed);
stopButton.addEventListener('click', pressStop);

/*
	calling catWalk() once moves the cat 10px
	setInterval is a loop
	calls function at intervals of delayMs length
	coud do with multiple funtions - easier maybe

two conditions - move right or move left

//move right
conditions for moving right: movePixes variables is above 0
currentLeft > 0
if (currentLeft > (window.innerWidth-img.width))
else - move left
when we start moving left, we can't stop until currenLeft is 0.

after it enters the else, it needs to stay there
use
ELSE IF, and  or FLAG - true/false for going left!
use AND IF in the if statement

if (goRight == ture){
	add pixels
}
else{
	subtract pixels
}

if (goRight === true && currentLeft > (window.innerWidth-img.width){
	goright == false;
}
else if (goRight === flase && currentLeft < 0){
	goRight == true;
}

never use "=0" because it may skip 0 so condition always stays true

how to clear timer:
clearInterval function

can clear interval at the start of every function?

for speeding up, movePixels is ok but doesn't look at smooth,
changing interval smoother

*/

  
  // if (img.style.left == '0px'){
  //   img.style.transform = 'scaleX(-1)';	
  //   }

    //console.log(currentLeft);

    //flip image horizontally
    



  //do the same for right
  // img.style.right = (currentRight + movePixels) + 'px';
  // if (currentRight > (window.innerWidth-img.width)){
  // 	console.log('MEOW');
  // 	img.style.right = '0px';
  // }
 //  else if{ 
 //  	currentLeft <= (window.innerWidth-img.width)){
	// 	img.style.left = '100px';
	// }
	// else if (currentLeft < (window.outerWidth-img.width)){
	// 	img.style.left = '500px';
	// 	console.log('REVERSE');
	// }










