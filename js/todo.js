// add button
let add = document.querySelector("#add");
let liste = document.querySelector("ul");
let input = document.querySelector("input");
add.addEventListener("click", function(event){
  if (input.value!="") {
  addTodo();
} else{
  alert("You can't add an empty item")
}

});
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    if (input.value!="") {
    addTodo();
  } else{
    alert("You can't add an empty item")
  }}
});
function addTodo() {
  liste.innerHTML += `<li class="item"> <input type="checkbox"> ${input.value}     <button class="delete"> delete</button>  </li>`;
  let del = document.querySelectorAll(".delete");
for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", deleteTodo);
}
let checkboxes = document.querySelectorAll("input[type='checkbox']");

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function() {
    let toDoItem = this.parentNode;
    toDoItem.classList.toggle("checked");
  });
}
input.value=""
}
//delete button

function deleteTodo(event) {
    let parentLi = event.target.parentNode;
    parentLi.remove();
}

