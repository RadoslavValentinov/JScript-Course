function sum(numN , numM) {
    
    let first = Number(numN);
    let second = Number(numM);

    let sum = 0;
    let output = '';

    for (let i = first; i <= second; i++) {
        sum += i;
        output += i + " ";
    }

    console.log(output.trim())
    console.log(`Sum: ${sum}`)
}

sum(5,10)

sum(0,26)