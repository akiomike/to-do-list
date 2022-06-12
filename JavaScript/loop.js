//loop

//For Loop

// const customers = [

//     {name:"customer1",phonenumber:"123456",email:"customer1@gmail.com",birthday:"4.5.1998"},
//     {name:"customer2",phonenumber:"456789",email:"customer2@gmail.com",birthday:"5.9.2000"},
//     {name:"customer3",phonenumber:"7890",email:"customer3@gmail.com",birthday:"5.5.2022"}
    
// ]

// for(let i = 0; i < customers.length;i++){
//     let customerEmail = customers[i].email;
//     let customerBirthday = customers[i].birthday;
//     if(customerBirthday === "5.5.2022"){
//         sendBirthdayEmail(customerEmail);
//     }else{
//         sendEmail(customerEmail);
//     }
   
// }

// const sendBirthdayEmail = (email) =>{
//     console.log("Sending special discount birthday email to:",email)
// }

// const sendEmail = (email) =>{
//     console.log("Sending email to :",email);
// }

// //get customers email
// const customer1email = customers[0].email;
// const customer2email = customers[1].email;
// const customer3email = customers[2].email;


// // send email
// sendEmail(customer1email);
// sendEmail(customer2email);
// sendEmail(customer3email);


 
// for(let i =0;i < 3;i++){
//     console.log("hello");
// }

// //iteration = 1, i = 0 --> will run for loop body
// //iteration = 2, i = 1 --> will run for loop body
// //iteration = 3, i = 2 --> will run for loop body
// //iteration = 4, i = 3 --> will run for loop body

// const cities = ["Yangon","Manadalay","Myitkyina","Beijing","Shanghai"];
// cities[0];// Yangon
// cities[1]; //Manadalay
// cities[2]; //Myitkyina
// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }

/*-----------------------------------------------------*/
//for loop

const cities = ["Yangon","Mandalay","Sittwe"];
for(let i = 0; i<cities.length;i++){
    let city = cities[i];
    console.log(city);
}

//for in loop
const customers = {name: "customer1", phoneNumber: "123456", email:"customer1@gmail.com"}
//dot notation
customers.phoneNumber;//123456
//bracket notation
customers["phoneNumber"];//123456


for(let prop in customers){
    console.log(customers[prop]);
}

/*----------------------------------------------------------------------*/
//while loop
let validNumber = true;
while(validNumber){
    let promptValue = prompt("Please Enter a number Between 1 and 100");
    const parseValue = parseInt(promptValue,10);

    if(parseValue > 1 && parseValue < 100){
        console.log("Entered value:",parseValue);
        validNumber = false;//exit condition
    }
}

let number = 1;
while(number < 10){
    console.log("Number is :"+number);
    number++;//exit condition
}

