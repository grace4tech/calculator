
const buttons = document.querySelectorAll(".buttons .buttonsValues");
const equationOutput  = document.getElementById("equationOutput");
const previousEqOutput  = document.getElementById("previoutEqOutput");
const equalEquation = document.getElementById("equalBtn"); 
const deleteBtn = document.getElementById("deleteBtn");
let equation = []

const operators = document.querySelectorAll(".signs");

const modeBtn = document.getElementById("modeBtn");
// TYPE THE EQUATION
buttons.forEach(button=>{
  button.addEventListener("click",function(){
    equation.push(button.textContent);
    equationOutput.textContent = equation.join(""); 
    if(button.textContent !== "0"){
      deleteBtn.textContent = "X"
      deleteBtn.style.color="red";
    }else{
    deleteBtn.textContent = "AC"
    deleteBtn.style.color="black";

    }
  })
})

//CALCULATE
equalEquation.addEventListener("click",()=>{
  const equationString = equation.join("");
  if(equationString.trim() === "") return "";
  previousEqOutput.textContent = "0";

  try{
  const result  = eval(equationString);
  equationOutput.textContent = result;
  previousEqOutput.textContent = equationString;
  equation = [result.toString()];
  
  }catch(err){
    equationOutput.textContent = "Error";
  }
  
})

//DELETE 
deleteBtn.addEventListener("click",()=>{
equation.pop();
equationOutput.textContent = equation.join("");
if(equation.length === 0){
      deleteBtn.textContent = "AC"
    deleteBtn.style.color="black";
}
})

//MODE 
modeBtn.addEventListener("click", () => {
  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.classList.toggle("darkMode");
    btn.classList.toggle("lightMode");
  });
});

//KEYBOARD 
document.addEventListener("keydown" , (event)=>{
  const key = event.key;

  //Ifa key is a number or dot
  if(!isNaN(key) || key === "."){
    equation.push(key);
    equationOutput.textContent = equation.join("");
    deleteBtn.textContent = "X";
    deleteBtn.style.color="red";
  }

  //Operators 
  if(["+","-","*","/","%"].includes(key)){
    equation.push(key);
      equationOutput.textContent = equation.join("");
  }

  //Enter = Equal 
  if(key === "Enter"){
      equalEquation.click();
  }

  //Delete 
  if(key === "Backspace"){
    deleteBtn.click();
  }

  // Reset (AC) 
  if (key === "Escape") {
    equation = [];
    equationOutput.textContent = "";
    previousEqOutput.textContent = "";
    deleteBtn.textContent = "AC";
    deleteBtn.style.color = "black";
  }
});






