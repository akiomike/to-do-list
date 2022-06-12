//function

let num1 = 0;

// function square(number){
//     num1 = number ** 2;
// }
// square(5);

// function calculate(number){
//     num1 = number ** 2;
//     num1 += 4;
//     num1 /= 2;
// }
// calculate(5);

function calculate(firstNumber,secondNumber,thirdNumber){
    num1 = firstNumber * secondNumber * thirdNumber;
    num1 += 4;
    num1 /= 2;
}
calculate(2,3,4);

//value returning function
let num2 = 0;
function getNumber(number){
    return number;
}
const myNumber =getNumber(5);

//buit-in function
alert("Hello World");

//ES6 arrow function
const myArrowFunction = (param1,param2) =>{
    const result = param1 * param2;
    return result;
}
myArrowFunction(2,2);