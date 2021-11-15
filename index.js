import {validateAdjacentItemsOperationArgs}
	from '@writetome51/validate-adjacent-items-operation-args';

// Replaces adjacent items, beginning at `startingIndex`, with the same number
// of `newValues`, in `array`.  `startingIndex` can be negative or positive.

export const replaceAdjacentAt = (startingIndex, newValues, array) => {
	const newValsLength = newValues.length;
	validateAdjacentItemsOperationArgs(startingIndex, newValsLength, array);
	if (startingIndex < 0) startingIndex += array.length;

	for (let i = 0; i < newValsLength; ++startingIndex)  array[startingIndex] = newValues[i++];
};
