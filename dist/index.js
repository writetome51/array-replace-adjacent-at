"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var array_replace_adjacent_items_1 = require("@writetome51/array-replace-adjacent-items");
// Replaces adjacent items, beginning at `index`, with the same number
// of `newValues`, in `array`.  `index` can be negative or positive.
// The number of adjacent items that get replaced equals `newValues.length`.
function replaceAdjacentAt(index, newValues, array) {
    errorIfNotArray_1.errorIfNotArray(newValues);
    // The other parameters, index and array, are type-checked here:
    array_replace_adjacent_items_1._replaceAdjacentItems(index, newValues.length, newValues, array);
}
exports.replaceAdjacentAt = replaceAdjacentAt;
