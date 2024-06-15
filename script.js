let countDisplay = document.getElementById("counter");
let errorMessage = document.getElementById("error");

let incrementButton = document.getElementById("btninc");
let decrementButton = document.getElementById("btndec");
let clearButton = document.getElementById("btnclear");

let count = 0;

incrementButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
    updateDisplay();
});

clearButton.addEventListener("click", () => {
    count = 0;
    errorMessage.style.display = 'none';
    updateDisplay();
});

function updateDisplay() {
    countDisplay.textContent = count;
}