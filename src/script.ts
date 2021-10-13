const button = document.querySelector(".btn") as HTMLButtonElement;
const result = document.querySelector(".result") as HTMLParagraphElement;
const resultStatus = document.querySelector(
  ".resultStatus"
) as HTMLParagraphElement;
const heightInput = document.querySelector(".h") as HTMLInputElement;
const weightInput = document.querySelector(".w") as HTMLInputElement;

button.addEventListener("click", function (event: Event): void {
  event.preventDefault();

  const height: number = Number(heightInput.value);
  const weight: number = Number(weightInput.value);

  const bmi: number = weight / (((height / 100) * height) / 100);
  const bmio: number = Math.round(bmi);

  if (bmio <= 18.5) {
    result.innerHTML = "Your BMI is " + bmio;
    resultStatus.innerHTML = "Sorry you are underweight ❌";
  } else if (bmio >= 18.6 && bmio <= 24.9) {
    result.innerHTML = "Your BMI is " + bmio;
    resultStatus.innerHTML = "Congrats your weight is perfect ✅";
  } else if (bmio >= 25 && bmio <= 29.9) {
    result.innerHTML = "Your BMI is " + bmio;
    resultStatus.innerHTML = "Sorry you are overweight ❌";
  } else if (bmio >= 30 && bmio <= 39.9) {
    result.innerHTML = "Your BMI is " + bmio;
    resultStatus.innerHTML = "Sorry you are obese ❌";
  } else if (bmio >= 40 && bmio >= 39.9) {
    result.innerHTML = "Your BMI is " + bmio;
    resultStatus.innerHTML = "Sorry you are extremely obese ❌";
  }
});
