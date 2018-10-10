let factor: number = 28.34952;
let input: HTMLInputElement = <HTMLInputElement> document.getElementById("InputField");
let outputDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("ResultOutput");

let ButtonToGrams: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ButtonToGrams");
let ButtonToOunces: HTMLButtonElement = <HTMLButtonElement> document.getElementById("ButtonToOunces");

ButtonToGrams.addEventListener("click", toGrams)
ButtonToOunces.addEventListener("click",toOunces)

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





