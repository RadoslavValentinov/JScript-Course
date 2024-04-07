function convertObject (input) {
    
    let parseInput = JSON.parse(input);

    let entries = Object.entries(parseInput);

    for (let [key,value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convertObject('{"name": "George", "age": 40, "town": "Sofia"}');