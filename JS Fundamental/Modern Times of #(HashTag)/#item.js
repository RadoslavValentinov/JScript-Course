function hashtag (input) {

    input = input.split(' ');

    for (let i = 0; i < input.length; i++) {
         if (isLatterOfDigit(input[i])){
            console.log(input[i].substring(1,input[i].length));
        }
    }

    function  isLatterOfDigit(input){
        return Boolean (input.match(/#[A-Za-z]/));
    }

}


hashtag('Nowadays everyone uses # to tag a #special word in #so111cialMedia');