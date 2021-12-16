var n = prompt("Ingrese el número de términos de la serie Fibonacci que desea calcular");
var a = 0;
var b = 1;
var c = 0;
function fibonacci(n) {
    for (var i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
fibonacci(n);