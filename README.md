This function replaces items in the array and returns void:

replaceAt(index, newValues, array);

Examples:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceAt(1, [], arr);
--> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

replaceAt(1, [20], arr);
--> [ 1, 20, 3, 4, 5, 6, 7, 8, 9, 10 ]

replaceAt(-1, [20], arr);
--> [ 1, 20, 3, 4, 5, 6, 7, 8, 9, 20 ]

replaceAt(0, [20, 21, 22, 23], arr);
--> [ 20, 21, 22, 23, 5, 6, 7, 8, 9, 20 ]

replaceAt(-1, [21, 22, 23, 24], arr);
--> [ 20, 21, 22, 23, 5, 6, 7, 8, 9, 21, 22, 23, 24 ]

replaceAt(6, ['a','b','c'], arr);
--> [ 20, 21, 22, 23, 5, 6, 'a', 'b', 'c', 21, 22, 23, 24 ]
