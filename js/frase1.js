var vocales = ["a", "e", "i", "o", "u"];
var frase_a_adinar = "Era un hombre a una nariz pegado";
var frase_guiones = "";
var puntos = 100;
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
		alert(
			"Felicidades! Has adivinado la frase con " + puntos + "/100 puntos"
		);
		alert("A ver si adivinas la siguiente.");
		//Vamos a meter en una cookie para que los pueda usar frase2.html
		Cookies.set("puntos", puntos);
		location.href = "frase2.html";
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
