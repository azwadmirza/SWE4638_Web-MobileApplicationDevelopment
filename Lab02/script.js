
let weekStart = document.getElementById('weekStart');
let weekEnd = document.getElementById('weekEnd');

let weekStartDate = new Date();
let weekEndDate = new Date(weekStartDate.getTime() + 6 * 24 * 60 * 60 * 1000);
weekStart.innerHTML = weekStartDate.toDateString();
weekEnd.innerHTML = weekEndDate.toDateString();

const renderTasks = (weekStartDate) => {
    const taskManager=document.getElementById("taskManager");
    taskManager.innerHTML="";
    for (let i = weekStartDate.getDay(); i <= weekStartDate.getDay() + 7; i++) {
        const taskDiv=document.createElement('tr');
        taskDiv.id=days[i%7];
        taskDiv.innerHTML="";
        taskManager.appendChild(taskDiv);
    }
    for (let i = weekStartDate.getDay(); i <= weekStartDate.getDay() + 7; i++) {
        let day = new Date(weekStartDate.getTime() + (i % 7) * 24 * 60 * 60 * 1000);
        tm.render(day);
    }
    taskManager.removeChild(taskManager.lastChild);
}

renderTasks(weekStartDate);


const prev = () => {
    weekStartDate.setDate(weekStartDate.getDate() - 7);
    weekEndDate = new Date(weekStartDate.getTime() + 6 * 24 * 60 * 60 * 1000);
    weekStart.innerHTML = weekStartDate.toDateString();
    weekEnd.innerHTML = weekEndDate.toDateString();
    renderTasks(weekStartDate);
}

const next = () => {
    weekStartDate.setDate(weekStartDate.getDate() + 7);
    weekEndDate = new Date(weekStartDate.getTime() + 6 * 24 * 60 * 60 * 1000);
    weekStart.innerHTML = weekStartDate.toDateString();
    weekEnd.innerHTML = weekEndDate.toDateString();
    renderTasks(weekStartDate);
}

const prevDate = document.getElementById('prevDate');
prevDate.addEventListener('click', prev);

const nextDate = document.getElementById('nextDate');
nextDate.addEventListener('click', next);