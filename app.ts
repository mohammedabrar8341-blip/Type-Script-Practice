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

// Type of interfaces and Ailases------------------------------------->

//interface [defind obj shape]
//Types (ka kaam hai apne khud ke user defined types banana)

/// interface example

// interface User {
//   username: string;
//   email: string;
//   password: string;
//   gender?: string; //The gender become optional
// }

// function getUserData(obj: User): void {
//   console.log(obj.username);
// }

// getUserData({ username: "Ravi", email: "pagalToBandonga", password: "123" });

//Extending interfaces

// interface user{
//     name:string
//     eamil:string
//     password:string
    
// }
// interface Admin extends user{   [//Calling user in admin and then using Admin to extend user value + Admin value]
//     admin:boolean
// }

// function abcd(obj:Admin){    
//     obj.admin
// }

// ex-2---->
// interface Abcd {
//     name:string
// }

// interface Abcd{
//     email:string
// }
// //if we name to interface same then they are merge
// function abcd(obj:Abcd){
//     obj.email=obj.name
// }

// Type of Aliases

// we can set the type of variable 
// example-1

// type adad = number;  //Adad is basically number in urdu
// let num1: adad;
// num1 = "string";  error 

// type value=string|null|number
// let a : value

//Intersection Type 

// type user={
//     name:string
//     email:string
// }

// type Admin=user &{
//     getDeatils(user:string):void
// }
// function abcd (a:Admin){
//     a.getDeatils
// }
