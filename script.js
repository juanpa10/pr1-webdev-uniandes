var es1 = false;
var es2 = true;
var es3 = true;

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
function abrirTextArea(){
	document.getElementById('esconderTA').style.display = 'block';
}
function sendMail() {
    var link = "mailto:jp.camacho10@uniandes.edu.co"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('textoMail').value)
    ;
    window.open(link);
}