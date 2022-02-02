// ЗАдание первое 

let summ = 0.1 + 0.2;
console.log(+summ.toFixed(2));

// //Задание второе

let str = "1";
let num = 2;

console.log(parseInt(str) + num);

//Задание третье

let memoryCardCapacity = prompt("Сколько Гб на вашей флешке?");
let memoryOneGigabyte = 1024;
let memoryOnMegabyte = memoryCardCapacity * memoryOneGigabyte;
let oneFile = 820;

alert(Math.floor(memoryOnMegabyte / oneFile) + " файла обьемом 820 Мб поместиться на вашу флешку.");




















