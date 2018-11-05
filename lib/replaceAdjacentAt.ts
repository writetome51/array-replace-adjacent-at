import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items/_replaceAdjacentItems';


// starting at index, replaces same number of items as the number of items in newValues.
// index can be negative or positive.

export function replaceAdjacentAt(index, newValues: any[], array): void {
	errorIfNotArray(newValues);

	// The other parameters, index and array, are type-checked here:
	_replaceAdjacentItems(index, newValues.length, newValues, array);
}
