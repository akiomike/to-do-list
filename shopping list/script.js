const inputTag = document.getElementsByClassName("form-control")[0];//HTML collection
const shoppingListTag =document.getElementsByClassName("shoppingListContainer")[0];

// let productID = 1;
const handleChange = (event) =>{
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv = document.createElement("div");
    parentDiv.addEventListener("click",() =>{
        const classExit = parentDiv.classList.contains("purchased");
        parentDiv.classList.add("purchased");
       
        if(classExit){
            parentDiv.classList.remove("purchased")
        }
        else{
            parentDiv.classList.add("purchased");
        }
    })
    const spanTag = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid","fa-trash-can");
    trashIcon.addEventListener("click",() =>{
      productContainer.remove();  
    })
    // spanTag.id = productID;
    parentDiv.classList.add("productName");
    // const product = productID.toString() +". "+ inputValue;
    spanTag.append(inputValue);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIcon);
    shoppingListTag.append(productContainer);
    inputTag.value="";
    // productID += 1;
};

inputTag.addEventListener("change",handleChange);