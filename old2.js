let calculateButton = document.querySelector('button');
let inputValue = document.querySelector('.inputValue');
let outputValue = document.querySelector('.resultValue');
let factorialValue = document.querySelector('.factorialValue');

// Generate a number between 1 and max, including max
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

// TODO: Loopa igenom 10000 förekomster av ovanstående med max = 3
// jämför disytributionen ( hur ofta förekommar varje slumpmässigt värde)
// mellan floor och trunc

//inputValue.value = generateRandomInteger(200);


function calculateSum() {
    //console.log("Button Listener ran!");
    let inputString = inputValue.value;
    //console.log("input value: ", inputString);
    //console.log(typeof inputString)
    const inputNumber = Number(inputString)
    //console.log(inputNumber.length)
    if (isNaN(inputNumber)) {
        console.log("NaN detected!")
        return
    }
    // console.log("all is well, user inputted a number")

    // om vi säger anv angav 10.
    // vad är summan av 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

    // för en for loop krävs tre saker: initiala värdet
    // villkoret så länge vi ska loopa
    // förändringen efter varje loop
    let sum = 0;
    for (let i = 1; i <= inputNumber; i++) {
        sum = sum + i;
    }
    outputValue.value = sum;
}

function calculateFactorial() {
    // Factorial of 3 is
    // 1 * 2 * 3 = 6
    let inputString = inputValue.value;
    //console.log("input value: ", inputString);
    //console.log(typeof inputString)
    const inputNumber = Number(inputString)
    //console.log(inputNumber.length)
    if (isNaN(inputNumber)) {
        console.log("NaN detected!")
        return
    }

    let product = 1;
    for (let i = 1; i <= inputNumber; i++) {
        product = product * i;
        //console.log("i:", i, " product: ", product)
    }
    factorialValue.value = product;

}
// TODO: Auto-calculate sum when user presses a key
calculateButton.addEventListener('click', calculateSum)
inputValue.addEventListener('keyup', calculateSum)
inputValue.addEventListener('keyup', calculateFactorial)
function clearOutput() {
    outputValue.value = "";
}