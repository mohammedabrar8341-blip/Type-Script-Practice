//DAY-2 Introducation to Classes & Objects
//Classes and objects
//class definition
//construcators
//Access modifiers (public,private,protected)
//Readonly properties
//Optional properties
//paramenter properties
//getters and setters
//static members
//abstract classes and methods

// class Devies {
//   name = "lg";
//   price = 12000;
//   category = "digital";
// }

// let d1 = new Devies();
// let d2 = new Devies();

//Construcators----------------------->[machine use to shape a product ]

// class BottleMaker {
//   constructor(
//     public name: string,
//     public price: number,
//   ) {}
// }

// let b1 = new BottleMaker("Milton", 1200);
// let b2 = new BottleMaker("cello", 1800);

// class HumanMarker{
//     age=0
//     constructor(
//         public name :string,
//         public isHandsome:boolean
//     ){}
// }

// let h1= new HumanMarker("abrar",true)

// class DinningTime {
//   time = 0;
//   constructor(
//     public name: string,
//     public age: number,
//     public order: boolean,
//   ) {}
// }
// let m1 = new DinningTime("abrar", 20, true);

// class music {
//   public name;
//   public artist;
//   public thumbnail;
//   public free;
//   constructor(name: string, artist: string, thumnail: string, free: boolean) {
//     this.name = name;
//     this.artist = artist;
//     this.thumbnail = thumnail;
//     this.free = free;
//   }
// }

// let m1 = new music("marjawa", "arjit sing", "", false);
// m1.name = "ae dil hai mushkil";

// this keyword------------------->
// class Abcd {
//   name = "raj";
// age=22
//   changeName() {
//     //------------------>[if we created funcation in class then it will be method ]
//     this.name = "vike";
//     this.changeAge()
//   }
//   changeAge(){
//     this.age=55
//   }

//classes & objects:-public and private Access Modifier------------------>
//Public:-
// class BottleMaker {
//   constructor(private name: string) {
//     this.name = name;
//   }
//   changing() {
//     this.name = "raj";
//   }
// }
// //[if we use public we can change variable in any where in class & obj]
// let b1 = new BottleMaker("milton");
// b1.changing();
// console.log(b1);

//Private:-
// [pivate can also change from anywhere in same class ]
// class Bottle {
//   public Material: string = "Meatl";
//   constructor(public name: string) {}
// }
// class MetalBottle extends Bottle {
//   constructor(name: string) {
//     super(name);
//   }
//   getValue() {
//     (console.log(this.name), this.Material);
//   }
// }
// let b1 = new MetalBottle("Celo");

// Protected:-  [it can use one class+if it  entends then also it can use ]

// class Car {
//   protected brand: string = "TATA";
// }

// class CarDeatils extends Car {
//   public Model: string = "2023";
//   changeName() {
//     this.brand = "xyz";
//   }
// }

// let c1 = new CarDeatils();
// c1.changeName()
// // c1.brand="something"    //error

//Extra :----------------------------------------.> [readonly]
// class User {
//     constructor(public readonly name:string) {

//     }
//     changeName(){
//         this.name="hello "
//     }

// }
// let u1=new User("abrar")
// u1.changeName()

//Paramater----------------------------------->
class User {
  constructor(
    public name: string,
    public age: string,
    public gender?: string,        // ? we use this for optional 
  ) {}
}
let u1 = new User("abrar", "21", "male");
let u2 = new User("atif", "17");
