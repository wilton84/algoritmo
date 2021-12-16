var horasTrabajadas = prompt("Ingrese el número de horas trabajadas");
var salarioPorHora = prompt("Ingrese el salario por hora");
var salarioBruto = horasTrabajadas * salarioPorHora;
var retenciones = 0;
function calcularRetenciones(salarioBruto) {
    if (salarioBruto <= 1100) {
        retenciones = salarioBruto * 0.1;
    } else if (salarioBruto <= 1500) {
        retenciones = 1100 * 0.1 + (salarioBruto - 1100) * 0.15;
    } else {
        retenciones = 1100 * 0.1 + (1500 - 1100) * 0.15 + (salarioBruto - 1500) * 0.25;
    }
}
calcularRetenciones(salarioBruto);
var salarioNeto = salarioBruto - retenciones;
console.log("Salario bruto: " + salarioBruto);
console.log("Retenciones: " + retenciones);
console.log("Salario neto: " + salarioNeto);