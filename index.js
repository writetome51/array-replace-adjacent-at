import {validateAdjacentItemsOperationArgs}
	from '@writetome51/validate-adjacent-items-operation-args';

// Replaces adjacent items, beginning at `startingIndex`, with the same number
// of `newValues`, in `array`.  `startingIndex` can be negative or positive.

export const replaceAdjacentAt = (startingIndex, newValues, array) => {
	const newValsLength = newValues.length;
	validateAdjacentItemsOperationArgs(startingIndex, newValsLength, array);
	startingIndex = (startingIndex < 0 ? array.length + startingIndex : startingIndex);

	for (let i = 0; i < newValsLength; ++i) {
		array[startingIndex] = newValues[i];
		++startingIndex;
	}
};
