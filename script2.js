

// document.getElementsByTagName('img')[0].style
// CSSStyleDeclaration {0: "position", 1: "left", 
// 2: "top", alignContent: "", alignItems: "", 
// alignSelf: "", alignmentBaseline: "", all: ""…}
/*



*/

console.log('CATWALK2');

//var imgReverse = document.getElementsByTagName('img')[0];
//imgReverse.style.transform = 'scaleX(-1)';

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var goRight = true;
var goUp = false;

function catWalk() {
	//get cat image
  var img = document.getElementsByTagName('img')[0];
  
  //get left offset of image. it's a string first, change to integer
  var currentLeft = parseInt(img.style.left);
  var currentHeight = parseInt(img.style.top);

  //increments pixels to the left
  img.style.left = (currentLeft + movePixels) + 'px';
  

  //if cat gets to right hand side of screen while walking to the right..
  //original function sent cat back to left hand side of screen by setting left to 0
  if (goRight == true && currentLeft > (window.innerWidth-img.width)) {
  	
  	goRight == false;
  	//img.style.transform = 'rotate(270deg)';
  	img.style.transform = 'scaleX(-1)';

  	//change movePixels to negative value
		movePixels = -10;
	}

	 //if cat is at left hand side of screen while walking left
  else if(currentLeft <= 0 && goRight == false){
  	img.style.transform = 'scaleX(1)';
  	movePixels = 10;
  }

		//change height
  // 	img.style.top = (currentHeight + movePixels) + 'px';
		// if (
			
		// 	)
 
  //if cat is in the middle of the screen
  else if(currentLeft == (window.innerWidth/2)+- img.width){
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
		movePixels = 10;
		startCatWalk();
}
var pressSpeed = function(){
	console.log('SPEED');
	//
	delayMs = delayMs - 10;	//smoother
	movePixels = movePixels + 10;	//can be jolty animation
	startCatWalk();
}
var pressStop = function(){
	console.log('STOP');
	//clearInterval(catTimer);
	//catTimer = null;

	movePixels = 0;
	delayMs = 50;
	startCatWalk();
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










