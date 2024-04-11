function address(input) {
    
    let data = {};

    for (const line of input) {
        
        let [name, address] = line.split(':');

        if (data.hasOwnProperty(name)) {
            data[name] = address;
        }
        data[name] = address;
    }

    let sorted = Object.entries(data);
     sorted.sort((nameA,nameB) => nameA[0].localeCompare(nameB[0]));
        
    for (let [name,address] of sorted) {
        console.log(`${name} -> ${address}`);
    }
}

address(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);