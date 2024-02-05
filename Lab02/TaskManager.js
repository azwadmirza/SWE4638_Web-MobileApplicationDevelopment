'use strict'
const days=["sun","mon","tue","wed","thu","fri","sat"];
const daysDefinition=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let taskPriority=document.getElementById("taskPriority");
let taskDueDate=document.getElementById("taskDueDate");
let taskName=document.getElementById("taskName");

const renderIndividualTask=(task)=>{
  taskDueDate.innerHTML=task.dueDate.toDateString()+" "+task.dueDate.toLocaleTimeString();
  taskName.innerHTML=task.name;
  taskPriority.innerHTML=task.priority;
}


class TaskManager {
  constructor(tasksInfo, id, callback) {
    this.id = id;
    this.callback = callback;
    this.tasks = tasksInfo
  }

  render(date) {
    let taskList = document.getElementById(days[date.getDay()]);
    taskList.innerHTML = `<td class="table-head">${daysDefinition[date.getDay()]}</td>`;
    let tasks = this.tasks.filter(task => task.dueDate.toDateString() === date.toDateString());
    console.log(tasks);
    tasks.forEach(task => {
      let taskItem = document.createElement('td');
      taskItem.className = 'task';
      taskItem.innerHTML = `${task.name} `;
      taskItem.onclick=()=>{
        renderIndividualTask(task);
        document.getElementById("task-description").style.display="block";
        this.callback(task);
      }
      taskList.appendChild(taskItem);
    });
  }
}







