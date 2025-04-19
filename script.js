const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("You must write soemthing!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
  inputBox.value = "";
  saveData();

}

listcontainer.addEventListener("click",function(e){
  if(e.targer.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();

  }
  else if(e.targer.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }

}, false);

function saveData(){
  localStorage.setItem("data",listConatiner.innerHTML);
}
function showTask(){
  listConatiner.innerHTML =localStorage.getItem("data");
}
showTask();