// Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
// for (let i = 1; i < 100; i = i + 2) {
//     console.log(i);
// }

//Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.
let space = '';
for (let i = 2; i < 100; i = i + 2) {
    space += i + ' ';
}
console.log(space);