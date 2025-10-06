let name: string="ilef";
let age:number=21;
let isAdmin:boolean=false;

let scores:number[]=[1,2,3,4,5];
let tuple:[string,number]=["ilef",21];

enum Role{
    User,
    Admin,
    SuperAdmin
}

let monRole=Role.User;
console.log(monRole);
console.log(Role[monRole])