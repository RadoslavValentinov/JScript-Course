function store (input1,input2) {
    
    let storeProduct = {};
    let count = 0;
    let prod = '';
    for (let i = 0; i < input1.length; i++) {
    
        count++;
        if (count % 2 === 0) {
            storeProduct[prod] =Number(input1[i]);
        } else{
            prod= input1[i]; 
            storeProduct[input1[i]] = 0;
        }
    }
    count = 0;
    for (let i = 0; i < input2.length; i++) {
    
        count++;
        if (count % 2 === 0) {
            if (storeProduct.hasOwnProperty(prod)) {
                storeProduct[prod] += Number(input2[i]);
            } else{
                 storeProduct[prod] =Number(input2[i]);
            }
           
        } else{
            prod= input2[i]; 
            if (storeProduct.hasOwnProperty(prod)) {
                continue;
            }
            storeProduct[input2[i]] = 0;
        }

    }

   for (let key in storeProduct) {
        console.log(`${key} -> ${storeProduct[key]}`);
   }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );