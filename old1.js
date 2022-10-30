
function logMe(string) {
    console.log(string);

}
let b = ['K', 'r', 'i', 'l', 'l', 'e'];
for (let i = 0; i < b.length; i++) {
    logMe(b[i], i, b)
}
console.log("=====")

for (const letter of b) {
    logMe(letter)
}

console.log("=====")

b.forEach(logMe)
/* 
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
} // abc

 */
/* const foo = 1;

switch (foo) {
    case 0: // Value of foo matches this criteria; execution starts from here
        console.log(0);
        break;
    // Forgotten break! Execution falls through
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // Break encountered; will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');

}
console.log("After switch")
 */

/* 
let a = "Krille"
let result = ""
console.log("a.length: ", a.length)
for (let i = 0; i < a.length; i++) {

    if (a[i] === 'l') {
        continue;
    }
    if (a[i] === 'e') {
        break;
    }
    result = result + a[i];
    console.log("i: ", i)
    console.log(a[i]);
}
console.log("Outside for loop. result: ", result) 
//console.log(text); // Kri

/* let text = "";
let i = 0;
do {
    //console.log("==========")
    //console.log("i before: ", i)
    //console.log("text: ", text)
    // text += i + "<br>";
    text = text + i + "<br>"

    i++;
    // i--;
    // i = i - 1;
    // i -= 1;
}
while (i < 7);
 */
/*
let x = 0;
while (x < 10) {
    x++;
    //console.log(x)
} */
//console.log("x after: ", x)
/* 
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
    // return '$2.00'
}
console.log(getFee(true)); // "$2.00"
console.log(getFee(false)); // "$10.00"
console.log(getFee(null)); // "$10.00"
//console.log(text); // 0<br>1<br>2<br>3<br>4<br>
 */
/* function getFee(isMember) {
    if (isMember) {
        console.log("isMember is TRUE")
        return '$2.00'; // Funktionen slutar köras och '2.00$' returneras.
    }
    console.log("isMember is FALSE")
    return '$10.00'; // Funktionen slutar köras och '10.00$' returneras.
}
console.log(getFee(true)); // "$2.00"
console.log(getFee(false)); // "$10.00"
console.log(getFee(null)); // "$10.00"
 */

function buildString() {
    let text = "";
    for (let index = 0; index < 7; index++) {
        text += index + "<br>";
        console.log("index: ", index)
    } // 0..9
    return text;
}