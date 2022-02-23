/* let name = prompt("What's your name?");
if (name === '') {
    alert("No problem, let's start");
} else if (name.length > 9) {
    alert("it's a very long name");
} else {
    alert(`Hello, ${name}`);
}  */


/*
let words = ['dog', 'cat', 'pig'];
let guess = prompt('guess an animal: dog, cat, pig', 'cat');


 if (guess.length > 3 || guess.length < 1) {
    alert('Three letters');
} else {
    let includesWord = false;

    for (let i = 0; i < 3; i++) {
        if (words[i] === guess) {
            includesWord = true;
            document.write('win');
        }
    }

    if (includesWord === false) {
        document.write('not win');
    }
} */
/* let includesWord = true;
document.write(words.includes(guess) ? 'win' : "not win"); */

let words = ['dog', 'cat', 'pig'];
let guess = prompt('guess an animal: dog, cat, pig', 'cat');
let word = words[Math.floor(Math.random() * words.length)];

if (guess.length > 3 || guess.length < 1) {
    alert('Three letters');
} else {
    let includesWord = false;

    for (let i = 0; i < 3; i++) {
        if (word === guess) {
            includesWord = true;
        }
    }

    document.write(includesWord ? 'win' : "not win");
}


// let word = words[Math.floor(Math.random() * words.length)];
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
// answerArray[i] = '_';
// }








