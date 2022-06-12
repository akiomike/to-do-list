//Most useful buit_in methods and properties

//String
let textString = "Welcome to Myanamr";
textString.toUpperCase();
textString.toLowerCase();
textString.length;
textString.indexOf("z");//-1

//Number
let num = "10"
let result = parseInt(num,10);//10
result < 10;

let num1 = 10;
num1.toString();//"10"

//Object

const customer = {name:"customer1",email:"customer1@gmail.com",gender:"female"};
Object.values(customer);//result --> 'customer1','customer1@gmail.com','female'
Object.keys(customer);//result --> 'name','email','gender'
customer.hasOwnProperty("age");//hasOwnProperty menthod used to check whether true or false;So,the result --> false
customer.hasOwnProperty("name")//result --> true;

//Array
const cities = ["Yangon","Mandalay","Myitkyina"];

cities.length;//3
cities[cities.length - 1];//last element, eg."Myitkyina"
cities.push("Beijing");// ["Yangon","Mandalay","Myitkyina","Beijing"]
cities.pop();// remove the last element and return it. eg:"Myitkyina"
cities.indexOf("Yangon");// 0
cities.indexOf("Shanghai");// -1
cities.slice(0, 2);//["Yangon","Mandalay"]; (first parameter(start index) is start point and second parameter(end index) is end point(end point is always subtracted 1 so the value is 1))
cities.splice(0, 2);// return the removed elements in a new array. eg: ["Yangon","Mandalay"];(first parameter(start index) is where you wanna remove first and second parameter(delete count) is how many numbers you wanna remove)
cities.join(",")// "Yangon,Mandalay,Myitkyina"