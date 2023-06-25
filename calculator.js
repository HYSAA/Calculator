const buttonsEL= document.querySelectorAll("button");
const inputID= document.getElementById("result")
for(let i = 0 ; i < buttonsEL.length; i++){
buttonsEL[i].addEventListener("click", () =>{
    const buttonValue= buttonsEL[i].textContent;
     if (buttonValue=== "C"){
        clearResult()
     }else if (buttonValue=== "="){
        calculateResult();
     }
     else {
     appendValue(buttonValue)
     }
});
}
function clearResult(){
inputID.value="";
}
function calculateResult(){
 inputID.value=eval(inputID.value);
}
function appendValue(buttonValue){
inputID.value+= buttonValue;
}