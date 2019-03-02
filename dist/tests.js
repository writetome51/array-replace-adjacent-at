"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
_1.replaceAdjacentAt(1, [10], arr);
console.log(arr);
_1.replaceAdjacentAt(-1, [20], arr);
console.log(arr);
_1.replaceAdjacentAt(0, [20, 21, 22, 23], arr);
console.log(arr);
_1.replaceAdjacentAt(6, ['a', 'b', 'c'], arr);
console.log(arr);
_1.replaceAdjacentAt(6, ['z', { prop: 1 }, 'c'], arr);
console.log(arr);
// should trigger error:
//  replaceAdjacentAt('', [1], arr);
// should trigger error:
//  replaceAdjacentAt(Infinity, [1], arr);
// should trigger error:
//  replaceAdjacentAt(13, [1], arr); // invalid index
// should trigger error:
//  replaceAdjacentAt(1, [], arr); // if newValues empty, func doesn't know how many items to replace
// should trigger error:
//  replaceAdjacentAt(1, {}, arr);
// should trigger error:
//  replaceAdjacentAt(1, [1], {});
