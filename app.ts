// var a = 12;

//Basic data types in TypeScript - (Primitives and reference)

// primitive data type -(number,string,boolean)
// reference data types -(Array,object,tuple)

// let a = 10;
// a = "Sameer";  //error

// Arrays
// let a = [1, 2, 3, 4, { name: "RaviKishan" }];
// let arr: number[] = [1, 2, 3, 4, 5];

//Tuples
// let arr: [string, number] = ["Bharat", 75];

//Enums (enumerations)
// enum UserRoles {
//   USER = "user",
//   ADMIN = "admin",
// }
// UserRoles.USER;

// enum StatusCodes {
//   ABANDONED = "code is 500",
//   NOTFOUND = "code is 404",
// }
// StatusCodes.NOTFOUND

//Any, unknown , void ,undefined,null,never

//Type inference and type annotations
//   inference - Automatically infere the data type
// let a = 12;
// let b = 23;
// let name = "Rahul";

//  Anotations - In this we have to manually define the data type
//let b:[number]=54
// let name: string = "Rahul";
// let a: number | boolean | string;
// a = 12;
// a = true;

// function abcd(a: number, b: number): void {
//   console.log("Returns nothing ");
// }