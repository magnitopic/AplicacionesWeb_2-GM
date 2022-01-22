$("#playAgain").hide();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

var imagenPelota = new Image();
imagenPelota.src = "imagenes/bola.png";

var muneco = new Image();
muneco.src = "imagenes/muneco.png";

var porteria = new Image();
porteria.src = "imagenes/porteria.png";

//Variables posicion pelota
var x_bola = Math.random() * 720 + 40;
var y_bola = 0;
//teclas
const teclaD = 100;
const teclaA = 97;
const teclaW = 119;
const teclaS = 115;
const teclaD_MAYUS = 68;
const teclaA_MAYUS = 65;
const teclaW_MAYUS = 87;
const teclaS_MAYUS = 83;

//direcciones de la pelota
const derecha = 1;
const abajo = 2;
const izquierda = 3;
const arriba = 4;
const derechaAbajo = 12;

//Variables para saver que tecla se ha pulsado
var d_pulsada = false;
var s_pulsada = false;

var direccion = abajo;
var vel = 2;

zona_meta = crearZona(300, 500, 200, 300);

function doMore() {
	var rnd = Math.random() * 620 + 40;
	zona_obstaculo = crearZona(rnd, 200, 35, 100);
	var rnd = Math.random() * 620 + 40;
	zona_obstaculo2 = crearZona(rnd, 300, 35, 100);
	var rnd = Math.random() * 620 + 40;
	zona_obstaculo3 = crearZona(rnd, 400, 35, 100);
}
doMore();
function crearZona(x_zona, y_zona, ancho_zona, alto_zona) {
	var zona = {
		x: x_zona,
		y: y_zona,
		ancho: ancho_zona,
		alto: alto_zona,
	};
	return zona;
}

function pintar() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(imagenPelota, x_bola, y_bola, 40, 40);
	ctx.drawImage(
		porteria,
		zona_meta.x,
		zona_meta.y,
		zona_meta.ancho,
		zona_meta.alto
	);
	ctx.drawImage(
		muneco,
		zona_obstaculo.x,
		zona_obstaculo.y,
		zona_obstaculo.ancho,
		zona_obstaculo.alto
	);
	ctx.drawImage(
		muneco,
		zona_obstaculo2.x,
		zona_obstaculo2.y,
		zona_obstaculo2.ancho,
		zona_obstaculo2.alto
	);
	ctx.drawImage(
		muneco,
		zona_obstaculo3.x,
		zona_obstaculo3.y,
		zona_obstaculo3.ancho,
		zona_obstaculo3.alto
	);
	switch (direccion) {
		case derecha:
			x_bola += vel;
			break;
		case izquierda:
			x_bola -= vel;
			break;
		case abajo:
			y_bola += vel;
			break;
		case arriba:
			y_bola -= vel;
			break;
		case derechaAbajo:
			x_bola += vel;
			y_bola += vel;
			break;
	}
	//Detectar colisiones
	if (
		x_bola >= zona_meta.x &&
		x_bola <= zona_meta.x + zona_meta.ancho &&
		y_bola >= zona_meta.y &&
		y_bola <= zona_meta.y + zona_meta.alto
	) {
		x_bola = Math.random() * 720 + 40;
		y_bola = 0;
		vel++;
		doMore();
	} else if (
		x_bola > canvas.width ||
		y_bola > canvas.height ||
		x_bola < 0 ||
		y_bola < 0
	) {
		alert("GAME OVER. No te puedes salir de la pantalla");
		clearInterval(intervalo);
		$("#playAgain").show();
	} else if (
		x_bola >= zona_obstaculo.x &&
		x_bola <= zona_obstaculo.x + zona_obstaculo.ancho &&
		y_bola >= zona_obstaculo.y &&
		y_bola <= zona_obstaculo.y + zona_obstaculo.alto
	) {
		alert("GAME OVER. El otro jugador ha parado tu bola");
		clearInterval(intervalo);
		$("#playAgain").show();
	} else if (
		x_bola >= zona_obstaculo2.x &&
		x_bola <= zona_obstaculo2.x + zona_obstaculo2.ancho &&
		y_bola >= zona_obstaculo2.y &&
		y_bola <= zona_obstaculo2.y + zona_obstaculo2.alto
	) {
		alert("GAME OVER. El otro jugador ha parado tu bola");
		clearInterval(intervalo);
		$("#playAgain").show();
	} else if (
		x_bola >= zona_obstaculo3.x &&
		x_bola <= zona_obstaculo3.x + zona_obstaculo3.ancho &&
		y_bola >= zona_obstaculo3.y &&
		y_bola <= zona_obstaculo3.y + zona_obstaculo3.alto
	) {
		alert("GAME OVER. El otro jugador ha parado tu bola");
		clearInterval(intervalo);
		$("#playAgain").show();
	}
}

$(document).ready(() => {
	pintar();
});

$(document).keypress((e) => {
	$("#info1").html("Tecla pulsada: " + e.keyCode);
	switch (e.keyCode) {
		case teclaW:
		case teclaW_MAYUS:
			direccion = arriba;
			console.log(direccion);
			break;
		case teclaA:
		case teclaA_MAYUS:
			direccion = izquierda;
			console.log(direccion);
			break;
		case teclaS:
		case teclaS_MAYUS:
			s_pulsada = true;
			if (d_pulsada == true) {
				direccion = derechaAbajo;
			} else {
				direccion = abajo;
			}
			break;
		case teclaD:
		case teclaD_MAYUS:
			d_pulsada = true;
			if (s_pulsada == true) {
				direccion = derechaAbajo;
			} else {
				direccion = derecha;
			}
			console.log(direccion);
			break;
	}
});

//when keey is released
$(document).keyup((e) => {
	$("#info2").html("tecla soltada: " + e.keyCode);
	switch (e.keyCode) {
		case teclaS_MAYUS:
		case teclaS:
			s_pulsada = false;
			break;
		case teclaD_MAYUS:
		case teclaD:
			d_pulsada = false;
			break;
	}
});

$("#playAgain").click(() => {
	location.reload(true);
});

alert(
	"Llevar la pelota a la zona blanca de meta:\nA <- izquierda \nS <- abajo\nD <-derecha\nW <- arriba"
);
var intervalo = setInterval(pintar, 10);
