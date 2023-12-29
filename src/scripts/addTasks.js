const button = document.getElementById('add-button');
const newTask = document.getElementById("new-task");
const listContainer = document.getElementById("list-container");

button.addEventListener('click', () =>{
    if(newTask.value === ''){
        alert("You must type something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = newTask.value;
        listContainer.appendChild(li);
    }
})
