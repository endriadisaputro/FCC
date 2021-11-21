// CARA 1
// function steamrollArray(arr) {
//     return arr.flat(Infinity);
// }

// console.log(steamrollArray([[["a"]], [["b"]]]));

// CARA 2
// let result = [];
function steamrollArray(arr, result = []) {
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            steamrollArray(arr[i], result);
        } else{
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));


/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/