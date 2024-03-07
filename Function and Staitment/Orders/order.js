function totalPrice(input,count) {
    
    let price = 0;

    switch (input) {
        case 'coffee':
            price = 1.50;
            return sumOrder(count,price);
        break;
        
        case 'water':
            price = 1.00;
            return sumOrder(count,price);
        break;

        case 'coke':
            price = 1.40;
            return sumOrder(count,price);
        break;

        case 'snacks':
            price = 2.00;
            return sumOrder(count,price);
        break;

        default:
            console.log('Invalid order');
        break;
    }



    function sumOrder(count,price) {
        console.log((count * price).toFixed(2));
    }
}

totalPrice("coffee", 2);