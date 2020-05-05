// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var func = require('../funciones.js');

// Test
it('comprobar función suma', function() {
	assert.equal(func.suma(1,3), 5);
	assert.equal(func.suma(-1,3), 2);
	assert.equal(func.suma(8,-3), 5);
});

