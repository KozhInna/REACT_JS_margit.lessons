const daySalary = () => {
    const payPerHour = Number(prompt('How much do you get per hour?'));
    const hoursPerDay = Number(prompt('How many hours have you worked today?'));
    let salary;
    const basicSalary = 7 * payPerHour;
    const halfExtra = payPerHour * 1,5;
    const doubleExta = payPerHour * 2;
    
    if (hoursPerDay <= 7) {
    salary = payPerHour * hoursPerDay;
    return console.log(salary);
    } else if (hoursPerDay > 7 && hoursPerDay < 10) {
    salary = basicSalary + ((hoursPerDay - 7) * halfExtra);
    return console.log(salary);
    } else {
    salary = basicSalary + (2 * halfExtra) + ((hoursPerDay - 9) * doubleExta);
    return console.log(salary);
    }
    }
    daySalary();