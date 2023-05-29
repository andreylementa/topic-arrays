'use strict';

//const currencies = new Map([
//  ['USD', 'United States dollar'],
//  ['EUR', 'Euro'],
//  ['CNY', 'Chinese yuan'],
//]);

////const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

////////////////////////////////////////////////
//// Простые Методы Массивов

//// let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

//slice();

//console.log(letters.slice(1));
//console.log(letters.slice(1, 4));
//console.log(letters.slice(-1));
//console.log(letters.slice(-3));
//console.log(letters.slice(-3, -1));
//console.log(letters.slice(2, -1));
//console.log(letters.slice());
//console.log([...letters]);

//splice();

//console.log(letters.splice(1));
//letters.splice(-1);
//letters.splice(1, 3);

//let letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
//let letters2 = ['g', 'h', 'i'];

//reverse();

//console.log(letters.reverse());

//concat();

//const letters = letters1.concat(letters2);
//console.log(letters);
//console.log([...letters1, ...letters2]);

//join();

//console.log(letters.join(', '));

// ForEach() _________________________________________________________

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`);
//   }
// }

// for (const [i, transaction] of transactions.entries()) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//     console.log(i);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`);
//     console.log(i);
//   }
// }

// console.log('------------------------');

// transactions.forEach(function (transaction, index /*, array*/) {
//   if (transaction > 0) {
//     console.log(`Transaction № ${index + 1}: ${transaction} was deposited`);
//   } else {
//     console.log(
//       `Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`
//     );
//   }
// });

// forEach С Map И Set _____________________________________________________________________

// Map

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['CNY', 'Chinese yuan'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const uniqueCurrencies = new Set(['USD', 'EUR', 'USD', 'CNY', 'CNY']);
// console.log(uniqueCurrencies);
// uniqueCurrencies.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
//   console.log(set);
// });

// TASK 1 ____________________________________________________________________________________

//1.	Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
//Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
//2.	Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
//Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

const janArr = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const ulArr = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const janArr2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const ulArr2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

const verifyCats = function (janArr, ulArr) {
  const janArrCorrect = janArr.slice(1, -1);
  console.log(janArr);
  console.log(janArrCorrect);
  const bothArr = [...janArrCorrect, ...ulArr];
  bothArr.forEach(function (age, index) {
    const ageCategory =
      age >= 2 ? `Взрослая взрослая, ей ${age} лет` : `еще котенок`;
    console.log(`Кошка №${index + 1} ${ageCategory}`);
  });
};

verifyCats(janArr, ulArr);
console.log('----------------------------------------------');
verifyCats(janArr2, ulArr2);
