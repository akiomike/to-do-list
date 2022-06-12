//Most useful built-in method and function

//Array map with ES6 arrow function

const customers = [

    {name:"customer1" , email:"customer1@gmail.com", gender:"male"},
    {name:"customer2" , email:"customer2@gmail.com", gender:"female"},
    {name:"customer" , email:"customer3@gmail.com", gender:"male"},
    {name:"customer" , email:"customer4@gmail.com", gender:"female"}
]

for(let i = 0; i < customers.length; i++){
    customers[i].bookings = [];
}

customers.map (element => {
    element.bookings = [];
    return element;
});

/*

1. Call the callback function with each element in the array as the parameter to the callback function.
2. Populate the retruned array with the result from the callback.
3. Repeat the above steps for every element in the array.

*/