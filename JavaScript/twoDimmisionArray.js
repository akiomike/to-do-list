/*2 Dimensional Array (2D) array*/

const num1 = [1,2,3];//one dimensional
const num2 = [[1,2],[3,4],[5,6]];

//Access
num1[2];//3
num2[0];//[1,2]
num2[1];//[3,4]
num2[2];//[5,6]
num2[num2.length-1];//[5,6]

//looping array (1D)
for(let i = 0; i < num1.length;i++){
    let element = num1[i];
    console.log(element);
}


//looping array (2D)
for(let i = 0;i < num2.length;i++){
    let currentArray = num2[i];
    for(let j = 0;j < currentArray.length;j++){
        let element = currentArray[j];
        console.log("Current element:",element);
    }
}
