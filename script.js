document.getElementById("add-btn").addEventListener("click", function() {
  const typetask = document.getElementById("typeTask").firstElementChild;
  const tasks = document.querySelector(".tasks");

  if (typetask.value.trim()) {
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <div class="mark">
        <i class="fa-regular fa-circle"></i>
      </div>
      ${typetask.value}
      <div class="cross">
        <input type="time">
        <i class="fa-solid fa-xmark"></i>
      </div>
    `;
    tasks.appendChild(newTask);
    typetask.value = "";
  }
});

document.querySelector(".tasks").addEventListener("click", function(event) {
  if (event.target.matches(".fa-xmark")) {
    const li = event.target.closest("li");
    li.remove();
  }
});

document.getElementById("deleteAll-btn").addEventListener("click", function() {
  const tasks = document.querySelector(".tasks");
  tasks.innerHTML = "";
});