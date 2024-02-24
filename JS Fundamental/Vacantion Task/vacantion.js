function priceOfDay (people,info,day) {
    
    let price = 0;

    switch (day) {

        case "Friday":
            if (info === 'Students') {
                price = 8.45;
            }else if(info === 'Business'){
                price = 10.90;
            }else if(info === 'Regular'){
                price = 15;
            }
        break;

        case "Saturday":
            if (info === 'Students') {
                price = 9.80;
            }else if(info === 'Business'){
                price = 15.60;
            }else if(info === 'Regular'){
                price = 20;
            }
        break;

        case "Sunday":
            if (info === 'Students') {
                price = 10.46;
            }else if(info === 'Business'){
                price = 16;
            }else if(info === 'Regular'){
                price = 22.50;
            }
        break;
    
        default:
            console.log('Invalid day')
        break;
    }

    let result =  people * price;   

    if (info === 'Students' && people >= 30) {
        result -= result * 0.15;
    }else if(info === 'Business' && people >= 100){
        people -= 10;
        result = people * price;
    }else if(info === 'Regular' && people >= 10 && people <= 20){
        result -= result * 0.05;
    }

    console.log(`Total price: ${result.toFixed(2)}`)
}




priceOfDay(15,"Regular","Sunday")