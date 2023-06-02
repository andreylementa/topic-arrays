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

//const janArr = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
//const ulArr = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
//const janArr2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
//const ulArr2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

//const verifyCats = function (janArr, ulArr) {
//  const janArrCorrect = janArr.slice(1, -1);
//  console.log(janArr);
//  console.log(janArrCorrect);
//  const bothArr = [...janArrCorrect, ...ulArr];
//  bothArr.forEach(function (age, index) {
//    const ageCategory =
//      age >= 2 ? `Взрослая взрослая, ей ${age} лет` : `еще котенок`;
//    console.log(`Кошка №${index + 1} ${ageCategory}`);
//  });
//};

//verifyCats(janArr, ulArr);
//console.log('----------------------------------------------');
//verifyCats(janArr2, ulArr2);
//const catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
//const getAverageHumanAge = function (ages) {
//  const peopleAges = ages.map(function (age) {
//    if (age <= 2) {
//      return age * 10;
//    } else if (age >= 2) {
//      return age * 7;
//    }
//  });
//  console.log(peopleAges);
//  const peopleMore = peopleAges
//    .filter(age => age >= 18)
//    .reduce((acc, age, index, array1) => {
//      acc += age;

//      return acc / array1.length;
//    }, 0);
//  console.log(peopleMore);
//};

//getAverageHumanAge(catAges);

// Методы some() and every()____________________________________________________________

//const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

//// some

//const hasWithdrawals = transactions.some(trans => trans > 550);
//console.log(hasWithdrawals);

//// every

//console.log(transactions.every(trans => trans > 0));

////////////////////////////////////////////////
// Методы flat() и flatMap()

// const someArray = [[1, 3, 5], [2, 4, 6], 7, 8, 9];

// console.log(someArray.flat());

// const someDeeperArray = [[1, [3, 5]], [[2, 4], 6], 7, 8, 9];
// console.log(someDeeperArray.flat(2));

// const account1 = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
// };

// const account2 = {
//   userName: 'Amani Salt',
//   transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
//   interest: 1.3,
//   pin: 2222,
// };

// const account3 = {
//   userName: 'Corey Martinez',
//   transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
//   interest: 0.8,
//   pin: 3333,
// };

// const account4 = {
//   userName: 'Kamile Searle',
//   transactions: [530, 1300, 500, 40, 190],
//   interest: 1,
//   pin: 4444,
// };

// const account5 = {
//   userName: 'Oliver Avila',
//   transactions: [630, 800, 300, 50, 120],
//   interest: 1.1,
//   pin: 5555,
// };

// const accounts = [account1, account2, account3, account4, account5];

// const allTransactionArrays = accounts.map(account => account.transactions);
// console.log(allTransactionArrays);

// const allTransactions = allTransactionArrays.flat();
// console.log(allTransactions);

// const bankBalance = allTransactions.reduce((acc, trans) => acc + trans, 0);
// console.log(bankBalance);

// const bankBalance1 = accounts
//   .map(account => account.transactions)
//   .flat()
//   .reduce((acc, trans) => acc + trans, 0);
// console.log(bankBalance1);

// const bankBalance2 = accounts
//   .flatMap(account => account.transactions)
//   .reduce((acc, trans) => acc + trans, 0);
// console.log(bankBalance2);

////////////////////////////////////////////////
// Сортировка Массивов

// // Strings
// const names = ['John', 'Sara', 'Evan', 'Steve', 'Cecil'];
// console.log(names.sort());
// console.log(names);

// // Numbers
// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// // return < 0 -> x, y
// // return > 0 -> y, x

// // Ascending order

// // transactions.sort((x, y) => {
// //   if (x > y) {
// //     return 1;
// //   }
// //   if (x < y) {
// //     return -1;
// //   }
// // });

// transactions.sort((x, y) => x - y);

// console.log(transactions);

// // Descending order

// // transactions.sort((x, y) => {
// //   if (x > y) {
// //     return -1;
// //   }
// //   if (x < y) {
// //     return 1;
// //   }
// // });

// transactions.sort((x, y) => y - x);

// console.log(transactions);

////////////////////////////////////////////////
// Другие Способы Создания И Заполнения Массивов

// console.log([1, 2, 3]);
// console.log(new Array(1, 2, 3));

// // empty arrays
// const arr = new Array(3);
// console.log(arr);
// // console.log(arr.map(() => 7));

// // Method fill()
// // arr.fill(7);
// // arr.fill(7, 1);
// arr.fill(7, 1, 2);
// console.log(arr);

// const arr1 = [1, 1, 1, 1, 1];
// arr1.fill(3, 2, 4);
// console.log(arr1);

// Array.from() method
// const arr = Array.from({ length: 5 }, () => 1);
// console.log(arr);

// const arr1 = Array.from({ length: 5 }, (_, index) => index + 1);
// console.log(arr1);

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Ex. 1

const bankDepositTotal = accounts
  .flatMap(account => account.transactions)
  .filter(trans => trans > 0)
  .reduce((acc, trans) => (acc += trans), 0);
console.log(bankDepositTotal);

// Ex. 2

const withdrawl = accounts
  .flatMap(account => account.transactions)
  .filter(widh => widh <= -500).length;
console.log(withdrawl);

// Ex. 3

const depositsAndWithdrawals = accounts
  .flatMap(account => account.transactions)
  .reduce(
    (acc, trans) => {
      trans > 0 ? (acc.depositsTotal += trans) : (acc.withdrawlsTotal += trans);
      return acc;
    },
    { depositsTotal: 0, withdrawlsTotal: 0 }
  );
console.log(depositsAndWithdrawals);
