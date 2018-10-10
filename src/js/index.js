var factor = 28.34952;
var Input = document.getElementById("InputField");
var Output = document.getElementById("ResultOutput");
var ButtonToGrams = document.getElementById("ButtonToGrams");
var ButtonToOunces = document.getElementById("ButtonToOunces");
ButtonToGrams.addEventListener("click", ToGrams);
ButtonToOunces.addEventListener("click", ToOunces);
function ToGrams() {
    Output.innerHTML = (Number(Input.value) * factor).toString();
    console.log((Number(Input.value) * factor).toString());
}
function ToOunces() {
    Output.innerHTML = (Number(Input.value) / factor).toString();
}
