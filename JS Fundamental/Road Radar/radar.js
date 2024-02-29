function limit(speed,category) {
    
    let speedLimit = 0;
    let status ;
    let difference =0;

    switch (category) {
        case 'motorway':
            speedLimit = 130;
            difference = speed - speedLimit;
            if (speed === speedLimit) {
                console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
            }else if(speed < speedLimit){
                console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
            }else{
                if (difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }else if(difference > 20 && difference <= 40){
                    let difference = speedLimit-speed;
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }else{
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
        break;
        
        case 'interstate':
            speedLimit = 90;
            difference = speed - speedLimit;
            if (speed === speedLimit) {
                console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
            }else if(speed < speedLimit){
                console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
            }else{
                if (difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }else if(difference > 20 && difference <= 40){
                    let difference = speed - speedLimit;
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }else{
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
        break;

        case 'city':
            speedLimit = 50;
            difference = speed - speedLimit;
            if (speed === speedLimit) {
                console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
            }else if(speed < speedLimit){
                console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
            }else{
                if (difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }else if(difference > 20 && difference <= 40){
                    let difference = speed - speedLimit;
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }else{
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
        break;

        case 'residential':
            speedLimit = 20;
            difference = speed - speedLimit;
            if (speed === speedLimit) {
                console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
            }else if(speed < speedLimit){
                console.log( `Driving ${speed} km/h in a ${speedLimit} zone`);
            }else{
                if (difference <= 20) {
                    status = 'speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }else if(difference > 20 && difference <= 40){
                    let difference = speed - speedLimit;
                    status = 'excessive speeding';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }else{
                    status = 'reckless driving';
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
                }
            }
        break;

        default:
            console.log('Invalid input');
        break;
    }
}

limit(40, 'city');
limit(21, 'residential');
limit(120, 'interstate');
limit(200, 'motorway');
