function replaced (word,input) {
    
    input = input.split(' ');
    word = word.split(', ');

   for (let i = 0; i < input.length; i++) {
        for(const set of word){
            if (input[i][0]=== '*' && input[i].length === set.length) {
                input[i] = set;
            }
        }
   }
    console.log(input.join(' '));
}

replaced('great','softuni is ***** place for learning new programming languages');

replaced('great, learning','softuni is ***** place for ******** new programming languages');