var ecuCuad = function(a, b, c) {
    var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return x1 + " " + x2;
}

ecuCuad(1, 2, 1);