import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';
import { ifIndexValid_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexValid_getActionResult';


// index can be negative or positive.

export function replaceAt(index, newValues: any[], array): void {
	errorIfValuesAreNotArrays([newValues, array]);
	ifIndexValid_getActionResult(
		index, () => array.splice(index, newValues.length, ...newValues), array
	);
}
