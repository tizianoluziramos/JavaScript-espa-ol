"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = void 0;
exports.definirVariable = definirVariable;
// Objeto para almacenar variables
const variables = {};
exports.variables = variables;
// Función para definir una variable en el formato "nombre: tipo = valor"
function definirVariable(asignacion) {
    // Usar una expresión regular para extraer el nombre, tipo y valor
    const regex = /^(?<nombre>\w+):\s*(?<tipo>\w+)\s*=\s*(.+)$/;
    const match = asignacion.match(regex);
    if (match) {
        const nombre = match[1]; // Primer grupo de captura
        const tipo = match[2]; // Segundo grupo de captura
        const valor = match[3]; // Tercer grupo de captura
        // Convertir el valor al tipo adecuado
        let valorConvertido;
        switch (tipo.toLowerCase()) {
            case 'number':
                valorConvertido = Number(valor);
                break;
            case 'string':
                valorConvertido = String(valor);
                break;
            case 'boolean':
                valorConvertido = valor.toLowerCase() === 'true';
                break;
            default:
                console.log(`Error: Tipo '${tipo}' no reconocido.`);
                return;
        }
        // Almacenar la variable en el objeto
        variables[nombre] = valorConvertido;
    }
    else {
        console.log('Error: Formato de asignación no válido. Usa "nombre: tipo = valor".');
    }
}
