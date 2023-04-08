let todos = document.getElementById("todos");

let title = document.getElementById("title");
let description = document.getElementById("description");
let dueDate = document.getElementById("duedate");

let priority1 = document.getElementById("priority1");
let priority2 = document.getElementById("priority2");
let priority3 = document.getElementById("priority3");
let priority4 = document.getElementById("priority4");

let priorities = [priority1, priority2, priority3, priority4];

let submit = document.getElementById("submit");

let form = document.getElementById("todo-form");
form.style.display = "none";

submit.addEventListener("click", (e) => {
  if (validateForm() === true) {
    form.style.display = "none";
    todoButton.style.display = "block";
    todos.style.display = "block";

    let td = document.createElement("div");
    td.setAttribute("id", "td");
    let ttle = document.createElement("h3");
    ttle.setAttribute("id", "ttle");
    let showMoreButton = document.createElement("button");
    showMoreButton.setAttribute("id", "showmore");
    let editButton = document.createElement("button");
    editButton.setAttribute("id", "edit");
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete");

    let tdDetails = document.createElement("div");
    tdDetails.setAttribute("id", "td-details");
    let ddate = document.createElement("p");
    ddate.setAttribute("id", "due-date");
    let dscrpt = document.createElement("p");
    dscrpt.setAttribute("id", "description");
    let prts = document.createElement("ol");
    prts.setAttribute("id", "priorities");
    let prr1 = document.createElement("li");
    let prr2 = document.createElement("li");
    let prr3 = document.createElement("li");
    let prr4 = document.createElement("li");

    let prr1Div = document.createElement("div");
    let prr2Div = document.createElement("div");
    let prr3Div = document.createElement("div");
    let prr4Div = document.createElement("div");

    let prr1Text = document.createElement("p");
    let prr2Text = document.createElement("p");
    let prr3Text = document.createElement("p");
    let prr4Text = document.createElement("p");

    let checkbox1 = document.createElement("input");
    let checkbox2 = document.createElement("input");
    let checkbox3 = document.createElement("input");
    let checkbox4 = document.createElement("input");
    checkbox1.setAttribute("type", "checkbox");
    checkbox2.setAttribute("type", "checkbox");
    checkbox3.setAttribute("type", "checkbox");
    checkbox4.setAttribute("type", "checkbox");

    prr1Div.appendChild(prr1Text);
    prr1Div.appendChild(checkbox1);
    prr2Div.appendChild(prr2Text);
    prr2Div.appendChild(checkbox2);
    prr3Div.appendChild(prr3Text);
    prr3Div.appendChild(checkbox3);
    prr4Div.appendChild(prr4Text);
    prr4Div.appendChild(checkbox4);

    ttle.textContent = title.value;
    showMoreButton.textContent = "Show More";
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    td.appendChild(ttle);
    td.appendChild(showMoreButton);
    td.appendChild(editButton);
    td.appendChild(deleteButton);

    ddate.textContent = "Due Date:" + dueDate.value;
    dscrpt.textContent = "Description:" + description.value;
    let dd = ddate.textContent;
    dd = dueDate.value;
    let ds = dscrpt.textContent;
    ds = description.value;
    prts.appendChild(prr1);
    prts.appendChild(prr2);
    prts.appendChild(prr3);
    prts.appendChild(prr4);
    tdDetails.appendChild(ddate);
    tdDetails.appendChild(dscrpt);
    tdDetails.appendChild(prts);
    td.appendChild(tdDetails);

    todos.appendChild(td);
    prr1Text.textContent = priorities[0].value;
    prr2Text.textContent = priorities[1].value;
    prr3Text.textContent = priorities[2].value;
    prr4Text.textContent = priorities[3].value;

    prr1Div.setAttribute("class", "prdiv");
    prr2Div.setAttribute("class", "prdiv");
    prr3Div.setAttribute("class", "prdiv");
    prr4Div.setAttribute("class", "prdiv");
    prr1.appendChild(prr1Div);
    prr2.appendChild(prr2Div);
    prr3.appendChild(prr3Div);
    prr4.appendChild(prr4Div);

    tdDetails.style.display = "none";

    e.preventDefault();
    showMoreButton.addEventListener("click", () => {
      if (clicked === false) {
        tdDetails.style.display = "block";
        clicked = true;
        showMoreButton.textContent = "Show Less";
      } else {
        tdDetails.style.display = "none";
        clicked = false;
        showMoreButton.textContent = "Show More";
      }
    });
    resetForm();

    editButton.addEventListener("click", () => {
      td.style.display = "none";
      form.style.display = "block";

      title.value = ttle.textContent;
      description.value = ds;
      priority1.value = prr1Text.textContent;
      priority2.value = prr2Text.textContent;
      priority3.value = prr3Text.textContent;
      priority4.value = prr4Text.textContent;
      dueDate.value = dd;
    });
    deleteButton.addEventListener("click", () => {
      td.remove();
    });
  } else {
    alert("Fill all the fields");
  }
});

let todoButton = document.getElementById("newtodo");
todoButton.addEventListener("click", () => {
  form.style.display = "block";
  todoButton.style.display = "none";
  todos.style.display = "none";
});

function resetForm() {
  title.value = "";
  description.value = "";
  dueDate.value = "";
  for (let i = 0; i < priorities.length; i++) {
    priorities[i].value = "";
  }
}
function validateForm() {
  if (
    title.value === "" ||
    description.value === "" ||
    dueDate.value === "" ||
    priority1.value === "" ||
    priority2.value === "" ||
    priority3.value === "" ||
    priority4.value === ""
  )
    return false;
  return true;
}
