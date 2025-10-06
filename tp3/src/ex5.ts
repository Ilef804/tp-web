function add(a:number,b:number):number{
    return a+b
}
function greet(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Bonjour ${name}, tu as ${age} ans !`);
  } else {
    console.log(`Bonjour ${name} !`);
  }
}

function power(base:number, exp:number=2){
//si tu n’indiques pas d’exposant, la valeur par défaut sera 2
    return Math.pow(base,exp)
}

// Signatures de surcharge
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Implémentation
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(5, 10));        
console.log(combine("Hello, ", "TS")); 
