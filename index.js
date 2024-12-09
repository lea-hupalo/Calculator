const buttons = document.querySelectorAll(".button");
let currentOperation = [];


for (let button of buttons) {
    button.addEventListener("click", (event) => {
        const value = event.target.id;
        submitKey(value);
    });
}

function submitKey(value) {
    const display = document.querySelector(".display");

    if (value === "AC") {

        currentOperation = [];
        display.innerHTML = "";
    } else if (value === "=") {
        try {
            const expression = currentOperation.join("").replace(",", ".");
            const result = eval(expression);
            display.innerHTML = result.toFixed(2);
            currentOperation = [result.toString()];
        } catch (error) {
            display.innerHTML = "Erro";
            currentOperation = [];
        }
    } else {
        const lastValue = currentOperation[currentOperation.length - 1];

        if (
            ["-", "+", "*", "/", ","].includes(value) &&
            ["-", "+", "*", "/", ","].includes(lastValue)
        ) {
            return; 
        }

        currentOperation.push(value);
        renderDisplay();
    }
}

function renderDisplay() {
    const display = document.querySelector(".display");
    display.innerHTML = currentOperation.join("");
}
