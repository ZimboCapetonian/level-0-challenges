function maximum(a, b, c) {
    max = 0;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

console.log(maximum(2, 6, 9));
console.log(maximum(1, 2, 3));