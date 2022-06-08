let data = [
  { name: "James", age: 9, country: "United States" },
  { name: "Rony", age: 31, country: "United Kingdom" },
  { name: "Peter", age: 58, country: "Canada" },
  { name: "Marks", age: 20, country: "Spain" },
];
let headerItems = ["Name", "Age", "Country"];

let table = document.createElement("table");
let headerRow = document.createElement("tr");
headerItems.forEach((item) => {
  let headerColumns = document.createElement("th");
  headerColumns.innerHTML = item;
  headerRow.appendChild(headerColumns);
});
table.appendChild(headerRow);

data.forEach((obj) => {
  let bodyRow = document.createElement("tr");
  Object.values(obj).forEach((item) => {
    let bodyColumns = document.createElement("td");
    bodyColumns.innerHTML = item;
    bodyRow.appendChild(bodyColumns);
  });
  table.appendChild(bodyRow);
});
document.body.appendChild(table);
table.border = "1";

//if age in a row is < 10 then row background color must be yellow.
// if if age in a row is 10 <= age < 40 then row background color must be green.
// if if age in a row is 40 <= age < 80 then row background color must be red.
// if if age in a row is >= 80 then row background color must be blue.

let ages = document.querySelectorAll("tr :nth-child(2)");
ages.forEach((age) => {
  if (age.innerHTML < 10) {
    age.parentNode.style.background = "yellow";
  } else if (age.innerHTML >= 10 && age.innerHTML < 40) {
    age.parentNode.style.background = "green";
  } else if (age.innerHTML >= 40 && age.innerHTML < 80) {
    age.parentNode.style.background = "red";
  } else if (age.innerHTML >= 80) {
    age.parentNode.style.background = "blue";
  }
});
