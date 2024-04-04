function cityInfo (input) {
    let dictionary = Object.entries(input);
    
    for (let [key,value] of dictionary) {
        console.log(`${key} -> ${value}`);
    }
}

cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});