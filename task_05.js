
var area = function areaOfTriangle(side1, side2, side3) {
        var x = (side1 + side2 + side3) / 2;
        var y = Math.sqrt(x * (x - side1) * (x - side2) * (x - side3));
        return y;

}

console.log(area(10, 22, 25));