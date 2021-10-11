function sum (a, b){
    return a + b;
}
console.log(sum(3, 4));
//7


console.log("*************");
// with more input
function sum2 (a,b){
    console.log(arguments);
    return a + b;
}
console.log(sum2(3, 4, 5, 6, 7));
// Arguments(5) [3, 4, 5, 6, 7, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 3
// 1: 4
// 2: 5
// 3: 6
// 4: 7
// callee: ƒ sum(a,b)
// length: 5
// Symbol(Symbol.iterator): ƒ values()
// [[Prototype]]: Object

// ====>>> ba loop zadan ro arguments mitavan handel kard
function sum3 (a, b){
    let total=0;
    for (let value of arguments) total+= value;
    return total;
}
console.log(sum3(3, 4, 5, 6, 7));
//25

// ====>>>  we do not need input

function sum4 () {
    let total=0;
    for (let value of arguments) total+= value;
    return total;
}
console.log(sum4(3, 4, 5, 6, 7));
//25


// we can use rest operator
function sum5 (...args) {
    console.log(args);
}
console.log(sum5(3, 4, 5, 6, 7));
// (5) [3, 4, 5, 6, 7]
//we have array so we can loop on this but is better to use reduce method


function sum6 (...args) {
    console.log(args);
    return args.reduce( (acc,curr) => acc + curr);
}
console.log(sum6(3, 4, 5, 6, 7, 8, 12, 13));
// (8) [3, 4, 5, 6, 7, 8, 12, 13]
//  58


//when we want by product with Discount
// function sum7 (...args , discount) {
//     console.log(args);
//     return args.reduce( (acc,curr) => acc + curr);
// }
// console.log(sum7(3, 4, 5, 6, 0.1));
// Uncaught SyntaxError: Rest parameter must be last formal parameter===>>>
function sum7 ( discount, ...args) {
        console.log(args);
        const total = args.reduce( (acc,curr) => acc + curr);
        return total * (1- discount);
    }
console.log(sum7(0.1, 3, 4, 5, 6 ));
// (4) [3, 4, 5, 6]
//  16.2