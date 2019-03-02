# replaceAdjacentAt(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValues: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Replaces adjacent items, beginning at `index`, with the same number  
of `newValues`, in `array`.  
`index` can be negative or positive.   
The number of adjacent items that get replaced equals `newValues.length`.

Examples:
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceAdjacentAt(1, [20], arr);  
// arr is now  [ 1, 20, 3, 4, 5, 6, 7, 8, 9, 10 ]

replaceAdjacentAt(-1, [20], arr);  
// arr is now  [ 1, 20, 3, 4, 5, 6, 7, 8, 9, 20 ]

replaceAdjacentAt(0, [20, 21, 22, 23], arr);  
// arr is now  [ 20, 21, 22, 23, 5, 6, 7, 8, 9, 20 ]

replaceAdjacentAt(6, ['a','b','c'], arr);  
// arr is now  [ 20, 21, 22, 23, 5, 6, 'a', 'b', 'c', 20 ]
```

## Installation
`npm i  @writetome51/array-replace-adjacent-at`


## Loading
```
// if using TypeScript:
import { replaceAdjacentAt } from '@writetome51/array-replace-adjacent-at';
// if using ES5 JavaScript:
var  replaceAdjacentAt = 
    require('@writetome51/array-replace-adjacent-at').replaceAdjacentAt;
```