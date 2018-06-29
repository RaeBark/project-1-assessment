//constants

// state varibles
var sum;

//cached elements
var inputEl = document.querySelector('input');
var displayEl = document.querySelector('h1');


// event listeners
document.getElementById('add').addEventListener('click', function() {
    sum += parseFloat(inputEl.value);
    render();
})

document.getElementById('subtract').addEventListener('click', function() {
    sum -= parseFloat(inputEl.value);
    render();
})

// functions
function init() {
    sum = 0;
    inputEl.value = 1;
    render();
}

function render() {
    displayEl.textContent = sum;
    displayEl.style.color = sum < 0 ? 'red' : '';
}

init ();
// console.log('hey there hot stuff');
