
var images = document.getElementsByClassName('img-slide');
var srcImg = [];
var titleImg = [];
let count = 0;
let intervalID;

for(var i =0; i<images.length; i++){
	let img = new Image();
	img.src = images[i].getAttribute('data-src');
	srcImg[i] = images[i].getAttribute('data-src');
	titleImg[i] = images[i].getAttribute('data-title')
	images[i].onclick = function(){
		document.getElementById("img-show").src = img.src;
	}
}

intervalID = setInterval(function(){
	if(count < srcImg.length){
		let img = new Image();
		img.src = srcImg[count];
		document.getElementById("img-show").src = img.src;
		document.getElementById('img-title').innerText = titleImg[count];
		count++;
		console.log(count);
	}
	else{
		count = 0;
	}
}, 1000);


