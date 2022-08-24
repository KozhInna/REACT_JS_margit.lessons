// Make a program that asks the price of the gasoline and the amount of money from the user. The program calculates how much gasoline the user gets with the money. The result is displayed on to screen. If there are more than 10 litres, then message on the screen: "good, you can escape now" if less, it shows the message: "Ups, you have to stay here.

const price = Number(prompt('Price:'));
const money = Number(prompt('Money:')); 

console.log(money / price);