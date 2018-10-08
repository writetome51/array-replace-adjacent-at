import { replaceAt } from './replaceAt';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceAt(1, [], arr);
console.log(arr);

replaceAt(1, [20], arr);
console.log(arr);

replaceAt(-1, [20], arr);
console.log(arr);

replaceAt(0, [20, 21, 22, 23], arr);
console.log(arr);

replaceAt(-1, [21, 22, 23, 24], arr);
console.log(arr);

replaceAt(6, ['a','b','c'], arr);
console.log(arr);