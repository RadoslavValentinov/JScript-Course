

function solve(firstNum,secondNum, operator){

    let result;

    switch (operator) {

        case '+':
            result =  firstNum + secondNum
        break;
        case '-':
            result = firstNum - secondNum 
        break;
        case '*':
            result =  firstNum * secondNum    
        break;
        case '/':
            result =  firstNum / secondNum  
        break;
        case '%':
            result =  firstNum % secondNum   
        break;
        case '**':
            result =  firstNum ** secondNum   
        break;
    }

    console.log(result)
}

solve(5,6,'+')
solve(15,6,'-')
solve(5,3,'*')
solve(12,6,'/')
solve(14,6,'%')
solve(2,8,'**')