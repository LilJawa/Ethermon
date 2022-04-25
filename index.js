Import();
function Import(){
	var script = document.createElement('script');
 	script.type = 'text/javascript';
 	script.src = 'https://liljawa.github.io/Ethermon/Scripts/Inject.js';   
 	script.onload = function() {
  	StartEthermon();
	}; 
  	document.head.appendChild(script);
}