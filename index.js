Import();
function Import(){
	var script = document.createElement('script');
 	script.type = 'text/javascript';
 	script.src = 'https://cdn.rawgit.com/LilJawa/Ethermon/main/Scripts/Inject.js';   
 	script.onload = function() {
  	StartEthermon();
	}; 
  	document.head.appendChild(script);
}
