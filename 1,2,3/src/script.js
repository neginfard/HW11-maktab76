const btnParent = document.getElementById("container");

//delete button
const deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "Delete";
deleteBtn.style.background = "red";
btnParent.prepend(deleteBtn);

//add button
const addBtn = document.createElement("button");
addBtn.innerHTML = "Add";
addBtn.style.background = "green";
btnParent.appendChild(addBtn);

//remove function
function removeRow() {
  let items = document.querySelectorAll("tr");
  for (let i = 1; i <= 5; i++) {
    items[i].parentElement.removeChild(items[i]);
  }
}
deleteBtn.addEventListener("click", () => {
  removeRow();
});

//create row
addBtn.addEventListener("click", () => {
  const tableBody = document.querySelector("tbody");
  for (let i = 0; i < 3; i++) {
    //insert Row
    tableBody.insertRow().innerHTML =
      "<tr class='border-b'>" +
      "<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>DEfault</td>" +
      "<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>" +
      "<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>Cell</td>" +
      "</tr>";
  }
});
