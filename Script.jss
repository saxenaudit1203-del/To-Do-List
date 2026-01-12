function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button class="done" onclick="toggleDone(this)">✔</button>
      <button class="delete" onclick="deleteTask(this)">✖</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(btn) {
  const li = btn.closest("li");
  li.remove();
}

function toggleDone(btn) {
  const li = btn.closest("li");
  li.classList.toggle("completed");
}
