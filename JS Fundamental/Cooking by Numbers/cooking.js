function cookingNumber (number,...operation) {
    let convert = Number(number);

    for (let i = 0; i < operation.length; i++) {
       
        switch (operation[i]) {
            case 'chop':
                convert /= 2;
                console.log(convert);
            break;

            case 'dice':
                convert = Math.sqrt(convert);
                console.log(convert);
            break;
        
            case 'spice':
                convert +=1;
                console.log(convert);
            break;

            case 'bake':
                convert *= 3;
                console.log(convert);
            break;

            case 'fillet':
                convert -= convert * 0.2;
                console.log(convert);
            break;
            default:
                console.log('Invalid command');
            break;
        }
        
    }
}


cookingNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');