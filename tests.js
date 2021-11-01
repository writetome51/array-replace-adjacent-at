import {replaceAdjacentAt} from './index.js';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceAdjacentAt(1, [10], arr);
console.log(arr);

replaceAdjacentAt(-1, [20], arr);
console.log(arr);

replaceAdjacentAt(0, [20, 21, 22, 23], arr);
console.log(arr);

replaceAdjacentAt(6, ['a', 'b', 'c'], arr);
console.log(arr);

replaceAdjacentAt(6, ['z', {prop: 1}, 'c'], arr);
console.log(arr);
/*
replaceAdjacentAt(-10, [true, false, true], arr);
console.log(arr);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
replaceAdjacentAt(7, ['z', 'b', 'c'], arr);
console.log(arr);
*/
// This should error:
// replaceAdjacentAt(8, ['z', 'b', 'c'], arr);
