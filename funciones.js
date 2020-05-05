/* Función buscarNombre */
var buscarNombre = function buscarNombre (texto) {
	var fs = require('fs');
	var lineas= fs.readFileSync(texto).toString().split("\n");
	var cadena;
	for (var i = 0; i < lineas.length; ++i) {
		cadena = cadena.indexOf(Alejandro)
	 }
	 return cadena;
}; 


/* Exportación de funciones */
module.exports = {
	buscarNombre
}
