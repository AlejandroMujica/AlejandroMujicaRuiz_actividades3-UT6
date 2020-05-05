/* Función buscarNombre */
var buscarNombre = function buscarNombre (texto) {
	var fs = require('fs');
	var lineas= fs.readFileSync(texto).toString().split("\n");
	var cadenaEncontrada;
	for (var i = 0; i < lineas.length; ++i) {
		cadenaEncontrada = texto.indexOf("Alejandro")
	 }
	 return cadenaEncontrada;
}; 


/* Exportación de funciones */
module.exports = {
	buscarNombre
}
