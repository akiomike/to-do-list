/*Most used built-in methods and functions*/

//ES6 Array Filter,map
const customers = [
    {name:"customer1" , email:"customer1@gamil.com",gender:"female",age:20},
    {name:"customer2" , email:"customer2@gmail.com",gender:"male",age:25},
    {name:"customer3" , email:"customer3@gmail.com",gender:"female",age:30},
    {name:"customer4" , email:"customer4@gmail.com",gender:"male",age:28}
]

customers.filter(isMale);
const isMale = (arrayElement) => {
    return arrayElement.gender === "male";
}

/*
    1.Call callback function with each element from the array as the parameter to the callback function.
    2.Callback function must return a boolean(true/false) value based on the condition it wants to test.
    3.If the callback function returns true, add the element to the final array.
    4.Repeat the above steps for every element in the array.
*/

// const isMale2 = (arrayElement) => {
//     return arrayElement.gender === "male" && arrayElement.age > 25;
// }

const isMale2 = arrayElement => arrayElement.gender == "male" && arrayElement.age > 25;

// customers.filter(isMale2);
// customers.filter(arrayElement.gender === "male" && arrayElement.age > 25);