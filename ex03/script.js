let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "#2e7d32";
    } else if (count < 0) {
        countDisplay.style.color = "#c62828";
    } else {
        countDisplay.style.color = "#1e293b";
    }
}

function handleIncrement() {
    count += 1;
    updateDisplay();
}

function handleDecrement() {
    count -= 1;
    updateDisplay();
}

function handleReset() {
    count = 0;
    updateDisplay();
}

incrementBtn.addEventListener("click", handleIncrement);
decrementBtn.addEventListener("click", handleDecrement);
resetBtn.addEventListener("click", handleReset);
