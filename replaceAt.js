"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
var ifIndexValid_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexValid_getActionResult");
// index can be negative or positive.
function replaceAt(index, newValues, array) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([newValues, array]);
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(index, function () { return array.splice.apply(array, [index, newValues.length].concat(newValues)); }, array);
}
exports.replaceAt = replaceAt;
