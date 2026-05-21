let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let selectedDate = null;

const daysDiv = document.getElementById("days");
const monthYear = document.getElementById("monthYear");

function renderCalendar() {
  daysDiv.innerHTML = "";

  let today = new Date();
  let todayDate = today.getDate();
  let todayMonth = today.getMonth();
  let todayYear = today.getFullYear();

  let firstDay = new Date(currentYear, currentMonth, 1).getDay();
  let totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  let tasks = JSON.parse(localStorage.getItem("tasks")) || {};

  monthYear.innerText =
    new Date(currentYear, currentMonth)
      .toLocaleString('default',{month:'long'}) + " " + currentYear;

  // Empty boxes before first date
  for (let i = 0; i < firstDay; i++) {
    let empty = document.createElement("div");
    daysDiv.appendChild(empty);
  }

  // Dates
  for (let d = 1; d <= totalDays; d++) {

    let div = document.createElement("div");
    div.classList.add("day");
    div.innerText = d;

    let fullDate = `${d}-${currentMonth+1}-${currentYear}`;

    // Highlight today
    if (
      d === todayDate &&
      currentMonth === todayMonth &&
      currentYear === todayYear
    ) {
      div.classList.add("today");
    }

    // Dot if task exists
    if (tasks[fullDate] && tasks[fullDate].length > 0) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      div.appendChild(dot);
    }

    div.onclick = () => selectDate(d, div);

    daysDiv.appendChild(div);
  }
}

function selectDate(day, element) {

  document.querySelectorAll(".day")
    .forEach(d => d.classList.remove("selected"));

  element.classList.add("selected");

  selectedDate = `${day}-${currentMonth+1}-${currentYear}`;

  document.getElementById("selectedDate").innerText = selectedDate;

  showTasks();
}

function addTask() {

  let input = document.getElementById("taskInput");
  let task = input.value;

  if (!task || !selectedDate) return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || {};

  if (!tasks[selectedDate]) {
    tasks[selectedDate] = [];
  }

  tasks[selectedDate].push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";

  renderCalendar();
  showTasks();
}

function showTasks() {

  let list = document.getElementById("taskList");

  list.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || {};

  if (tasks[selectedDate] && tasks[selectedDate].length > 0) {

    tasks[selectedDate].forEach((t, index) => {

      let li = document.createElement("li");

      li.innerHTML = `
        ${t}
        <button class="delete-btn" onclick="deleteTask(${index})">X</button>
      `;

      list.appendChild(li);
    });
  }
}

function deleteTask(index) {

  let tasks = JSON.parse(localStorage.getItem("tasks")) || {};

  tasks[selectedDate].splice(index, 1);

  // Remove date if empty
  if (tasks[selectedDate].length === 0) {
    delete tasks[selectedDate];
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderCalendar();
  showTasks();
}

/* REMINDER */
function checkReminder(){

  let today = new Date();

  let todayStr =
    `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || {};

  if(tasks[todayStr] && tasks[todayStr].length > 0){

    setTimeout(()=>{
      alert(
        "⚠️ Reminder!\nYou have tasks today:\n\n" +
        tasks[todayStr].join("\n")
      );
    },1000);
  }
}

document.getElementById("prev").onclick = () => {

  currentMonth--;

  if(currentMonth < 0){
    currentMonth = 11;
    currentYear--;
  }

  renderCalendar();
};

document.getElementById("next").onclick = () => {

  currentMonth++;

  if(currentMonth > 11){
    currentMonth = 0;
    currentYear++;
  }

  renderCalendar();
};

renderCalendar();
checkReminder();

planner.js