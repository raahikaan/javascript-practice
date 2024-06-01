let todoList = [
  { item: "Buy Milk", dueDate: "2024-10-04" },
  { item: "Go to College", dueDate: "2024-10-05" },
];
displayItem();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  if (todoItem && todoDate) {
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = "";
    dateElement.value = "";
    displayItem();
  }
}

function displayItem() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
        <div class="todo-item">
          <span>${item}</span>
          <span>${new Date(dueDate).toLocaleDateString()}</span>
          <button class="btn-delete" onclick="todoList.splice(${i}, 1); displayItem();">Delete</button>
        </div>
      `;
  }

  containerElement.innerHTML = newHtml;
}
