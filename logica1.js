
document.querySelector('form').addEventListener('submit', function(event){
	event.preventDefault();

	let nombre = document.getElementById('nombre').value;
	let edad = document.getElementById('edad').value;

	if (edad < 5 || edad > 12) {
		alert('La edad debe estar entre 5 y 12 años.');
		return;
	}

	if (nombre.trim() === '') {
		alert('Ingresa un nombre válido.');
		return;
	}

	operar();
});

// Operaciones
function operar() {
	let operacion = document.getElementById('operacion').value;
	let resultado;

	let num1 = parseInt(prompt("Ingresa el primer número: "));
	let num2 = parseInt(prompt("Ingresa el segundo número: "));
	
	switch(operacion) {
		case 'sumar':
			resultado = num1 + num2;
			break;
		case 'restar':
			resultado = num1 - num2;
			break;
		case 'multiplicar':
			resultado = num1 * num2;
			break;
		case 'dividir':
			resultado = num1 / num2;
			break;
	}

	mostrarResultado(resultado);
}

// Efectos
function mostrarResultado(resultado) {
	document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
}