Import();
function Import(){
	var script = document.createElement('script');
 	script.type = 'text/javascript';
 	script.src = 'https://cdn.rawgit.com/LilJawa/Ethermon/main/import.js';   
 	script.onload = function() {
  	Init();
	}; 
  	document.head.appendChild(script);
}
