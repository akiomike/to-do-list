/* Destructring, Spread Operator,Rest Parameter (ES6 Features)*/

//Object destructuring
const customers = {name:"customer1",email:"customer1@gmail.com",gender:"female"};
// const name = customers.name;
// const email = customers.email;
// const gender = customers.gender;

//ES6
const {name,email,gender} = customers;//need to equal object's property names and variable names from here
console.log(name,email,gender);

//Array destructring
// const cities = ["Yangon","Mandalay","Sittwe"];
// const city1 = cities[0];
// const city2 = cities[1];
// const city3 = cities[2];

//ES6
const [city1,city2,city3] = cities;
console.log(city1,city2,city3)

const [cityone, ,citythree] = cities;//if don't want to need city2("Mandalay"),it will be been blank

/*-------------------------------------------------------------------------------------------------*/

//Spread Operator(...)
//Object
const customer = {name:"customer1",email:"customer1@gmail.com",gender:"male"};
// const copyCustomer = Object.assign({},customer);//copy object

//ES6
const copyCustomer ={...customer};


//Array
const cities = ["Yangon","Mandalay","Sittwe"];
const newCitiesArray = [].concat(cities);

//ES6
const newCopyCitiesArray = [...cities];

// const newCopyCitiesArray2 = ["TaungGyi",...cities];//TaungGyi will be added at first place in this copy array

const newCopyCitiesArray2 = [...cities,"TaungGyi",];//TaungGyi will be added at last place this copy array


/*--------------------------------------------------------------------*/

//Rest parameter(...)

const calculate = (...param) => {
    let total = 0;
    for(let i = 0;i < param.length;i++){
        total += param[i];
    }
    return total;
}

calculate(1,2,3)