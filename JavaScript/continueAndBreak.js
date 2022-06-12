//continue and break

const customers = [
    {name:"Hla Hla",email:"hlahla@gmail.com",gender:"female"},
    {name:"Kyaw Kyaw",email:"kyawkyaw@gmail.com",gender:"male"},
    {name:"Tun Tun",email:"tuntun@gmail.com",gender:"male"},
    {name:"Mu Mu",email:"mumu@gmail.com",gender:"female"}
];

// for(let i = 0;i<customers.length;i++){
//     let currentCustomer  = customers[i];
//     if(currentCustomer.gender === "male"){
//         continue;
//     }
//     console.log("Sending email to:",currentCustomer.email);
// }


for(let i = 0;i<customers.length;i++){
    let currentCustomer  = customers[i];
    console.log("Sendign email to : ",currentCustomer.email)
    if(i === 2){
        break;
    }
}

//while
// let i = 0;
// while(i < customers.length){
//     let currentCustomer = customers[i];
//     i++;//exit condition
//     if(currentCustomer.gender === "female"){
//         continue;
//     }
//     console.log("Sending email to :",currentCustomer.email);
// }

let i = 0;
while(i < customers.length){
    let currentCustomer = customers[i];
    console.log("Sending email to :",currentCustomer.email);
    i++;//exit condition
    if(i === 3){
        break;
    }
}