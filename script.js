var es1 = true;
var es2 = true;
var es3 = true;

//Los ifs pueden ser simplificados de la forma (condicion)?"caso if":"caso else"
//¨Para la function esconder1() la haria de este modo
//function esconder1(){
//	(es2===false)?document.getElementById('esconder2').style.display = 'none';
//	if(es3===false)?document.getElementById('esconder3').style.display = 'none';
//document.getElementById('esconder1').style.display = 'block';
//es1 = false;
//}
// esto ayuda al usuario a la hora de cargar la pagina
function esconder1(){
	if(es2===false){
		document.getElementById('esconder2').style.display = 'none';
	}
	if(es3===false){
		document.getElementById('esconder3').style.display = 'none';
	}
document.getElementById('esconder1').style.display = 'block';
es1 = false;
}
function esconder2(){
	if(es1===false){
		document.getElementById('esconder1').style.display = 'none';
	}
	if(es3===false){
		document.getElementById('esconder3').style.display = 'none';
	}
document.getElementById('esconder2').style.display = 'block';
es2=false;
}
function esconder3(){
	if(es1===false){
		document.getElementById('esconder1').style.display = 'none';
	}
	if(es2===false){
		document.getElementById('esconder2').style.display = 'none';
	}
	document.getElementById('esconder3').style.display = 'block';
	es3 =false;
}
