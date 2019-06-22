
var tamanhotexto =  new Number();
var tamanhotexto = 20;
function tamanhooriginal(){
	document.getElementById("acessibilidade").style.fontSize=tamanhotexto+'px';
}

function fonte(e){
	var elemento = document.getElementById("acessibilidade");
	var fonte = elemento.style.fontSize;
	if (e == 'a') {
		fonte =  parseInt(fonte)+2+'px';
	}else if(e == 'b'){
		fonte =  parseInt(fonte)-2+'px';
	}else if(e == 'c'){
		fonte = tamanhotexto+'px';
	}
	elemento.style.fontSize=fonte;
}

