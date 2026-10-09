// // Function-------------------------------->
// function abcd(name: string, age: number, cb: (arg: string) => void) {
//   cb("hey");
// }

// abcd("abrar", 21, (arg: string) => {
//   console.log(arg);
// }); //we can check in node [node app.js]

// //optional and default paramenters---------------------------------------->
// function User(name: string, age: number, gender?: string) {}

// User("abrar", 21, "male");
// User("abrar", 21);

// //Funcation Rest parameters------------------------------------->
// ///...rest/spread
// //rest
// function abcd(...arr:string[]) {
//     console.log(arr);

// }
// abcd("rahman","ammar","mirza")

// //spred

// var arr =[1,2,3,4]
// var arr2 =[...arr]

// Overloading---------------------------->
//we can keep same nmae of the 2 funcation
//funcation signature
// function abcd(a: string): void;
// function abcd(a: number, b: number): number;

// function abcd(a: any, b?: any) {
//   if (typeof a === "string" && b === undefined) {
//     console.log("hey");
//   }
//   if (typeof a === "string" && typeof b === "number") {
//     return 123;
//   } else throw new Error("somthing is wrong");
// }

// abcd("hey");
// abcd("hey,123");

//Generics:--------------------------------------------->
//Generics funcation
//Generics interfaces
//Generics classes

//normal funcation:-
// function abcd(name:any) {
//     name.                                    it not provide string,numder method..
// }
// abcd("hey")
// abcd(12)
// abcd(true)

//Generics Funcation :----------
//hum ek funcation o use karte waqt bata skte hai ki funcation arugemnt ko kis type se treat kare

// function abcd <T>(a:T){}

// abcd<string>("abrar")
// abcd<number>(12)

// function Generics <H>(a:H,b:string,c:number){}

// Generics<string>("king","hi",4)

// Generics<boolean>(true,"",1)

// function Gen<T>(a:T) {
//     console.log(a);

// }
// Gen("abrar")

//Generics interfaces

// interface xyz<T>{
//     name:string,
//     age:number,
//     key:T
// }

// function abcd (obj:xyz<string>){}

// abcd({name:"abrar",age:21,key:"euweryeri"})

//Generics classes

// class BottleMarker<T> {
//   constructor(public key: T) {}
// }
// let b1 = new BottleMarker<string>("hey");
// let b2 = new BottleMarker(12);

// console.log(b1, b2);

//Extra:-

function abcd<T>(a: T, b: T): T {
  return a;
}

abcd("hey", "hi");
