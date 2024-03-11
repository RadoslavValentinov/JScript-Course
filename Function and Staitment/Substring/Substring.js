function subWord (word,startIndex,count) {
    let result = word.substring(Number(startIndex), Number(count)+ startIndex);
    
   console.log(result);
}

subWord('ASentence', 1, 8)

subWord('SkipWord', 4, 7)