function identity(value) {
    return value;
}
function getFirst(arr) {
    return arr[0];
}
// Tests
var numbers = [1, 2, 3];
var firstNumber = getFirst(numbers);
console.log(firstNumber);
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
// Exemple d'utilisation avec un objet
var response1 = {
    data: { id: 1, name: "Ilef" }
};
