function arrayCase (input) {
    
    console.log(input.split(/(?=[A-Z])/).join(', '));

}

arrayCase('SplitMeIfYouCanHaHaYouCantOrYouCan');