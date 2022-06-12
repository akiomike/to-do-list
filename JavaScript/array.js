/*Array*/
{} //empty object,unordered collection
[] //empty array, ordered collection

//why?
const unordered = {z: "hello", 1: "world", a: "test"};
const ordered = ["Yangon","Mandalay","Sittwe","Taungyi"];

//index starts at 0
//Accessing array element
ordered[0];
ordered[1];
ordered[2];

//array.length property
ordered.length;


// get last item from an array
const index = ordered.length - 1;
ordered[index];

//add element to the end of an array
ordered.push("Taungyi");

//add element to the begining of an array
ordered.unshift("Bejiing");

//remove the last element from an array
ordered.pop();

//remove element from the beginning of an array
ordered.shift();

// get index of an element
ordered.indexOf("Myitkyina");

// remove element(s) by index position
ordered.splice(startingPosition,numberOfElementToReove);