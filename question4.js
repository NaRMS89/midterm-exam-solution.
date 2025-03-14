function delayedGreeting(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, 2000);
}

delayedGreeting("Alice");
let task = [];

const Form = document.getElementById('task-form');
const Input = document.getElementById('task-input');
const List = document. getElementById('task-list');

function renderTasks(){
  List.innerHTML = '';
  task.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task}</span>
      <button onclick ="edittask(${index})">Edit</button>
      <button onclick ="deletetask(${index})">Delete</button>
    `;
    List.appendChild(li);
  });
}

function addTask(event){
  event.preventDefault();
  const newtask = Input.value.trim();
  if (newtask){
      task.push(newtask);
      Input.value = ''; 
      renderTasks();
  }
}

function editTask(index){
  const updatedtask = prompt('Edit your task:', task[index]);
  if (updatedtask !== null){
    task[index] = updatedtask.trim()
    renderTasks();
  }
}

function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    task.splice(index, 1);
    renderTasks();
  }
}

Form.addEventListener('submit', addTask());
renderTasks();