const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container");

//To Enter The Data

function AddData(){
if(inputBox.value === ''){
    alert("you must write something!");
}
else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
}
inputBox.value = '';
saveData();
}

//To Check or Uncheck Data And Also To delete The Data

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//To Save The Data After Refresh

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function Display(){
    listContainer.innerHTML = localStorage.getItem("data");
}
Display();