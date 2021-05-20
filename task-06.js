function maximum(a, b, c) {
    max = Math.max(a, b, c);
    
    return max;
}

console.log(maximum(2, 6, 9));
console.log(maximum(1, 2, 3));

function max2 (a, b, c) {
    var answer = 0;
    switch (val) {
        case a:
            answer = Math.max(a, b, c);
            break;
        case b:
            answer = Math.max(a, b, c);
            break;
        case c:
            answer = Math.max(a, b, c);
            break;
        default:
            answer = Math.max(a, b, c, d);
            break;
    }
    return answer;
}

console.log(max2(1, 3, 4, 5))