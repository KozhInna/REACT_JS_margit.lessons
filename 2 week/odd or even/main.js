const askNumber = () => {
    const num = Number(prompt('Please, type a number'));

    if (num % 2 === 0) {
        return console.log(`number ${num} is even`)
    } else {
        return console.log(`number ${num} is odd`)
    }
}
askNumber();