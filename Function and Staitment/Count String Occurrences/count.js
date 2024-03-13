function search (input,searchWord) {
    
    let arr = input.split(' ');
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === searchWord) {
            count++;
        }
    }

    console.log(count);
}

search('This is a word and it also is a sentence','is');

search('softuni is great place for learning new programming languages','softuni');