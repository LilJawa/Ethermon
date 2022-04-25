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
	LoadFont();
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
    GUI.Context.font = '32px EthermonSolid';
    GUI.Context.fillStyle = "#0095DD";
    GUI.Context.fillText(Config.Title +" v"+Config.Version, 25, 60);
}
function DestroyObjects(Element){
	DOM = document;
	Element.remove(); 
	DOM.getElementById('title').remove();
	DOM.getElementById('GameDescription').remove();
  }  
  function LoadFont(){
	new FontFace('EthermonSolid', 'url(../Fonts/Pokemon_Solid.ttf)').load().then(function(font){ document.fonts.add(font); });
	new FontFace('EthermonHollow', 'url(../Fonts/Pokemon_Hollow.ttf)').load().then(function(font){ document.fonts.add(font); });      
}    
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }