var anime = [];
var text = "";
var count = 0;

var width = Math.floor(window.innerWidth / 10);
var height = Math.floor(window.innerHeight / 10);

for (var i = 0; i + 1 < height; i++) {
	text = String(Math.floor(Math.random () * 2));
	for (var i2 = 0; i2 + 2 < width; i2++) {
		text = text + String(Math.floor(Math.random () * 2));
	};
	anime.push(text);
};

var view = "";
	console.log(anime.length);

for (var i = 0; i < anime.length; i ++){
	console.log(i);
	view = view + anime[i] + "</br>";
};
document.getElementById("text").innerHTML= view;

//繰り返し
var t = 0;
function loop(){
	for (var i = anime.length - 1; i > 0; i --){
		console.log(i);
		anime[i] = anime[i-1]
	};
	text = String(Math.floor(Math.random () * 2));
	for (var i2 = 0; i2 + 2 < width; i2++) {
		text = text + String(Math.floor(Math.random () * 2));
	};
	anime[0] = text;

	var view = "";
	for (var i = 0; i < anime.length; i ++){
		view = view + anime[i] + "</br>";
	};
	document.getElementById("text").innerHTML= view;
	setTimeout("loop()",50);
};
setTimeout("loop()",50);
