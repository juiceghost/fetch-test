const pokemonList = document.querySelector('.pokemons')
const inputString = document.querySelector('.inputValue')
const addButton = document.querySelector('button')
addButton.addEventListener('click', addPokemon)


// f8384513fad5f91ea04d07a2cbf916ec

// expected output:
// "b: 2"
// "b: 5"
// "b: 8"

function addPokemon() {
    // läs inputfältet vilket är ett name

    //skapa ett nytt objekt
    const templateObject = {
        name: '',
        power: '',
        look: '',
        found: '',
        size: { height: 0.4, weight: 6.0 }
    }

    // sätt name = inputfältets värde
    templateObject.name = inputString.value;
    console.log(templateObject)

    // lägg till det nya objektet i arrayen pokemons
    pokemons.push(templateObject)
    updatePokemons()
}
/*
Skapa ett objekt
Pokemon
med egenskaper:
*/


const pikachu = {
    name: 'Pikachu',
    power: 'Electricity',
    look: 'Cute mouse',
    found: 'Houses, Forest, Mountains, Islands',
    size: { height: 0.4, weight: 6.0 }
};

//console.log("pikachu", pikachu)
const eevee = {
    name: "Eevee",
    power: "Unstable genetic codes",
    look: "Brown eyes, big ears, pink paw pads",
    found: "In the grass on Route 4",
    size: { height: 0.3, weight: 6.5 }
}
//console.log("eevee: ", eevee)

const pokemons = [{
    name: 'Furre',
    size: { height: 0.7, weight: 3.5 }
},
{ ...pikachu }, { ...eevee },
{
    name: "Krille",
    size:
    {
        height: 0.7,
        weight: 3.5
    }
}];

function updatePokemons() {
    console.log("pokemon loop")
    // pokemonList.innerHTML = "";
    for (let i = 0; i < pokemons.length; i++) {
        console.log(pokemons[i])
        // skapa ett nytt li-element
        const myLi = document.createElement('li');
        // Inuti varje li-element skriv ut pokemonens namn
        myLi.innerText = pokemons[i].name
        // Stopp in li-elementet som ett child till vår ul(pokemonList)
        pokemonList.appendChild(myLi)
    }
}
updatePokemons()
/* console.log("old loop")
let a = 'Krille';
//console.log("a.length: ", a.length)
for (let i = 0; i < a.length; i++) {
    if (a[i] === 'l') {
        continue;
    }
    // console.log('a: ', a);
    console.log('i: ', i);
    console.log('a[i]: ', a[i]);
    console.log("======")
}
 */
// TODO: Iterera (stega sig igenom) över arrayen pokemons

/*

Found:  In the grass on Route 4

Size: { height: 0.3, weight: 6.5}

Name: Pikachu

Power: Electricity

Look: Cute mouse

Found: Houses, Forest, Mountains, Islands

Size: { height: 0.4, weight: 6.0 }
*/


/* 
const exam = {
    class: "17TE",
    subject: "Wsp 1",
    grades: ["A", "A", "B", "A"]
};

const rectangle = {
    size: {
        h: 87,
        w: 90
    },
    background: "cyan"
};

console.log("rectangle.size.h: ", rectangle.size.h)
const grades = ["A", "A", "B", "A"];
console.log(exam.grades)

for (let i = 0; i < exam.grades.length; i++) {
    //console.log(i)
    // logga element med index i från arrayen
    // exam.grades.
    console.log(exam.grades[i])
}
 */