//Recuperamos el valor de la cookie
var puntos = parseInt(Cookies.get("puntos")) + 300;
console.log(puntos);

var vocales = ["a", "e", "i", "o", "u"];
var frase_a_adinar = "Sabe mas el diablo por viejo que por diablo";
var frase_guiones = "";
//para recorrer un string en JS se usa un for in
for (i in frase_a_adinar) {
	if (frase_a_adinar[i] == " ") {
		frase_guiones += " ";
	} else {
		frase_guiones += "_";
	}
}
document.getElementById("frase_a_mostrar").innerHTML = frase_guiones;

function adivinar() {
	var introducido = prompt("Introduce la frase");
	if (frase_a_adinar.toLowerCase() == introducido.toLocaleLowerCase()) {
		alert("Felicidades! Has adivinado la ultima frase con " + puntos +"/600 puntos");
		location.href = "index.html";
	} else {
		alert("Vuelve a intentarlo");
		puntos -= 60;
	}
}

function desvelar() {
	var letra_introducida = prompt("Introduce una letra");
	var array_giones = frase_guiones.split("");
	for (i in vocales) {
		if (letra_introducida == vocales[i]) {
			puntos -= 15 * 2;
		} else {
			puntos -= 15;
		}
	}

	for (i in frase_a_adinar) {
		var letra = frase_a_adinar[i];
		if (letra.toLowerCase() == letra_introducida.toLowerCase()) {
			array_giones[i] = letra;
		}
	}
	frase_guiones = array_giones.join("");
	document.getElementById("frase_a_mostrar").innerHTML = frase_guiones;
}
