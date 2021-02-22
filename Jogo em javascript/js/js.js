var fimdejogo=false;
var podeAtirar=true;
var velocidade=5;
var posicaoY = parseInt(Math.random() * 334);
var TECLA = {
	W: 87,
	S: 83,
	D: 68
	}
var pontos=0;
var salvos=0;
var perdidos=0;
var energiaAtual=3;
energiaAtual--;
velocidade=velocidade+0.3;


var somDisparo=document.getElementById("somDisparo");
var somExplosao=document.getElementById("somExplosao");
var musica=document.getElementById("musica");
var somGameover=document.getElementById("somGameover");
var somPerdido=document.getElementById("somPerdido");
var somResgate=document.getElementById("somResgate");


class='anima2'
class='anima3'

gameOver();
//M�sica em loop
musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
musica.play();

somDisparo.play();

somResgate.play();

somExplosao.play();

somPerdido.play();

energia();
moveinimigo2();




function moveinimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
	$("#inimigo2").css("left",posicaoX-3);
				
		if (posicaoX<=0) {
			
		$("#inimigo2").css("left",775);
					
		}
} // Fim da fun��o moveinimigo2()



moveamigo();


function moveamigo() {
	
	posicaoX = parseInt($("#amigo").css("left"));
	$("#amigo").css("left",posicaoX+1);
				
		if (posicaoX>906) {
			
		$("#amigo").css("left",0);
					
		}

} // fim da fun��o moveamigo()



moveinimigo1();

function moveinimigo1() {

	posicaoX = parseInt($("#inimigo1").css("left"));
	$("#inimigo1").css("left",posicaoX-velocidade);
	$("#inimigo1").css("top",posicaoY);
		
		if (posicaoX<=0) {
		posicaoY = parseInt(Math.random() * 334);
		$("#inimigo1").css("left",694);
		$("#inimigo1").css("top",posicaoY);
			
		}
} //Fim da fun��o moveinimigo1()

if (topo<=0) {
		
	$("#jogador").css("top",topo+10);
}


if (topo>=434) {	
	$("#jogador").css("top",topo-10);
		
}


//Principais vari�veis do jogo
	


	jogo.pressionou = [];



	//Verifica se o usu�rio pressionou alguma tecla	
	
	$(document).keydown(function(e){
	jogo.pressionou[e.which] = true;
	});


	$(document).keyup(function(e){
       jogo.pressionou[e.which] = false;
	});

	movejogador();


	function movejogador() {
	
	if (jogo.pressionou[TECLA.W]) {
		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top",topo-10);
	
	}
	
	if (jogo.pressionou[TECLA.S]) {
		
		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top",topo+10);	
	}
	
	if (jogo.pressionou[TECLA.D]) {
		
		//Chama fun��o Disparo	
	}

	} // fim da fun��o movejogador()

    disparo();
    function disparo() {
	
        if (podeAtirar==true) {
            
        podeAtirar=false;
        
        topo = parseInt($("#jogador").css("top"))
        posicaoX= parseInt($("#jogador").css("left"))
        tiroX = posicaoX + 190;
        topoTiro=topo+37;
        $("#fundoGame").append("<div id='disparo'></div");
        $("#disparo").css("top",topoTiro);
        $("#disparo").css("left",tiroX);
        
        var tempoDisparo=window.setInterval(executaDisparo, 30);
        
        } //Fecha podeAtirar
     
               function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left",posicaoX+15); 
    
                    if (posicaoX>900) {
                            
                window.clearInterval(tempoDisparo);
                tempoDisparo=null;
                $("#disparo").remove();
                podeAtirar=true;
                        
                       }
        } // Fecha executaDisparo()
    } // Fecha disparo()
    colisao();
    
    function colisao() {
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        // jogador com o inimigo1
    
        console.log(colisao1);
    
    } //Fim da fun��o colisao()    
    function colisao() {
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        // jogador com o inimigo1
            
            if (colisao1.length>0) {
                
            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
            explosao1(inimigo1X,inimigo1Y);
        
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
            }
        
        } //Fim da fun��o colisao()

        //Explos�o 1
function explosao1(inimigo1X,inimigo1Y) {
	$("#fundoGame").append("<div id='explosao1'></div");
	$("#explosao1").css("background-image", "url(imgs/explosao.png)");
	var div=$("#explosao1");
	div.css("top", inimigo1Y);
	div.css("left", inimigo1X);
	div.animate({width:200, opacity:0}, "slow");
	
	var tempoExplosao=window.setInterval(removeExplosao, 1000);
	
		function removeExplosao() {
			
			div.remove();
			window.clearInterval(tempoExplosao);
			tempoExplosao=null;
			
		}
		
	} // Fim da fun��o explosao1()

    //Inimigo2 com o amigo
		
if (colisao6.length>0) {
	    
    amigoX = parseInt($("#amigo").css("left"));
    amigoY = parseInt($("#amigo").css("top"));
    explosao3(amigoX,amigoY);
    $("#amigo").remove();
            
    reposicionaAmigo();
            
    }
    //Explos�o3
	
function explosao3(amigoX,amigoY) {
    $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
    $("#explosao3").css("top",amigoY);
    $("#explosao3").css("left",amigoX);
    var tempoExplosao3=window.setInterval(resetaExplosao3, 1000);
    function resetaExplosao3() {
    $("#explosao3").remove();
    window.clearInterval(tempoExplosao3);
    tempoExplosao3=null;
            
    }
    
    } // Fim da fun��o explosao3


    $("#fundoGame").append("<div id='placar'></div>");


    pontos=pontos+100;
pontos=pontos+50;
salvos++;
perdidos++;

placar();


function placar() {
	
	$("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");
	
} //fim da fun��o placar()

$("#fundoGame").append("<div id='energia'></div>");

//Barra de energia

function energia() {
	
    if (energiaAtual==3) {
        
        $("#energia").css("background-image", "url(imgs/energia3.png)");
    }

    if (energiaAtual==2) {
        
        $("#energia").css("background-image", "url(imgs/energia2.png)");
    }

    if (energiaAtual==1) {
        
        $("#energia").css("background-image", "url(imgs/energia1.png)");
    }

    if (energiaAtual==0) {
        
        $("#energia").css("background-image", "url(imgs/energia0.png)");
        
        //Game Over
    }

} // Fim da fun��o energia()

//Fun��o GAME OVER
function gameOver() {
	fimdejogo=true;
	musica.pause();
	somGameover.play();
	
	window.clearInterval(jogo.timer);
	jogo.timer=null;
	
	$("#jogador").remove();
	$("#inimigo1").remove();
	$("#inimigo2").remove();
	$("#amigo").remove();
	
	$("#fundoGame").append("<div id='fim'></div>");
	
	$("#fim").html("<h1> Game Over </h1><p>Sua pontua��o foi: " + pontos + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
	} // Fim da fun��o gameOver();

//Reinicia o Jogo
		
function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
	start();
	
} //Fim da fun��o reiniciaJogo