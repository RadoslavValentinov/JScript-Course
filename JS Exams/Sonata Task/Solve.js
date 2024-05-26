function Sonata(input) {

    let countPiece =Number(input.shift()); 
    
    let collection = {};

    while(countPiece > 0) {   

        let [piece,composer,key] = input.shift().split('|');

        if (!collection.hasOwnProperty(piece)) {

            collection[piece] = {composer,key};
        }

        countPiece--;
    }

    while (input.length > 0) {
       
        let splittedInput = input.shift().split('|');
        let command =splittedInput.shift(); 

        if (command === 'Stop') {
            break;
        }

        if (command === 'Add') {

            let [piece,composer,key] = splittedInput;

            if (!collection.hasOwnProperty(piece)) {

                collection[piece] = {composer,key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else{
                console.log(`${piece} is already in the collection!`);
            }


        } else if(command === 'Remove'){

            let piece = splittedInput.shift();

            if (collection.hasOwnProperty(piece)) {

                delete collection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
            

        } else if(command === 'ChangeKey'){
            
            let [piece,newKey] = splittedInput;

            if (collection.hasOwnProperty(piece)) {
                collection[piece].key = newKey;

                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }


    let parsed = Object.entries(collection);

    for (const [piece,info] of parsed) {

        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}

Sonata(
    [
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
      ]
  );