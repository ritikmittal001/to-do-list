const formE1 = document.querySelector(".form");
const inputE1 = document.querySelector(".input");

const ulE1 = document.querySelector(".list");

console.log(inputE1.value);

formE1.addEventListener("submit", (event)=>{
    event.preventDefault();
    // console.log(inputE1.value);
    toDoList();

});

function toDoList(){
    let newTask = inputE1.value;
    const liE1 = document.createElement("li");
    liE1.innerText = newTask;
    ulE1.appendChild(liE1);
    inputE1.value = "";
    const checkBtnE1 = document.createElement("div");
    checkBtnE1.innerHTML`<i class="fas fa-check-square">`;
    liE1.appendChild(checkBtnE1);
    const trashBtnE1 = document.createElement("div");
    trashBtnE1.innerHTML`<i class="fa fa-trash"></i>`;
}