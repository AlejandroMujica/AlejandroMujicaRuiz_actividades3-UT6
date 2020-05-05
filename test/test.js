// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var func = require('../funciones.js');

// Test
it('comprobar función buscar Nombre', function() {
	assert.equal(func.buscarNombre('../texto.txt'),"Alejandro");
});

