/*Events*/


// emitter, listener or handler
// an event occurs, run some codes

const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("book")[0]//HTML Collection []
const originalImage = image.src;
const imageArray = [
    "https://images.unsplash.com/photo-1653634163540-0b95d47da13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1653638268218-67b0df099ee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1653632445017-0da95027672c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1653185053677-26b081c1a214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1653564906654-9f2484215e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
];

let counter = 0;

const myFunction = () =>{
    if(counter === 5){
        image.src = originalImage;
        counter = 0;
        return;
    }
    else{
        const imageLink = imageArray[counter];
    image.src = imageLink;
    counter += 1;
    console.log("Counter value is :", counter); 
    }
};

myButton.addEventListener("click",myFunction);

// const myFunction2 = () =>{
//     console.log("function two");
// };

// myButton.onclick = myFunction;

// myButton.addEventListener("click",myFunction);

/*myButton.onclick = myFunction;*/

/*------------------------------------------------------------------------------------*/

/*
1. images in array
2. counter
3. get image in array using 
*/