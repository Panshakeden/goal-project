const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// onclick function from the button
function addTask(){

    // condition for the input filed
    if(inputBox.value ===''){
        alert("you must write a letter atleast");
    }
    else{
        // creating list of task in the innerHtml ul tag
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        // creating the x sign in the html as span method
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value=" ";
     // saving data on the local storage
     saveData();

}
// creating action on clicking the added events
listContainer.addEventListener('click', (e)=>{
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData();
// Removing the added tasks
    } else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// function to save data
const saveData =()=> {
   localStorage.setItem("data", listContainer.innerHTML);
}

// showing saved data
const showTask =()=>{
    listContainer.innerHTML=localStorage.getItem("data")

}

showTask();