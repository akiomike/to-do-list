//Error Handling

//try....catch
const users =["Aung Aung","Bo Bo","Co Co","Dom","Eric"];

const showChatSliderbar = () =>{
    for(const i = 0;i<users.length;i++){
        console.log("code to show user here.");
    }
}

const showLeftSlidebar = () =>{
    console.log("code to show left slide bar here");
}

const showMainSlidebar = () =>{
    console.log("Code to show main slider bar here");
}

try{
    showChatSliderbar();
}
catch(error){
    console.log("Catch error here:",error);
}
showLeftSlidebar();
showMainSlidebar();