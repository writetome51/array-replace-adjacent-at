"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var _replaceAdjacentItems_1 = require("@writetome51/array-replace-adjacent-items/_replaceAdjacentItems");
// starting at index, replaces same number of items as the number of items in newValues.
// index can be negative or positive.
function replaceAt(index, newValues, array) {
    errorIfNotArray_1.errorIfNotArray(newValues);
    // The other parameters, index and array, are type-checked here:
    _replaceAdjacentItems_1._replaceAdjacentItems(index, newValues.length, newValues, array);
}
exports.replaceAt = replaceAt;
