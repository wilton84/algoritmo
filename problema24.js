var hanoi = function(n, from, to, aux) {
    if (n === 1) {
        console.log('Mover disco de ' + from + ' a ' + to);
    } else {
        hanoi(n - 1, from, aux, to);
        console.log('Mover disco de ' + from + ' a ' + to);
        hanoi(n - 1, aux, to, from);
    }
    };

    hanoi(5, 'A', 'C', 'B');