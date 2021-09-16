document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', addToDo);
  const update = document.getElementById('update');
  update.innerHTML="My To-Do List: ";
  console.log(update);
})

function addToDo(e){
  e.preventDefault();
  const text = e.target.description.value;
  console.log(text);
  const taskList = document.getElementById('tasks');
  const newTask = document.createElement('li');
  newTask.innerHTML = text;

  const deleteButton = document.createElement('button');

  deleteButton.innerHTML='x';
  newTask.append(deleteButton);
  taskList.append(newTask);

  e.target.reset();

  deleteButton.addEventListener('click',  e=>{
    e.target.parentNode.remove()
  })
  
}