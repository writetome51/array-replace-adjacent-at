# replaceAdjacentAt\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValues: T[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): void

Replaces adjacent items, beginning at `startingIndex`, with the same number  
of `newValues`, in `array`.  
`index` can be negative or positive. 


## Examples:
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceAdjacentAt(0, [20], arr);  
// arr is now  [ 20, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

replaceAdjacentAt(0, [30, 31, 32, 33], arr);  
// arr is now  [ 30, 31, 32, 33, 5, 6, 7, 8, 9, 10 ]

replaceAdjacentAt(-3, [1, 2, 3], arr);
// arr is now  [ 30, 31, 32, 33, 5, 6, 7, 1, 2, 3 ]

// This works because the second arg has length greater than zero:
replaceAdjacentAt(-3, 'aaa', arr);
// arr is now  [ 30, 31, 32, 33, 5, 6, 7, 'a', 'a', 'a' ]

// This errors because the second arg has length of zero:
replaceAdjacentAt(0, [], arr);
// Error: 'Input must be integer greater than zero'

// This errors because arr only has 2 items left at index 8:
replaceAdjacentAt(8, ['a', 'b', 'c'], arr);
// Error: 'the array does not have enough items to fulfill your request'
```

## Installation
`npm i  @writetome51/array-replace-adjacent-at`


## Loading
```
import { replaceAdjacentAt } from '@writetome51/array-replace-adjacent-at';
```
