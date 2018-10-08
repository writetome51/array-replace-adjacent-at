"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
var ifIndexValid_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexValid_getActionResult");
// In these 2 functions, index can be negative or positive.
function replaceAt(index, newValue, array) {
    errorIfNotArray_1.errorIfNotArray(array);
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(index, function () { return array.splice(index, 1, newValue); }, array);
}
exports.replaceAt = replaceAt;
function replaceAdjacentAt(index, newValues, array) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([newValues, array]);
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(index, function () { return array.splice.apply(array, [index, newValues.length].concat(newValues)); }, array);
}
exports.replaceAdjacentAt = replaceAdjacentAt;
