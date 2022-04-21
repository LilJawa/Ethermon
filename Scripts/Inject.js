var Config = {
	Title: 'Ethermon',
	Version: 1.01
} 
var GUI = {
	DOM: document,
	Canvas: null,
	Context: null,
	TitleFont: null
}
function StartEthermon(){
	TitleFont();
	
    	CreateCanvas();
	GUI.Canvas = document.getElementById('EthermonCanvas');
	GUI.Context = GUI.Canvas.getContext('2d');
	Draw();
	window.scrollTo(0,-100);
	
}
function CreateCanvas(){
	if (CanvasExists()) GUI.Canvas.remove();
	GUI.Canvas = GUI.DOM.createElement(`canvas`);
	GUI.Canvas.id = 'EthermonCanvas';
	GUI.Canvas.height = 200;
	GUI.Canvas.width = window.innerWidth;
	GUI.DOM.getElementById('play-wrapper').prepend(GUI.Canvas);
}
function TitleFont(){
	console.log('Adding Font');
	var Render = new Image();
	Render.onload = function(){
  	GUI.Context.drawImage(this, 0,0,250, 250);
  	GUI.Context.font         = '68px PokemonSolid';
  	GUI.Context.fillStyle = 'orangered';
  	GUI.Context.textBaseline = 'top';
  	GUI.Context.fillText  ('Ethermon', 0, 270);
	};
	AddCSS('https://cdn.rawgit.com/LilJawa/Ethermon/main/Scripts/CSS/Ethermon.css');
}
function CanvasExists(){
	GUI.Canvas = GUI.DOM.getElementById("EthermonCanvas");
	return GUI.Canvas != undefined;
}
function Draw() {
        GUI.Context.clearRect(0, 0, GUI.Canvas.width, GUI.Canvas.height);
        DrawInfo();
        requestAnimationFrame(Draw);
}
function DrawInfo() {
        GUI.Context.font = '32px PokemonSolid';
        GUI.Context.fillStyle = "#0095DD";
        GUI.Context.fillText(Config.Title +" v"+Config.Version, 25, 60);
}
function AddCSS(location) {
  var head = GUI.DOM.head;
  var link = GUI.DOM.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = location;
  head.appendChild(link);
}
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
