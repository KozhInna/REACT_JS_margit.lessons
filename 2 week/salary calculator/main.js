const daySalary = () => {
    const payPerHour = Number(prompt('How much do you get per hour?'));
    const hoursPerDay = Number(prompt('How many hours have you worked today?'));

    let basicSalary = 7 * payPerHour;
    const halfExtra = payPerHour + (payPerHour / 2);
    // const doubleExta = basicSalary + ((hoursPerDay - 7) * * 2;
    let salary;
    if (hoursPerDay <= 7) {
        salary = payPerHour * hoursPerDay;
        return console.log(salary);
    } else if (hoursPerDay > 7 && hoursPerDay < 10) {
        salary = basicSalary + ((hoursPerDay - 7) * halfExtra);
        return console.log(salary);
    } else {
        salary = (7 * payPerHour)  + ((hoursPerDay - 9) * doubleExta);
        return console.log(salary);
    }
}

daySalary();