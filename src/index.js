//document.addEventListener("DOMContentLoaded", () => {
  //document.querySelector("#create-task-form").addEventListener('CreateNewTask', (e) => {
    //e.preventDefault()
    //buildToDo(e.target.newToDo.value)
  //})
//});

//function buildToDo(newToDo){
 // let p = document.createElement('p');
  //let btn = document.createElement('button')
  //btn.textContent = 'cancel'
  //p.textContent = `${newToDo}`
  //p.appendChild(btn)
  //console.log(p)
  //document.querySelector('#create-task-form').appendChild(p)
//}



document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formNode = document.querySelector("#create-task-form");
  formNode.addEventListener("submit", buildTaskLister);
});

const buildTaskLister = (e) => {
  e.preventDefault();
  const inputNode = document.querySelector("#new-task-description");
  const tasksNode = document.querySelector("#tasks");

  const buttonNode = createButton();
  const listNode = createLI(inputNode.value, buttonNode);
  tasksNode.append(listNode);
};

const deleteTask = (e) => {
  const liNode = e.target.parentNode;
  liNode.remove();
};

const createLI = (task, button) => {
  const listNode = document.createElement("li");
  listNode.textContent = task;
  listNode.append(button);
  return listNode;
};

const createButton = () => {
  const buttonNode = document.createElement("button");
  buttonNode.textContent = "X";
  buttonNode.id = "delete-button";
  buttonNode.addEventListener("click", deleteTask);
  return buttonNode;
};
