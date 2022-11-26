const output = document.getElementById("screen");
const calDisplay = document.getElementById("Display");
function display(num){
    output.value += num;
}
function allClear(){
    output.value = '';
    output.value = '';
}
function deletespace(){
    output.value = output.value.slice(0,-1);
}
function calculate(){
    output.value = eval(output.value);
}

function clearspace() {
    document.getElementById("screen").value = "";
}






