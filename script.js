// elud
let lives = 5;
document.querySelector(".js-lives").innerHTML = "Elud: " + lives;


// Sõnade ettevalmistus ja mänguväli
// loon sõnade massiivi
const words = ["aabits", "abiline", "amatöör", "finaal", "haigla", "sudoku"];

// valin mänguks suvalise sõna
let word = words[Math.floor(Math.random() * words.length)];

// lõikan sõna tähtedeks, tähed massiivi
let letters = word.split("");
console.log(letters);


// loon allkriipsude välja
let underscores = [];
for (let i = 0; i < letters.length; i++) {
    underscores[i] = "_";
}
document.querySelector(".js-playfield").innerHTML = underscores.join(" ");
// Sisestamise nupp
let insertBtn = document.querySelector(".js-insertBtn");
//valede tähtede massiiv
let wrongLetters = [];

insertBtn.addEventListener("click", () => {
    let input = document.querySelector(".js-input").value;

    for (let i = 0; i < letters.length; i++) {
        if (input == letters[i]) {
            underscores.splice(i, 1, letters[i]);
            document.querySelector(".js-playfield").innerHTML = underscores.join(" ");
        } else if (input !== letters[i]) {
            wrongLetters.push(input);
            lives = lives - 1;
            console.log(lives);
        }
    }
    document.querySelector(".js-wrongLetterField").innerHTML = wrongLetters;
});

//Puhastamisnupp
let clearBtn = document.querySelector(".js-clear");

clearBtn.addEventListener("click", () => {
    window.location.reload();
});


// 20-tahulise täringuveeretuse tulemuste genereerimine

let diceBtn20 = document.querySelector(".js-dice-btn20");

diceBtn20.addEventListener("click", () => {
    // genereerin antud vahemikus numbri
    let rolledAmount = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".js-d20-roll-result").innerHTML = "Veeretasid " + rolledAmount;
    // veeretad 1 = mäng läbi, veeretad 20 = saad ühe elu juurde
    if (rolledAmount == 1) {
        lives = 0;
        alert("Veeretasid 1, sõna vahetub!");
        window.location.reload();
    } else if (rolledAmount == 20) {
        lives = lives + 1;
        document.querySelector(".js-lives").innerHTML = "Elud: " + lives + "Said ühe elu juurde!";
    }
    diceBtn20.style.display = 'none';
});








// 10 - tahulise täringuveeretuste tulemuste genereerimine

let diceBtn10 = document.querySelector(".js-dice-btn10");
// täringu tahkude väärtuste massiiv
const d10Sides = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

diceBtn10.addEventListener("click", () => {
    let rolledD10Amount = d10Sides[Math.floor(Math.random() * d10Sides.length)];
    if (rolledD10Amount == 0) {
        rolledD10Amount = 100;
    }
    // jagamine ja näidatavate tähtede koguse leidmine
    let dividedByTwo = rolledD10Amount / 2;
    document.querySelector(".js-d10-roll-result").innerHTML = "Veeretasid: " + rolledD10Amount + ", ning näed " + dividedByTwo + "% sõnast.";
    const revealLettersNum = Math.floor((dividedByTwo / 100) * word.length);
    for (let i = 0; i < revealLettersNum; i++) {
        let randomInt = Math.round(Math.random() * letters.length);
        underscores.splice(randomInt, 1, letters[randomInt]);
        document.querySelector(".js-playfield").innerHTML = underscores.join(" ") + " " + "tähtede hulk:" + underscores.length;
    }
    diceBtn10.style.display = 'none';
});