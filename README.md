To include in your project:

import { replaceAdjacentAt } from '@writetome51/array-replace-adjacent-at';

This function replaces adjacent items in the array with the same number of new adjacent items  
beginning at a chosen index.  The index can be negative or positive.

replaceAdjacentAt(index, newValues: any[], array);

Examples:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceAdjacentAt(1, [20], arr);  
--> [ 1, 20, 3, 4, 5, 6, 7, 8, 9, 10 ]

replaceAdjacentAt(-1, [20], arr);  
--> [ 1, 20, 3, 4, 5, 6, 7, 8, 9, 20 ]

replaceAdjacentAt(0, [20, 21, 22, 23], arr);  
--> [ 20, 21, 22, 23, 5, 6, 7, 8, 9, 20 ]

replaceAdjacentAt(6, ['a','b','c'], arr);  
--> [ 20, 21, 22, 23, 5, 6, 'a', 'b', 'c', 20 ]
