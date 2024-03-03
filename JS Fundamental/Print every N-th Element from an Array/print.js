function printNElement (input,count) {
    
    let array = [...input];
    let result = [];

    for (let i = 0; i < array.length; i+=count) {
        result.push(array[i]);
    }

    return result;
}

printNElement(['5', '20', '31', '4', '20'], 2);