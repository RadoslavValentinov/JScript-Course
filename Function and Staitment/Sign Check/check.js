function number(...numbers){
    let numNegative = 0;

    for (let i = 0; i < numbers.length; i++) {
        
        let getNum = Number(numbers[i]); 
        if (getNum < 0 ) {
            numNegative ++;
        }
    }

    if (numNegative === 0 || numNegative === 2) {
        console.log('Positive');
    } else{
        console.log('Negative');
    }
}

number(-1,
    -2,
    -3);