var Config = {
	Title: 'Ethermon'
} 
var GUI = {
	DOM: document,
	Canvas: null,
	Context: null
}
Init();
//Import();
function Init(){
    	GUI.Canvas = GUI.DOM.getElementById("canvasId");
	if (GUI.Canvas != undefined) GUI.Canvas.remove();
	AddCanvas();
	GUI.Canvas = document.getElementById('canvasId');
	GUI.Context = GUI.Canvas.getContext('2d');
	Draw();
}
function AddCanvas(){
GUI.Canvas = GUI.DOM.createElement(`canvas`);
GUI.Canvas.id = 'canvasId';
GUI.Canvas.height = 200;
GUI.Canvas.width = window.innerWidth;
GUI.DOM.getElementById('play-wrapper').prepend(GUI.Canvas);
}
function Import(){
	var script = document.createElement('script');
 	script.type = 'text/javascript';
 	script.src = 'https://raw.githubusercontent.com/LilJawa/Ethermon/main/import.js';    
  	GUI.DOM.head.appendChild(script);
}

function Draw() {
        GUI.Context.clearRect(0, 0, GUI.Canvas.width, GUI.Canvas.height);
        DrawInfo();
        requestAnimationFrame(Draw);
}
 function DrawInfo() {
        GUI.Context.font = "18px Arial";
        GUI.Context.fillStyle = "#0095DD";
        GUI.Context.fillText(Config.Title, (GUI.Canvas.width/4)-40, 60);
}


window.scrollTo(0,-100);
const sleep = ms => new Promise(r => setTimeout(r, ms));
