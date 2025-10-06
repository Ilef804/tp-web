var name = "ilef";
var age = 21;
var isAdmin = false;
var scores = [1, 2, 3, 4, 5];
var tuple = ["ilef", 21];
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var monRole = Role.User;
console.log(monRole);
console.log(Role[monRole]);
