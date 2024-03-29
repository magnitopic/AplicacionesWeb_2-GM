$("#playAgain").hide();
//var con la fecha y hora
var InitTime = new Date();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;
ctx.fillStyle = "white";

const img_1 = new Image();
const img_2 = new Image();
const img_3 = new Image();
const img_4 = new Image();

img_1.src = "imagenes/original_1.jpg";
img_2.src = "imagenes/diferencias1.jpg";
img_3.src = "imagenes/original_2.jpg";
img_4.src = "imagenes/diferencias2.jpg";

$(document).ready(() => {
	ctx.drawImage(img_1, 0, 0, 400, 400);
	ctx.drawImage(img_2, 400, 0, 400, 400);
});

var dif1 = 0;
var dif2 = 0;
var dif3 = 0;
var dif4 = 0;
var dif5 = 0;

var pantalla = 1;

$("#playAgain").click(() => {
	location.reload(true);
});

$("#canvas").click((e) => {
	var posCanvasX = $("#canvas").position().left;
	var posCanvasY = $("#canvas").position().top;

	var x = Math.round(e.pageX - posCanvasX);
	var y = Math.round(e.pageY - posCanvasY);
	console.log(x, y);
	var cordenadas = "Has hecho click en X: " + x + " Y:" + y;
	$("#cordenadas").html(cordenadas);

	if (pantalla == 1) {
		if (x >= 560 && x <= 613 && y >= 42 && y <= 53) {
			dif1 = 1;
			mensaje =
				"Correcto, has encontrado una diferencia " +
				(dif1 + dif2 + dif3 + dif4 + dif5) +
				"/5";
			$("#info").html(mensaje);
		} else if (x >= 543 && x <= 566 && y >= 166 && y <= 189) {
			dif2 = 1;
			mensaje =
				"Correcto, has encontrado una diferencia " +
				(dif1 + dif2 + dif3 + dif4 + dif5) +
				"/5";
			$("#info").html(mensaje);
		} else if (x >= 622 && x <= 644 && y >= 219 && y <= 258) {
			dif3 = 1;
			mensaje =
				"Correcto, has encontrado una diferencia " +
				(dif1 + dif2 + dif3 + dif4 + dif5) +
				"/5";
			$("#info").html(mensaje);
		} else if (x >= 500 && x <= 533 && y >= 251 && y <= 300) {
			dif4 = 1;
			mensaje =
				"Correcto, has encontrado una diferencia " +
				(dif1 + dif2 + dif3 + dif4 + dif5) +
				"/5";
			$("#info").html(mensaje);
		} else if (x >= 651 && x <= 725 && y >= 260 && y <= 308) {
			dif5 = 1;
			mensaje =
				"Correcto, has encontrado una diferencia " +
				(dif1 + dif2 + dif3 + dif4 + dif5) +
				"/5";
			$("#info").html(mensaje);
		} else {
			mensaje = "No está aquí. Sige juagando";
			$("#info").html(mensaje);
		}

		if (dif1 + dif2 + dif3 + dif4 + dif5 == 5) {
			alert("Has adivinado todas las diferencias de esta imagen");
			var FinTime = new Date();
			var TakenTime = FinTime.getTime() - InitTime.getTime();
			alert("Has tardado " + Math.round(TakenTime / 1000) + " segundos");
			pantalla = 2;
			ctx.drawImage(img_3, 0, 0, 400, 400);
			ctx.drawImage(img_4, 400, 0, 400, 400);
			dif1 = 0;
			dif2 = 0;
			dif3 = 0;
			$("#info").html("");
		}
	} else if (pantalla == 2) {
		if (x >= 494 && x <= 532 && y >= 207 && y <= 227) {
			dif1 = 1;
			mensaje =
				"Correcto, has encontrado una diferencia " +
				(dif1 + dif2 + dif3) +
				"/3";
			$("#info").html(mensaje);
		} else if (x >= 576 && x <= 656 && y >= 237 && y <= 258) {
			dif2 = 1;
			mensaje =
				"Correcto, has encontrado una diferencia " +
				(dif1 + dif2 + dif3) +
				"/3";
			$("#info").html(mensaje);
		} else if (x >= 700 && x <= 722 && y >= 169 && y <= 195) {
			dif3 = 1;
			mensaje =
				"Correcto, has encontrado una diferencia " +
				(dif1 + dif2 + dif3) +
				"/3";
			$("#info").html(mensaje);
		} else {
			mensaje = "No está aquí. Sige juagando";
			$("#info").html(mensaje);
		}

		if (dif1 + dif2 + dif3 == 3) {
			alert("Has adivinado todas las diferencias. Felicidades!");
			clearInterval(timer);
			$("#canvas").hide();
			$("#playAgain").show();
		}
	}
});

var color = 0;
//funcion que decrementa la var cuenta y muestra su valor en el div de cuenta atras
function decrementa_cuenta() {
	var cuenta = document.getElementById("cuentaAtras").innerText;
	cuenta--;
	document.getElementById("cuentaAtras").innerHTML = cuenta;
	if (cuenta == 0) {
		alert("Se te ha acabado el tiempo. GAME OVER.");
		clearInterval(timer);
		$("#canvas").hide();
		$("#playAgain").show();
	} else if (cuenta <= 10) {
		if (color == 0) {
			$("#contador").animate(
				{
					fontSize: "4em",
					color: "red",
				},
				300
			);
			color++;
		} else {
			$("#contador").animate(
				{
					fontSize: "3em",
					color: "black",
					backgroundColor: "inherit",
				},
				300
			);
			color = 0;
		}
	}
}

//ejecutar la función decrementa_cuenta cada segundo
var timer = setInterval(decrementa_cuenta, 1000);
