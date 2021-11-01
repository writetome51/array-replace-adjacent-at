import {replaceAdjacentAt} from './index.js';
import {isMatch} from '@writetome51/is-match';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceAdjacentAt(0, [10], arr);
if (isMatch(arr, [10, 2, 3, 4, 5, 6, 7, 8, 9, 10])) console.log('test 1 passed');
else console.log('test 1 FAILED');


replaceAdjacentAt(-1, [20], arr);
if (isMatch(arr, [10, 2, 3, 4, 5, 6, 7, 8, 9, 20])) console.log('test 2 passed');
else console.log('test 2 FAILED');


replaceAdjacentAt(0, [20, 21, 22, 23], arr);
if (isMatch(arr, [20, 21, 22, 23, 5, 6, 7, 8, 9, 20])) console.log('test 3 passed');
else console.log('test 3 FAILED');


replaceAdjacentAt(6, ['a', 'b', 'c'], arr);
if (isMatch(arr, [20, 21, 22, 23, 5, 6, 'a', 'b', 'c', 20])) console.log('test 4 passed');
else console.log('test 4 FAILED');


const obj = {prop: 1};
replaceAdjacentAt(6, ['z', obj], arr);
if (isMatch(arr, [20, 21, 22, 23, 5, 6, 'z', obj, 'c', 20])) console.log('test 5 passed');
else console.log('test 5 FAILED');


replaceAdjacentAt(-10, [true, false, true], arr);
if (isMatch(arr, [true, false, true, 23, 5, 6, 'z', obj, 'c', 20])) console.log('test 6 passed');
else console.log('test 6 FAILED');


replaceAdjacentAt(0, 'aaa', arr);
if (isMatch(arr, ['a','a','a', 23, 5, 6, 'z', obj, 'c', 20])) console.log('test 6A passed');
else console.log('test 6A FAILED');


// This should error because arr only has 2 items left at index 8:
let errorTriggered=false;
try {
	replaceAdjacentAt(8, ['a', 'b', 'c'], arr);
}
catch {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


errorTriggered=false;
try {
	replaceAdjacentAt(-1, ['a', 'b'], arr);
}
catch {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


errorTriggered=false;
try {
	replaceAdjacentAt(10, ['a', 'b'], arr);
}
catch {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 8A passed');
else console.log('test 8A FAILED');


errorTriggered=false;
try {
	replaceAdjacentAt('1', ['a', 'b'], arr);
}
catch {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');


errorTriggered=false;
try {
	replaceAdjacentAt('', ['a', 'b'], arr);
}
catch {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 10 passed');
else console.log('test 10 FAILED');


errorTriggered=false;
try {
	replaceAdjacentAt(false, ['a', 'b'], arr);
}
catch (err) {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 11 passed');
else console.log('test 11 FAILED');


errorTriggered=false;
try {
	replaceAdjacentAt(0, [], arr);
}
catch (err) {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 12 passed');
else console.log('test 12 FAILED');


errorTriggered=false;
try {
	replaceAdjacentAt(0, '', arr);
}
catch (err) {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 13 passed');
else console.log('test 13 FAILED');


errorTriggered=false;
try {
	replaceAdjacentAt(3, ['c'], 'bbbb');
}
catch (err) {
	errorTriggered=true;
}
if (errorTriggered) console.log('test 14 passed');
else console.log('test 14 FAILED');

