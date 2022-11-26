const output = document.getElementById("screen");
const decimal = document.getElementById("decimal").value;

function display(num) {
  output.value += num;
  if (decimal === ".") {
    document.getElementById("decimal").disabled = false;
  } else {
    document.getElementById("decimal").disabled = true;
  }
}
function allClear() {
  output.value = "";
  output.value = "";
}
function deletespace() {
  output.value = output.value.slice(0, -1);
}
function calculate() {
  output.value = eval(output.value);
}

function clearspace() {
  document.getElementById("screen").value = "";
}
