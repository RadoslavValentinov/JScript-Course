function operation(num1,num2,input) {
    
    const add = (a,b) => a + b; 
    const multiply = (a,b) => a * b; 
    const divide = (a,b) => a / b; 
    const subtract = (a,b) => a - b;
    
    switch (input) {
        case 'add':
            console.log(add(num1,num2));
        break;
        
        case 'multiply':
            console.log(multiply(num1,num2));
        break;

        case 'divide':
            console.log(divide(num1,num2));
        break;

        case 'subtract':
            console.log(subtract(num1,num2));
        break;
        default:
            console.log('Invalid parameter');
        break;
    }
}


operation(5,5,'multiply');