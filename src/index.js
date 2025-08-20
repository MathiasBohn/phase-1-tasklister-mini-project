document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = event.target.elements["new-task-description"].value; 
    buildToDo(task);
    event.target.reset();
  });

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  }
});