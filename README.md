# replaceAdjacentAt(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValues: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Replaces adjacent items, beginning at `index`, with the same number  
of `newValues`, in `array`.  
`index` can be negative or positive. 


## Examples:
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceAdjacentAt(-1, [20], arr);  
// arr is now  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 20 ]

replaceAdjacentAt(0, [20, 21, 22, 23], arr);  
// arr is now  [ 20, 21, 22, 23, 5, 6, 7, 8, 9, 20 ]

// This errors because arr only has 2 items left at index 8:
replaceAdjacentAt(8, ['z', 'b', 'c'], arr);
// Error: 'the array does not have enough items to fulfill your request'
```

## Installation
`npm i  @writetome51/array-replace-adjacent-at`


## Loading
```
import { replaceAdjacentAt } from '@writetome51/array-replace-adjacent-at';
```
