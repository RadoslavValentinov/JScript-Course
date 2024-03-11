function censored (input,word) {
   
    while (input.includes(word)) {
        input = input.replace(word, '*'.repeat(word.length));
    }

    console.log(input)
}

censored('A small sentence with some words', 'small')