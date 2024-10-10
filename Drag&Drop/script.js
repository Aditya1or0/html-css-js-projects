let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let list of lists) {
  list.addEventListener("dragstart", function (event) {
    let selected = event.target;
    rightBox.addEventListener("dragover", function (event) {
      event.preventDefault();
    });
    rightBox.addEventListener("drop", function (event) {
      rightBox.appendChild(selected);
      selected = null;
    });
    leftBox.addEventListener("dragover", function (event) {
      event.preventDefault();
    });
    leftBox.addEventListener("drop", function (event) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
