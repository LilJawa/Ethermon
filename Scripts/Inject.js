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
	GUI.TitleFont = TitleFont();
	GUI.TitleFont.load().then(function(font){ 
	document.fonts.add(font);
    	CreateCanvas();
	GUI.Canvas = document.getElementById('EthermonCanvas');
	GUI.Context = GUI.Canvas.getContext('2d');
	Draw();
	window.scrollTo(0,-100);
	});
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
	return new FontFace('PokemonSolid', 'url(https://cdn.rawgit.com/LilJawa/Ethermon/main/Fonts/Pokemon_Solid.ttf)');
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
        GUI.Context.font = GUI.TitleFont;
        GUI.Context.fillStyle = "#0095DD";
        GUI.Context.fillText(Config.Title +" v"+Config.Version, 25, 60);
}
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
