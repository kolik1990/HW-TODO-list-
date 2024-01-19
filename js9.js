document.addEventListener("DOMContentLoaded", function () {
  const wrap = document.createElement("div");
  wrap.classList.add("wrap");
  document.body.appendChild(wrap);

  const toDoList = document.createElement("div");
  toDoList.classList.add("toDoList");
  wrap.appendChild(toDoList);

  const title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = "ToDo List";
  toDoList.appendChild(title);

  const form = document.createElement("form");
  form.classList.add("form");
  form.setAttribute("action", "#");
  toDoList.appendChild(form);

  const input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Добавьте свою задачу...");
  form.appendChild(input);

  const delAll = document.createElement("div");
  delAll.classList.add("delAll");
  toDoList.appendChild(delAll);
  delAll.innerHTML = "Delete All";

  input.addEventListener("keydown", function (e) {
    if (e.code === "Enter" && e.target.value !== "") {
      const task = document.createElement("div");
      task.classList.add("task");
      form.appendChild(task);

      const done = document.createElement("div");
      done.classList.add("done");
      task.appendChild(done);
      done.innerHTML = "[v]";

      const text = document.createElement("p");
      text.classList.add("text");
      task.appendChild(text);
      text.textContent = e.target.value;
      e.target.value = "";

      const del = document.createElement("div");
      del.classList.add("del");
      del.innerHTML = "[x]";
      task.appendChild(del);

      done.addEventListener("click", function () {
        done.classList.toggle("active");
        text.classList.toggle("lineThrough");
      });

      text.addEventListener("click", function (e) {
        text.innerHTML = prompt(
          "Редактирование задачи :",
          `${e.target.innerHTML}`
        );
        if (text.innerHTML === "") {
          document.querySelector(".task").outerHTML = "";
        }
      });

      del.addEventListener("click", function () {
        if (confirm("Удалить задачу?")) {
          document.querySelector(".task").outerHTML = "";
        }
      });
    }
  });

  delAll.addEventListener("click", function () {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((e) => (e.outerHTML = ""));
  });

  const style = document.createElement("style");
  document.body.appendChild(style);
  style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        font-family: roboto, sans-serif;
        font-size: 15px;
        outline: 0;
         outline-offset: 0;
    }
    .wrap {
        display: flex;
        justify-content:center;
        align-items: center;
        width: 100%;
        height:100vh;
    }
    .toDoList {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #18a7c5;
        width: max-content;
        height: max-content;
        padding: 0 10px;
    }
    .title {
        width: 100%;
        color: white;
        background-color:#18a7c5;
        text-align: center;
        padding:10px 10px;
    }
    .form{
        display:flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }
    .input{
        margin: 10px;
        padding:10px;
    }
    .delAll{
      color :white;
      background-color: red;
      width: 100%;
      height: 20px;
      text-align: center;
      padding:10px;
      cursor: pointer;
    }
    .task{
        display:flex;
        justify-content: space-between;
        margin: 5px 10px;
        padding: 10px 0;
        gap: 25px;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        width: 100%;
    }
    .done{
       color: grey;
       font-weight: bold;
       cursor: pointer;
    }
    .text{
      font-weight: bold;
      cursor: pointer;
    }
    .del{
      color: red;
      cursor: pointer;
    }
    .active{
      color: green;
      background-color: green;
    }
    .lineThrough{
      text-decoration: line-through;
      color: grey;
    }
  }`;
});
