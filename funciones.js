/* Función buscarNombre */
var buscarNombre = function buscarNombre (texto) {
	var fs = require('fs');
	var lineas= fs.readFileSync(texto).toString().split("\n");
	var cadenaEncontrada;
	for (var i = 0; i < lineas.length; ++i) {
		var esta = lineas[i].includes("Alejandro");
		if(i == 2 && esta){
			cadenaEncontrada = lineas[i];
		   }
	 }
	 return cadenaEncontrada;
}; 


/* Exportación de funciones */
module.exports = {
	buscarNombre
}
