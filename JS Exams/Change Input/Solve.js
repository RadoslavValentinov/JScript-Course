function solve(input) {
    
    let array = input.shift().split('|');
    
    for (const command of input) {
      
        let splitted = command.split(' ');

        if (splitted[0] === 'Finish') {
            break;
        }

        if (splitted[0] === 'Retake') {

            let first = splitted[1];
            let second = splitted[2];

            let indFirst = array.indexOf(first);
            let indSecond = array.indexOf(second);


            if (indSecond > indFirst) {
                array[indSecond] = first;
                array[indFirst] = second;

                console.log(`${first} retakes ${second}.`)
            }
            
        } else if (splitted[0] === 'Trouble') {

            let horse = splitted[1];
            let indHorse = array.indexOf(horse); 

            if (indHorse > 0) {
                let nextPos = array[indHorse - 1];
                array[indHorse] = nextPos;
                array[indHorse-1] = horse;

                console.log(`Trouble for ${horse} - drops one position.`);
            }
            
        } else if(splitted[0] === 'Rage'){

            let current = splitted[1];
            let indCurr = array.indexOf(current);

            let arrLast = array[array.length-1];

            if (indCurr !== array[array.length -1] && indCurr > 0 && indCurr <= array.length) {
                // case array length 3
                if (indCurr === 0 && array.length === 3) {
                
                    array.shift();
                    array.push(current);
                   console.log(`${current} rages 2 positions ahead.`);
                } else if( indCurr === 1){
    
                if (array.length > 3) {
                         array[array.length - 1] = current;
                         array[indCurr] = array[indCurr+1];
                         array[indCurr+1] = arrLast;
                         console.log(`${current} rages 2 positions ahead.`);
                } 
                   
                } else {
                    array[array.length - 1] = current;
                    array[indCurr] = arrLast;
                    console.log(`${current} rages 2 positions ahead.`);
                }
            }
            

        } else if(splitted[0] === 'Miracle'){

            let curHorse =array[0];

           
            // maybe here check other variant of array length
            array.shift();
            array.push(curHorse);
            console.log(`What a miracle - ${curHorse} becomes first.`)
        
           
        }
    }

    console.log(array.join('->'));
    let winner =array[array.length-1];
    console.log(`The winner is: ${winner}`);
    
}

solve(['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish'])
