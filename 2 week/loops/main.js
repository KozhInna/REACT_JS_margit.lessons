// Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}

//Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.
let result = '';
let end = 98;

for (let i = 2; i < 100; i += 2) {
    result += i + ' ';
    result += ' ' + end + ' ';
    end -= 2;
}
console.log(result);

// Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let distance, time;
while (distance != 0) {
    distance = prompt('What distance in km?');
    if (distance == 0) {
        console.log('distance 0 - game over');
        break;
    }
    time = prompt('Enter time in hours');
    let average = distance / time;
    console.log('average is:', average);
}

// Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.
let even = 0;

for (let counter = 0; counter < 20; counter++) {
    let input = Number(prompt('enter a number'));
    if (input % 2 == 0) {
        even++;
    }
}
console.log('There was', even, 'even numbers');

// Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.
let input;
let sum = 0;
let count = 0;

while (input != 0) {
    input = Number(prompt('enter a number'));

}

// Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let input;
let average = 0;
let sum = 0;

for (let i = 0; i < 25; i++) {
    input = Number(prompt('tell me the number'));
    sum += input;
}
average = sum / 25;
console.log('You entered 25 numbers and the average of them is', average);

// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let input;
let decision;

do {
    input = Number(prompt('Tell me one number'));
    decision = prompt('Do you want to continue giving numbers? (y/n)');

while (decision == 'y');
 break;
}

// Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

let input = 0;
let min = 0;
let counter = prompt('How many numbers are you going to enter?');

for (let i = 0; i < counter; i++) {
    input = Number(prompt(Tell me your numbers));
    if (min < 1) {
        min = input;
    }
}

// 9.Make a program that asks ten numbers and in the end prints out two biggest numbers.

let max = 0;
let max1 = 0;
let max2 = 0;
let input = 0;

for (let i = 0; i < 5; i++) {
input = Number(prompt('Give me 10 numbers'));
if (input > max1) {
max1 = input;
// console.log('Num1', max1);
input = Number(prompt('Give me 10 numbers'));
if (input > max2) {
max2 = input;
// console.log('Num2', max2);
}
if (max2 > max1) {
max = max1;
max1 = max2;
max2 = max;
// console.log('mun changed1', max1);
// console.log('mun changed2', max2);
}
}
}
console.log(`These are two biggest numbers ${max1} and ${max2}`);

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

let max = 0;
let average = 0;
let input = 0;
let sum = 0;

for (let i = 0; i < 10; i++) {
input = Number(prompt('Give me 10 numbers'));
min = input;
if (input > max) {
    max = input;
} 
    sum += input;
}
    average = sum/10;

if (input < min) {
    min = input;
}


console.log('Sum:',sum);
console.log('Average', average);
console.log('This is the biggest number',max, 'and the smallest number', min);
