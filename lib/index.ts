import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items';


// Replaces adjacent items, beginning at `index`, with the same number
// of `newValues`, in `array`.  `index` can be negative or positive.
// The number of adjacent items that get replaced equals `newValues.length`.

export function replaceAdjacentAt(index, newValues: any[], array): void {
	errorIfNotArray(newValues);

	// The other parameters, index and array, are type-checked here:
	_replaceAdjacentItems(index, newValues.length, newValues, array);
}
