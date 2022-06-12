/* Useful DOM methods and properties */

const bodyElement = document.getElementsByTagName("body")[0]; //HTML Collection
// console.log("Body Element: ",bodyElement);

/*
const parentDiv = document.getElementsByClassName("parent")[0]; // HTML Collection
// console.log("parentDiv: ",parentDiv);
// parentDiv.innerHTML="";

const childDiv = document.getElementsByClassName("child");
console.log(childDiv);

const divWidthId = document.getElementById("myid");
console.log("divwithid",divWidthId);
*/

/*
<div class = "parent">
    <div class = "child">Child one</div>
    <div class = "child">Child two</div>
</div>
*/

const parentDiv = document.createElement("div");
parentDiv.classList.add("parent", "testClass");
parentDiv.classList.remove("testClass");

const childDivOne = document.createElement("div");
childDivOne.classList.add("child");
// const childDivOneText = document.createTextNode("child one");
// childDivOne.appendChild(childDivOneText);
childDivOne.append("child one");


const childDivTwo = document.createElement("div");
childDivTwo.classList.add("child")
// const childDiveTwoText = document.createTextNode("child two");
// childDivTwo.appendChild(childDiveTwoText);
childDivTwo.append("child two");

// parentDiv.appendChild(childDivOne);
// parentDiv.appendChild(childDivTwo);
parentDiv.append(childDivOne,childDivTwo)

bodyElement.appendChild(parentDiv);

const styleTestDiv = document.getElementsByClassName("styleTest")[0];
console.log("styleTestDiv's width: ",getComputedStyle(styleTestDiv).width);
console.log("styleTestDiv's height: ",getComputedStyle(styleTestDiv).height);
console.log("styleTestDiv's backgroundColor",getComputedStyle(styleTestDiv).backgroundColor);

