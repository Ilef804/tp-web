interface User{
    id:number,
    name:string,
    email?:string,
    readonly isAdmin:boolean
}
let user1:User={
    id:1,
    name:"ilef",
    isAdmin:true
}
console.log(user1);


interface Admin extends User{
    permissions:string[]
}
let a1:Admin={
    id:1,
    name:"ilef",
    isAdmin:true,
    permissions:["read","write"]
}
console.log(a1);