// console.log("for loop")
const inputString = document.querySelector('.inputValue')
const resultValue = document.querySelector('.resultValue')
const dangerLabel = document.querySelector('.danger')
const calculateButton = document.querySelector('button')

calculateButton.addEventListener('click', calculateSum)
inputString.addEventListener('input', clearAlert)




function checkValidity() {
    const inputNumber = Number(inputString.value)
    //console.log(inputNumber)
    if (isNaN(inputNumber)) {
        // användaren har angett ett felaktig inputvärde
        // visa varningen
        console.log("validity is false")
        return false
    }
    console.log("validity is true")
    return true

}
function clearAlert() {
    console.log("clearAlert ran")
    if (checkValidity()) {
        dangerLabel.classList.add('hideme')
        calculateSum()
    } else {
        dangerLabel.classList.remove('hideme')
        resultValue.value = ""
    }

}

function calculateSum() {
    //console.log("calculate sum function reached")
    // läs värdet i inputfältet
    //console.log(inputString.value)
    // konverta till number
    const inputNumber = Number(inputString.value)
    //console.log(inputNumber)
    if (isNaN(inputNumber)) {
        // användaren har angett ett felaktig inputvärde
        // visa varningen
        dangerLabel.classList.remove('hideme')
    }
    // Användare har angett ett tal
    // skriv en for loop som börjar på 1
    // loopar igenom alla heltal mellan 1 och inputNumber
    // loopa så länge i är ??
    // från och med 1 till och med inputNumber
    let sum = 0;
    for (let i = 1; i <= inputNumber; i++) {
        //console.log('i: ', i)
        // sum = sum + i;
        sum += i;
        //console.log('sum: ', sum)
    }
    // skriv ut summan i summa-fältet i DOMen
    resultValue.value = sum;
    // logga summan av alla tal som vi loopar igenom
}
// anv skickar in 2
// 1 + 2 = 3
// input: 4
// output 10

/* let a = 'Krille';
//console.log("a.length: ", a.length)
for (let i = 0; i < a.length; i++) {
    if (a[i] === 'l') {
        continue;
    }
    // console.log('a: ', a);
    console.log('i: ', i);
    console.log('a[i]: ', a[i]);
    console.log("======")
} */
// Kri

/* for (let a = 10; a >= 1; a--) {
    // Runs 5 times, with values of a 0 through 4.
    //console.log('Walking east one step');
    console.log(a)
}
 */
/*
const max = 10
for (let a = 1; a <= max; a++) {
    // Runs 5 times, with values of a 0 through 4.
    //console.log('Walking east one step');
    console.log(a)
}

 */
/* console.log("While-loop")
// skriv en while-loop som loggar 10..1
let x = 11;
while (x > 1) {
    x--;
    console.log(x)
}
/* let  x = 0;
while (x < 10) {
    x++;
    console.log(x)
}
*/
//console.log("loops done")


/* let x = 5, y = 3;
console.log(x + y); // Prints 8. Other operators are -, *, / och %

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
// console.log('x = x + 1', x = x + 1)
// x = x + 1
// x += 1
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5
 */
/* 
if (x == 1) {
    // Denna kod körs om x är lika med 1
    console.log("x is equal to 1")
}
else if (x > 1) {
    // Denna kod körs om x är större än 1
    console.log("x is greater than 1")
}
else {
    console.log("x is neither equal to 0 or greater than 1")
    // Denna kod körs om inget av ovan villkor är sanna
}
 */
