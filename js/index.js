// const firstName = "Illya";
// const lastName = "Bezpaliy";
// console.log(firstName + " " + lastName);
// const full = firstName + " " + lastName;
// console.log(full);


// const room = "102";
// const type = "VIP"
// const welcomeMassage = "Гість" + " " + firstName + " " + lastName "поселяється в номер 2 типу";
// console.log(welcomeMassage);


// const massege = `гість ${firstName} х у посиляється в номері z типу 2`;
// console.log(massege);



// нормалізація з методом toUpperCase()

let brand = "ApPlE";
let baseBrand = "apple";
brand = brand.toLowerCase();
baseBrand = baseBrand.toLowerCase();
const isTheSameBrand = baseBrand !== brand;
console.log(isTheSameBrand);
baseBrand = baseBrand.toUpperCase();
console.log(baseBrand);

const letter = baseBrand[0];
console.log(letter);

brand = brand[0] + brand.slice(2, 5);
console.log(brand);


// пошук в рядку за методом includes()

const world1 = "спам";
const world2 = "розпродаж";
const string1 = "Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const string3 = "Рекламна компанія у цьому місяці....";
console.log(string1.includes(world1));
console.log(string2.includes(world2));
console.log(string2.toLowerCase().includes(world1.toLowerCase()));
const normalize = string2.toLowerCase();
console.log(normalize.toLowerCase().includes(world1));
