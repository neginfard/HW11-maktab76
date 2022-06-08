function getAdd() {
  const value1 = Number(document.getElementById("val1").value);
  const value2 = Number(document.getElementById("val2").value);
  const result = document.getElementById("result");
  const sum = value1 + value2;
  result.innerHTML = sum;
  if (sum % 2 === 0) {
    result.style.color = "blue";
  } else {
    result.style.color = "red";
  }
}
