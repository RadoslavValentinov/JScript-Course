function sumDigit (number) {
    let sum = 0;

    while (number) {
        let last = number % 10;
        sum += last;
        number = Math.trunc(number /=  10);
    }

    console.log(sum);
}

sumDigit(245678)

