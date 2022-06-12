 /*Scopes*/
 //Global scope vs Local Scope

 //code here can NOT use carName
 let city = "Yangon";
 function myFunction(){
     var carName = "Volvo";//Local Scope
     //var,let,const
     num1 = 10;
     //code here CAN use carName
     console.log("City name is :",city)
 }

 console.log(carName);//will raise error
 console.log(num1);//will not raise error

 
 //Block Scope
 {
     let num = 2;
     const numWithConst =10;
     //let and const variables are block scopes.so they can't be called outside scope or "Global Scope"
     var numWithVar = 20;
     //var variable is function scope .So,it can be called outside scope or "Global Scope"
 }

 console.log(num);//raise error
 console.log(numWithConst);//raise error
 console.log(numWithVar);//will not raise error

 const test = () =>{
     var num1 = 10;

     if(num1 == 10){
         var numWithVar = 1;
         let numWithLet = 2;
         const numWithConst = 3;
     }
     console.log(numWithVar);
     console.log(numWithLet);
     console.log(numWithConst);
 }

 test();