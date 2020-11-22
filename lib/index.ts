import { _replaceAdjacentItems } from '@writetome51/array-replace-adjacent-items';


// Replaces adjacent items, beginning at `index`, with the same number
// of `newValues`, in `array`.  `index` can be negative or positive.

export function replaceAdjacentAt(index, newValues: any[], array): void {
	_replaceAdjacentItems(index, newValues.length, newValues, array);
}
