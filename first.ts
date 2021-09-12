const myNumber = 5;
const myName = 'Rajibul'
console.log('Hello Form Typescript', myNumber, myName)

// let money = 500;
// money = 'taka posisa';
// money = false;
// money = 44;

let money:number = 44;
let honey:string = 'O my sweet heart';
let funey:boolean = false;



function add (first:number, second:number): number{
    const result = first + second;
    return result;
} 
const output:number = add(45,32);
         

function doubleConsole(number:number):void{
    console.log(2*number);

 
}



// multi purpose

// function add (first:number | string, second:number | string): number | string{
//     const result:string | number = first + second;
//     return result;
// }

// const output:number = add(45,32);
// const fullName = add('Adam', 'sandler')