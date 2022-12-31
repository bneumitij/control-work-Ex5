const SIZES = {
    BIG: { price: 25, cal: 100, time: 15},
    SMALL : { price : 15, cal: 50, time: 7 },
    MEDIUM: { price : 15, cal: 50, time: 7 }
    }
const STUFFING = {
    CHEESE: { price : 6.5, cal: 45, time: 2 },
    BEACON : { price : 10, cal: 70, time: 6 },
    TOMATO : { price : 12.1, cal: 4, time: 5 },
    CHICKEN : { price : 9.3, cal: 30, time: 5.1 }
    }
const SAUCES = {
    MUSTARD: { price : 3, cal: 5, time: 1 },
    KETCHUP: { price : 4.2, cal: 20, time: 1.5 },
    BOLOGNESE: { price : 7.5, cal: 50, time: 3 }
    }

const bigs = Object.entries(SIZES.BIG);
const BIG = []

for (const big of bigs) {
    const key = big[0];
    const value = big[1];
        BIG.push(value)
}

// // console.log(BIG);

const smalls = Object.entries(SIZES.SMALL);
const SMALL = []

for (const small of smalls) {
    const key = small[0];
    const value = small[1];
        SMALL.push(value)
}

// // console.log(SMALL);

const mediums = Object.entries(SIZES.MEDIUM);
const MEDIUM = []

for (const medium of mediums) {
    const key = medium[0];
    const value = medium[1];
        MEDIUM.push(value)
}

// // console.log(MEDIUM);


const cheeses = Object.entries(STUFFING.CHEESE);
const CHEESE = []

for (const cheese of cheeses) {
    const key = cheese[0];
    const value = cheese[1];
      CHEESE.push(value)
}

const beacons = Object.entries(STUFFING.BEACON);
const BEACON = []

for (const beacon of beacons) {
    const key = beacon[0];
    const value = beacon[1];
      BEACON.push(value)
}

const tomatos = Object.entries(STUFFING.TOMATO);
const TOMATO = []

for (const tomato of tomatos) {
    const key = tomato[0];
    const value = tomato[1];
      TOMATO.push(value)
}

const chickens = Object.entries(STUFFING.CHICKEN);
const CHICKEN = []

for (const chicken of chickens) {
    const key = chicken[0];
    const value = chicken[1];
      CHICKEN.push(value)
}


const mustards = Object.entries(SAUCES.MUSTARD);
const MUSTARD = []

for (const mustard of mustards) {
    const key = mustard[0];
    const value = mustard[1];
      MUSTARD.push(value)
}

// console.log(MUSTARD);

const ketchups = Object.entries(SAUCES.KETCHUP);
const KETCHUP = []

for (const ketchup of ketchups) {
    const key = ketchup[0];
    const value = ketchup[1];
      KETCHUP.push(value)
}

// console.log(KETCHUP);

const bologneses = Object.entries(SAUCES.BOLOGNESE);
const BOLOGNESE = []

for (const bolognese of bologneses) {
    const key = bolognese[0];
    const value = bolognese[1];
      BOLOGNESE.push(value)
}

// console.log(BOLOGNESE);


let SIZE

const singleBtn = document.querySelector('#ВибратиBIG');

const handleClick = () => {
        SIZE = ['ПІЦА', ...BIG]; 
        console.log(SIZE);
}

singleBtn.addEventListener('click', handleClick);


const SingleBtn = document.querySelector('#ВидалитиBIG');

const HandleClick = () => {
    SIZE.pop()
    SIZE.pop()
    SIZE.pop()
    SIZE.pop()
    console.log(SIZE);
}

SingleBtn.addEventListener('click', HandleClick);


const singleBtn1 = document.querySelector('#ДодатиSMALL');

const handleClick1 = () => {
    SIZE = ['ПІЦА', ...SMALL]; 
    console.log(SIZE);
}

singleBtn1.addEventListener('click', handleClick1);


const SingleBtn1 = document.querySelector('#ВидалитиSMALL');

const HandleClick1 = () => {
    SIZE.pop()
    SIZE.pop()
    SIZE.pop()
    SIZE.pop()
    console.log(SIZE);
}

SingleBtn1.addEventListener('click', HandleClick1);


const singleBtn2 = document.querySelector('#ДодатиMEDIUM');

const handleClick2 = () => {
    SIZE = ['ПІЦА', ...MEDIUM]; 
    console.log(SIZE);
}

singleBtn2.addEventListener('click', handleClick2);


const SingleBtn2 = document.querySelector('#ВидалитиMEDIUM');

const HandleClick2 = () => {
    SIZE.pop()
    SIZE.pop()
    SIZE.pop()
    SIZE.pop()
    console.log(SIZE);
}

SingleBtn2.addEventListener('click', HandleClick2);




let STUFF

const singleBtn3 = document.querySelector('#ДодатиCHEESE');

const handleClick3 = () => {
        STUFF = ['CHEESE', ...CHEESE]; 
        console.log(STUFF);
}

singleBtn3.addEventListener('click', handleClick3);


const SingleBtn3 = document.querySelector('#ВидалитиCHEESE');

const HandleClick3 = () => {
    STUFF.pop()
    STUFF.pop()
    STUFF.pop()
    STUFF.pop()
    console.log(STUFF);
}


const singleBtn8 = document.querySelector('#ДодатиBEACON');

const handleClick8 = () => {
        STUFF = ['BEACON', ...BEACON]; 
        console.log(STUFF);
}

singleBtn8.addEventListener('click', handleClick8);


const SingleBtn8 = document.querySelector('#ВидалитиBEACON');

const HandleClick8 = () => {
    STUFF.pop()
    STUFF.pop()
    STUFF.pop()
    STUFF.pop()
    console.log(STUFF);
}

SingleBtn8.addEventListener('click', HandleClick8);


const singleBtn9 = document.querySelector('#ДодатиTOMATO');

const handleClick9 = () => {
        STUFF = ['TOMATO', ...TOMATO]; 
        console.log(STUFF);
}

singleBtn9.addEventListener('click', handleClick9);


const SingleBtn9 = document.querySelector('#ВидалитиTOMATO');

const HandleClick9 = () => {
    STUFF.pop()
    STUFF.pop()
    STUFF.pop()
    STUFF.pop()
    console.log(STUFF);
}

SingleBtn9.addEventListener('click', HandleClick9);


let SAUCE

const singleBtn11 = document.querySelector('#ДодатиMUSTARD');

const handleClick11 = () => {
        SAUCE = ['MUSTARD', ...MUSTARD]; 
        console.log(SAUCE);
}

singleBtn11.addEventListener('click', handleClick11);


const SingleBtn12 = document.querySelector('#ВидалитиMUSTARD');

const HandleClick12 = () => {
    SAUCE.pop()
    SAUCE.pop()
    SAUCE.pop()
    SAUCE.pop()
    console.log(SAUCE);
}

SingleBtn12.addEventListener('click', HandleClick12);


const singleBtn13 = document.querySelector('#ДодатиKETCHUP');

const handleClick13 = () => {
        SAUCE = ['KETCHUP', ...KETCHUP]; 
        console.log(SAUCE);
}

singleBtn13.addEventListener('click', handleClick13);


const SingleBtn14 = document.querySelector('#ВидалитиKETCHUP');

const HandleClick14 = () => {
    SAUCE.pop()
    SAUCE.pop()
    SAUCE.pop()
    SAUCE.pop()
    console.log(SAUCE);
}

SingleBtn14.addEventListener('click', HandleClick14);


const singleBtn15 = document.querySelector('#ДодатиBOLOGNESE');

const handleClick15 = () => {
        SAUCE = ['BOLOGNESE', ...BOLOGNESE]; 
        console.log(SAUCE);
}

singleBtn15.addEventListener('click', handleClick15);


const SingleBtn16 = document.querySelector('#ВидалитиBOLOGNESE');

const HandleClick16 = () => {
    SAUCE.pop()
    SAUCE.pop()
    SAUCE.pop()
    SAUCE.pop()
    console.log(SAUCE);
}

SingleBtn16.addEventListener('click', HandleClick16);


const singleBtn10 = document.querySelector('#ДодатиCHICKEN');

const handleClick10 = () => {
        STUFF = ['CHICKEN', ...KETCHUP]; 
        console.log(STUFF);
}

singleBtn10.addEventListener('click', handleClick10);


const SingleBtn10 = document.querySelector('#ВидалитиCHICKEN');

const HandleClick10 = () => {
    STUFF.pop()
    STUFF.pop()
    STUFF.pop()
    STUFF.pop()
    console.log(STUFF);
}

SingleBtn10.addEventListener('click', HandleClick10);


const singleBtn5 = document.querySelector('#Загальна-ціна');

const handleClick5 = () => {
    alert(Number(SIZE[1]) + Number(STUFF[1]) + Number(SAUCE[1]))
}

singleBtn5.addEventListener('click', handleClick5);


const singleBtn6 = document.querySelector('#Загальна-кількість-калорій');

const handleClick6 = () => {
    alert(Number(SIZE[2]) + Number(STUFF[2]) + Number(SAUCE[2]))
}

singleBtn6.addEventListener('click', handleClick6);


const singleBtn7 = document.querySelector('#Загальний-час-проготування');

const handleClick7 = () => {
    alert(Number(SIZE[3]) + Number(STUFF[3]) + Number(SAUCE[3]))
}

singleBtn7.addEventListener('click', handleClick7);



const singleBtn4 = document.querySelector('#Загальна-інформація');

const handleClick4 = () => {
    const PRICE = Number(SIZE[1]) + Number(STUFF[1] + Number(SAUCE[1]))
    const CAL = Number(SIZE[2]) + Number(STUFF[2] + Number(SAUCE[2]))
    const stuff = STUFF[0]
    const sauce = SAUCE[0]
    alert(`Ціна: ${PRICE}, Калорії: ${CAL}, Соуси: ${sauce}, Добавки: ${stuff}`)
}


singleBtn4.addEventListener('click', handleClick4);