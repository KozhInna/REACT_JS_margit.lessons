const askNumber = () => {
    const num1 = Number(prompt('Please, type a number'));
    const num2 = Number(prompt('Please, type a number'));
    const num3 = Number(prompt('Please, type a number'));

    const sum = num1 + num2 + num3;
    const mult = num1 * num2 * num3;

    if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        return console.log(`This is multiplication ${mult}. This is sum ${sum}.`);
    } else if (num1 >= 0 || num2 >= 0 || num3 >= 0)  {
        return console.log(`This is sum ${sum}.`);
    } else {
        return console.log("only negatives");
    }
}

askNumber();