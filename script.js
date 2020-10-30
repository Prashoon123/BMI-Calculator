function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(0));
    if(bmio === "NaN") {
        alert("Please enter a valid height and weight.")
    }
    document.getElementById("result").innerHTML="Your BMI is " + bmio;
}