/* Document Object Mode;(DOM) CRUD*/

//c = create
/* <div>Welcome to Myanmar</div>*/
const h1Element = document.createElement("h1");
const textNode = document.createTextNode("Welcome to Yangon");
h1Element.appendChild(textNode);
const tagCollection = document.getElementsByTagName("body");//HTML Collection []
const bodyElement = tagCollection[0];
bodyElement.appendChild(h1Element);

//r = read
const readH1Element = document.getElementsByTagName("h1")[0];
console.log("Text inside h1 element before update: ",readH1Element.textContent);

//u = update
readH1Element.textContent = "Welcome to Mandalay";
console.log("Text inside h1 element after update: ",readH1Element.textContent);

// d = delete
readH1Element.remove();

/* Useful DOM methods and properties*/

