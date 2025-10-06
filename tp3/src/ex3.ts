let id:number|string;

id=1;
id="1";
type A = {nom:String};
type B = {id:number};
type AB=A&B;
let ab:AB={nom:"ilef",id:1};



type status="pending"|"done"|"canceled";
let s:status="done"; // ne peut pas etre autre chose

/// === egalité stricte meme de type , == egalité non stricte
let a:unknown;
a='hello everyone';
if(typeof a ==='string' ){
    const l:number=(a as string).length;
    console.log(l);
}

