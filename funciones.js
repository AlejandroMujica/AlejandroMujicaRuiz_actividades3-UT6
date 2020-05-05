/* Función buscarNombre */
var buscarNombre = function buscarNombre (texto) {
	var fs = require('fs');
	var lineas= fs.readFileSync(texto).toString().split("\n");
	var cadenaEncontrada;
	for (var i = 0; i < lineas.length; ++i) {
		if(texto.indexOf('Alejandro') > 0){
			cadenaEncontrada = lineas[i];
		   }
	 }
	 return cadenaEncontrada;
}; 


/* Exportación de funciones */
module.exports = {
	buscarNombre
}
