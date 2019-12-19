let input1 = prompt(`Please insert your weight in kilograms: `)
let weightInKilograms = parseInt(input1);
let chicken = 0.5;

function weightInChickens(weightInKilograms, chicken) {
    if (Number.isNaN(weightInKilograms)) {
        alert(`Please enter a Number.`);
    } else {
        let result = weightInKilograms * chicken;
        let textP = document.getElementById(`yourweight`);
        textP.innerText += ` ${result} 🐔🐓`;
    }
}
weightInChickens(weightInKilograms, chicken);