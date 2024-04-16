// //function solve(arr) {
//     const [wordsToFind, ...words] = arr;
//     const dict = {};
  
//     for (const word of wordsToFind.split(" ")) {
//       dict[word] = 0;
//     }
  
//     for (const sentence of words) {
//       for (const word of sentence.split(" ")) {
//         if (word in dict) {
//           dict[word] += 1;
//         }
//       }
//     }
//     for (const [word, count] of Object.entries(dict).sort((a, b) => b[1] - a[1])) {
//       console.log(`${word} - ${count}`);
//     }
//   }
// //

function trackerWords(input) {
    
    let findWord = {};
    let [word1,word2] = input[0].split(' ');
    findWord[word1] = 0;
    findWord[word2] = 0;

    for (let i = 0; i < input.length; i++) {
    
        if (input[i] === word1) {
            findWord[word1]++;
        } else if(input[i] === word2){
            findWord[word2]++;
        }
    }

    let result = [];
    result =Object.entries(findWord).sort((a, b) => {
        b[1] - a[1]
    });
   
    for (let line of result) {
        console.log(line);
    }
}

trackerWords([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);

trackerWords([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);