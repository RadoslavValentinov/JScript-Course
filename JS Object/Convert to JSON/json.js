function convertToObject(name,lastName,hairColor) {
    
    let convertToObj = {};
    convertToObj.name = name;
    convertToObj.lastName = lastName;
    convertToObj.hairColor = hairColor;

    console.log(JSON.stringify(convertToObj));
}

convertToObject('George', 'Jones', 'Brown');