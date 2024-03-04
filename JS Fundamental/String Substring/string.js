function foundString(word,input) {
    
    input = input.split(' ');
    let output = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === word) {
             output = word;
             break;
        } else{
             output =`${word} not found!`;
        }
    }
    console.log(output);
}

foundString('javascript',
'JavaScript is the best programming language');

foundString('python',
'JavaScript is the best programming language');