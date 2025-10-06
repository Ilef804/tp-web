function add(a, b) {
    return a + b;
}
function greet(name, age) {
    if (age !== undefined) {
        console.log("Bonjour ".concat(name, ", tu as ").concat(age, " ans !"));
    }
    else {
        console.log("Bonjour ".concat(name, " !"));
    }
}
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    //si tu n’indiques pas d’exposant, la valeur par défaut sera 2
    return Math.pow(base, exp);
}
// Implémentation
function combine(a, b) {
    return a + b;
}
console.log(combine(5, 10));
console.log(combine("Hello, ", "TS"));
