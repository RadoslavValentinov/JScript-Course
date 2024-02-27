function multiple(number) {
    let digit = Number(number);
    let output = "";
    for (let i = 1; i <= 10; i++) {
        let multiple = digit * i;
        output += `${digit} X ${i} = ${multiple}  \n`;
    }

    console.log(output);
}

multiple(5);