let factor: number = 28.34952;
let input: HTMLInputElement = <HTMLInputElement> document.getElementById("InputField");
let outputDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("ResultOutput");

// let ButtonToGrams: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ButtonToGrams");
// let ButtonToOunces: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ButtonToOunces");

let RadioButtonToGrams: HTMLInputElement = <HTMLInputElement> document.getElementById("RadioToGram");
let RadioButtonToOunces: HTMLInputElement = <HTMLInputElement> document.getElementById("RadioToOunce");

// ButtonToGrams.addEventListener("click", toGrams)
// ButtonToOunces.addEventListener("click",toOunces)

RadioButtonToGrams.addEventListener("checked", toGrams)
RadioButtonToOunces.addEventListener("checked", toOunces)


// input.addEventListener("change", methodSelected);
input.addEventListener("input", methodSelected);

function toGrams () 
{ 
    outputDiv.innerHTML = (Number(input.value) * factor).toString() + " g.";
    // console.log (outputDiv);
    // console.log ((Number(input.value) * factor).toString());

}

function toOunces () 
{ 
    outputDiv.innerHTML = (Number(input.value) / factor).toString() + " oz.";
    // console.log (outputDiv);
    // console.log ((Number(input.value) * factor).toString());
}

// determins whitch funktion to run based on radio button selected
function methodSelected()
{
    console.log(input.value)

    if(RadioButtonToGrams.checked == true)
    {
        toGrams()
    }

    else if(RadioButtonToOunces.checked == true)
    {
        toOunces()
    }

    else
    {
        outputDiv.innerHTML = "selected a conversion radio button first"
    }
}





