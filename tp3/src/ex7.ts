function identity<T>(value:T):T{
    return value
}
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Tests
const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers);
console.log(firstNumber);


class Repository<T> {
   items:T[]=[];
   add(item:T){
       this.items.push(item)
   }
   remove(item:T){
       this.items.splice(this.items.indexOf(item),1)
   }
   getAll(){
       return this.items
   }
}


interface ApiResponse<T> {
  data: T;         
  error?: string;  
}

// Exemple d'utilisation avec un objet
const response1: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Ilef" }
};