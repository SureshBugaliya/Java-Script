const marval_heros = ["dymonds", "monky", "spiderman"];
const dc_heros = ["superman", "sktiman", "balveer"];

// marval_heros.push(dc_heros);
// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros);
// console.log(allHeros);

// const allNewHeros = [...marval_heros, ...dc_heros];
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, 4, [5, 6, 7], 8, 9, 11 ,[12, 13, 24,[22, 26, 45]]];

const newAnotherArray = anotherArray.flat(Infinity);
console.log(newAnotherArray);

console.log(Array.isArray("suresh"));
console.log(Array.from("suresh"));
// console.log(Array.from({name: "suresh"})); // intresting

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));

