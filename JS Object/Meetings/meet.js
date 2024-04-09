function meeting(input) {
    
    let dayAndName = {};

    for (let str of input) {
        let [weekday,name] = str.split(' ');

        if (!dayAndName.hasOwnProperty(weekday)) {
            dayAndName[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }else {
             console.log(`Conflict on ${weekday}!`);
        }
    }

    for (let key in dayAndName) {
        console.log(`${key} -> ${dayAndName[key]}`);
    }
}

meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);