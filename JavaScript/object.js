// object

{} // empty object
// const person1 = {
//     name:"Aung Aung",
//     age : 50,
//     height:180,
//     city : "Yangon",
//     dateOfBirth : 1970,
//     isActor:true,
//     walk: () =>{
//         alert("Aung Aung is walking")
//     }
// }

//Accessing object's properties and methods
//1) dot notation
let name=person1.name
person1.age
person1.height
person1.dateOfBirth
person1.walk()

// 2) bracket notation
person1["name"]
person1["age"]
person1["height"]
person1["city"]
person1["dateOfBirth"]
person1["isActor"]
person1["walk"]() //to call method inside object


const person1 = {
    name:"Aung Aung",
    age : 50,
    height:180,
    city : "Yangon",
    dateOfBirth : 1970,
    isActor:true,
    walk: () =>{
        alert("Aung Aung is walking")
    }
}

// setting new properties and methods
person1.hobby = "football";
person1.isMale = true;
person1.eat = () =>{
    alert("Aung Aung is eating")
} 

const input1Value = "";
const input2Value = "";
const propertyName = "donatedBy"+ input1Value;
//donatedByMgMg: 10000
person1[propertyName] = input2Value


// window object
alert("hello")
console.log("welcome"); 