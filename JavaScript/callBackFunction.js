//Call Back Function

const fetchData = (callback) => {
    console.log("fetching data here...");
    /*
        asynchronous code
        asynchronous code
        asynchronous code
    */
    console.log("Finished fetching data...");
    callback();
}

//global scope
const outerFunction = () =>{
    //function local scope
    const showUserProfile = () =>{
        console.log("Code to show user profile here...")
    }
    fetchData(showUserProfile);
}

outerFunction();

//finish aung wait pay tyy soe yin --> synchronous code
//finish aung ma wait pay buu soe yin --> asynchronous code