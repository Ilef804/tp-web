class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name,
        this.age=age
    }
    greet():void{
        console.log(`Hello ${this.name}`)
    }
}
let p:Person=new Person("ilef",21);
console.log(p);
p.greet();
class Student extends Person{
    school:string;
    constructor(name:string,age:number,school:string){
        super(name,age);
        this.school=school;
    }
}
abstract class Shape{
    abstract area():number;

}
class Circle extends Shape{
    r:number;
    constructor(r:number){
        super();
        this.r=r    
    }
    area():number{
        return Math.PI*this.r*this.r;
    }
}
let s:Shape=new Circle(2);
console.log(s.area());


class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(hight:number,widh:number){
        super();
            this.height=hight;
            this.width=widh;
        }
    
    area():number{
        return this.height*this.width;
    }
}
let r:Shape=new Rectangle(2,3);
console.log(r.area());

interface Drivable{
    drive():void;

}


class Car implements Drivable{
    drive():number{
        return 0
    }
}
let c:Car=new Car();
console.log(c.drive());