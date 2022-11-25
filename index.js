// const numberButtons = document.querySelectorAll('[data-number]') //querySelectorAll selects all data attributes with data-number attached to it!
// const operationButtons = document.querySelectorAll('[data-operation]') //selecting all operation data attributes!
// const equalButton = document.querySelector('data-equal') // selecting equal button
// const deleteButton = document.querySelector('data-delete')
// const allClearButton = document.querySelector('data-all-clear')
// const previousTextElement = document.querySelector('data-previous')
// const xcurrentTextElement = document.querySelector('data-current')

const scrDisplay = document.getElementById("scrDisplay");
const calDisplay = document.getElementById("calDisplay");
function display(num){
    scrDisplay.innerHTML += num;
}
function allClear(){
    scrDisplay.innerHTML = '';
    calDisplay.innerHTML = '';
}
function del(){
    scrDisplay.innerText = scrDisplay.innerText.slice(0,-1);
}
function calculate(){
    calDisplay.innerHTML = eval(scrDisplay.innerText);
}









