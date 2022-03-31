var taskList = document.getElementsByClassName("task");

function toggleMenu() {
  var menu = document.getElementById("drop-menu");

  if (menu.classList.contains("block")) {
    menu.classList.remove("block");
    menu.classList.add("hidden");
  } else {
    menu.classList.remove("hidden");
    menu.classList.add("block");
  }
}

//to check/uncheck tasks
function toggle(checkbox) {
  var fullId = checkbox.id;
  var id = fullId.charAt(fullId.length - 1);
  var labelElement = document.getElementById(`label-${id}`);
  if (checkbox.checked) {
    labelElement.style.textDecoration = "line-through";
  } else labelElement.style.textDecoration = "none";
}

//searches through tasks
function search(searchBar) {
  if (searchBar.value === "") {
    for (var i = 0; i < taskList.length; i++) {
      taskList[i].classList.remove("hidden");
    }
  } else {
    for (var j = 0; j < taskList.length; j++) {
      if (!taskList[j].children[1].innerText.includes(searchBar.value))
        taskList[j].classList.add("hidden");
    }
  }
}
