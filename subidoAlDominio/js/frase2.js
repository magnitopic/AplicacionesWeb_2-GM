//Recuperamos el valor de la cookie
var puntos = parseInt(Cookies.get("puntos")) + 200;
console.log(puntos);

var vocales = ["a", "e", "i", "o", "u"];
var frase_a_adinar = "La memoria es la inteligencia de los tontos";
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
	var introducido = prompt("Intruduce la frase");
	if (frase_a_adinar.toLowerCase() == introducido.toLocaleLowerCase()) {
		alert(
			"Felicidades! Has adivinado la frase con " + puntos + "/300 puntos"
		);
		alert("A ver si adivinas la ultima.");
		//Vamos a meter en una cookie para que los pueda usar frase2.html
		Cookies.set("puntos", puntos);
		location.href = "frase3.html";
	} else {
		alert("Vuelve a intentarlo");
		puntos -= 40;
	}
}

function desvelar() {
	var letra_introducida = prompt("Introduce una letra");
	var array_giones = frase_guiones.split("");
	for (i in vocales) {
		if (letra_introducida == vocales[i]) {
			puntos -= 10 * 2;
		} else {
			puntos -= 10;
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
