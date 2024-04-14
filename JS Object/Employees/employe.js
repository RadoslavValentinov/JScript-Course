function allEmployee (input) {
    let employee = {};

    for (let i = 0; i < input.length; i++) {
       
        let splitted = input[i];
        let length = splitted.length;

        employee[splitted] =Number(length);        
    }

    for (let key in employee) {
        console.log(`Name: ${key} -- Personal Number: ${employee[key]}`);
    }
}

allEmployee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);