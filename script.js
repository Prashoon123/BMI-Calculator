document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
});

function BMI() {
  var h = document.getElementById("h").value;
  var w = document.getElementById("w").value;
  var bmi = w / (((h / 100) * h) / 100);
  var bmio = bmi.toFixed(0);
  if (bmio === "NaN") {
    alert("Please enter a valid height and weight.");
  }
  if (bmio <= 18.5) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
    document.getElementById("resultStatus").innerHTML =
      "Sorry you are underweight ❌";
  } else if (bmio >= 18.6 && bmio <= 24.9) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
    document.getElementById("resultStatus").innerHTML =
      "Congrats your weight is perfect ✅";
  } else if (bmio >= 25 && bmio <= 29.9) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
    document.getElementById("resultStatus").innerHTML =
      "Sorry you are overweight ❌";
  } else if (bmio >= 30 && bmio <= 39.9) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
    document.getElementById("resultStatus").innerHTML =
      "Sorry you are obese ❌";
  } else if (bmio >= 40 && bmio >= 39.9) {
    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
    document.getElementById("resultStatus").innerHTML =
      "Sorry you are extremely obese ❌";
  }
}
