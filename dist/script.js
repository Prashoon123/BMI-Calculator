"use strict";
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const resultStatus = document.querySelector(".resultStatus");
const heightInput = document.querySelector(".h");
const weightInput = document.querySelector(".w");
button.addEventListener("click", function (event) {
    event.preventDefault();
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
    const bmi = weight / (((height / 100) * height) / 100);
    const bmio = Math.round(bmi);
    if (bmio <= 18.5) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Sorry you are underweight ❌";
    }
    else if (bmio >= 18.6 && bmio <= 24.9) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Congrats your weight is perfect ✅";
    }
    else if (bmio >= 25 && bmio <= 29.9) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Sorry you are overweight ❌";
    }
    else if (bmio >= 30 && bmio <= 39.9) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Sorry you are obese ❌";
    }
    else if (bmio >= 40 && bmio >= 39.9) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Sorry you are extremely obese ❌";
    }
});
