var vocales = ["a", "e", "i", "o", "u"];
var frase = [
	"En un lugar de la mancha",
	"Quien anda mucho y lee mucho",
	"Caminante no hay camino",
	"La memoria es la inteligencia de los tontos",
	"Era un hombre a una nariz pegado",
];
var frase_a_adinar = "";
var frase_guiones = "";
var puntos = 300;
var indiceFrase = 0;

function prepararFrase() {
	frase_guiones = "";
	for (i in frase_a_adinar) {
		if (frase_a_adinar[i] == " ") {
			frase_guiones += " ";
		} else {
			frase_guiones += "_";
		}
	}
	document.getElementById("frase_a_mostrar").innerHTML = frase_guiones;
}

function adivinar() {
	var introducido = prompt("Introduce la frase");
	if (frase_a_adinar.toLowerCase() == introducido.toLocaleLowerCase()) {
		alert(
			"Felicidades! Has adivinado la frase de indice: " +
				indiceFrase +
				" Con " +
				puntos +
				"/300 puntos"
		);
		if (indiceFrase == 4) {
			alert("Felicidades!!! Has adivinado todas la frases");
		} else {
			alert("A ver si adivinas la siguiente.");
		}
		indiceFrase++;
		frase_a_adinar = frase[indiceFrase];
		prepararFrase();
	} else {
		alert("Vuelve a intentarlo");
		puntos -= 20;
	}
}

function desvelar() {
	var letra_introducida = prompt("Introduce una letra");
	var array_giones = frase_guiones.split("");
	for (i in vocales) {
		if (letra_introducida == vocales[i]) {
			puntos -= 5 * 2;
		} else {
			puntos -= 5;
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

//preparar y mostrar la frase indicada por numeroFrase
frase_a_adinar = frase[indiceFrase];
prepararFrase();
