const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

const charactersNames = []

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  charactersNames.push(starWarsCharacters[i].name)
}
console.log('Array CharactersNames', charactersNames)

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

const femaleCharacters = []

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === 'female') {
    femaleCharacters.push(starWarsCharacters[i])
  }
}
console.log('Array Females', femaleCharacters)

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blue_gray: [],
}

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/


for (let i = 0; i < starWarsCharacters.length; i++){
  let character = starWarsCharacters[i]

  switch (character.eye_color) {
    case 'blue':
      eyeColor.blue.push(character);
      break;
    case 'yellow':
      eyeColor.yellow.push(character);
      break;
    case 'brown':
      eyeColor.brown.push(character);
      break;
    case 'red':
      eyeColor.red.push(character);
      break;
    case 'blue_gray':
      eyeColor.blue_gray.push(character);
      break;
    default:
      console.log('Colore degli occhi non pervenuto')
}}

console.log('Oggetto eye color', eyeColor)

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let crewMass= 0
let i = 0


while (i < starWarsCharacters.length) {
  crewMass += starWarsCharacters[i].mass 
  // crewMass = crewMass + starWarsCharacters[i].mass funziona uguale
  i++;
}

console.log('Crewmass:', crewMass)


/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

if ( crewMass < 500) {
  console.log("Ship is under loaded")
} else if ( crewMass >= 500 && crewMass < 700) {
  console.log("Ship is half loaded")
} else if ( crewMass >= 700 && crewMass < 900) {
  console.log("Warning: Load is over 700")
} else if ( crewMass < 1000) {
  console.log("Critical Load: Over 900")
} else {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!")
}


/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === 'n/a') {
    starWarsCharacters[i].gender = 'robot'
  }
}

console.log(starWarsCharacters[1].gender)

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

// characterNames
// femaleCharacterNames

for (let i = 0; i < femaleCharacters.length; i++) {
  for (let j = 0; j < charactersNames.length; j++) {
    if (femaleCharacters[i].name === charactersNames[j]) {
      charactersNames.splice(j, 1)
    }
  }
}

console.log(charactersNames)


/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

let randomCharacter = starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)]

console.log(randomCharacter.name + ' is ' + randomCharacter.height + 'cm tall, weights ' + randomCharacter.mass + 'kg, has ' + randomCharacter.hair_color + ' hair, has ' + randomCharacter.eye_color + ' eyes, was born on ' + randomCharacter.birth_year + ' and is a ' + randomCharacter.gender)


// altri esempi di LOOP while

let coin = 'testa'
let numeroLanci = 0

while (coin === 'testa') {
  numeroLanci++
  let numeroCasuale = Math.random()

  if (numeroCasuale < 0.5) { 
    console.log('Testa!')
    coin = 'testa'
    
  } else {
    coin = 'croce'
    console.log('Croce!')
  }
}

console.log(' ci sono voluti ' + numeroLanci + ' lanci!')


// for loops

const numbers = [4, 78, 11, 46.5, 90, 100]

for (let i=0; i < numbers.length; i++) {
  console.log(i)
  console.log(numbers[i])
}

// another one!

let animalsArray = [
  {
    name: 'Fufy',
    species: dog,
    age: 2,
    furColor: brown,
    numberOfLegs: 4,
    skills: tail-wagging,
  },
  {
    name: 'Mimi',
    species: cat,
    age: 7,
    furColor: red,
    numberOfLegs: 4,
    skills: scratching,
  },
  {
    name: 'Fufy',
    species: parrot,
    age: 70,
    furColor: blue,
    numberOfLegs: 2,
    skills: singing,
  }
]


for (i = 0; i < animalsArray.length; i++) {
  console.log(animalsArray[i].species)
}


//

let str = ''

for (i=0; i < animalsArray.length; i++) {
  str = str + animalsArray[i].species + ' '
}

// str will be str = 'dog cat parrot '
