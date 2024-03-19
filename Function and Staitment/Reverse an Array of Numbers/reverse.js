function reverseArray (num, numArr) {
    let array = [];
    
    let arr;
    for (let index = 0; index < num; index++) {
        arr = numArr.shift()
        array.push(arr)
    }
    
    let output = "";
    for (let i = array.length-1; i >= 0; i--) {
        output +=(`${array[i]} `)
    }
   

    console.log(output)
}


reverseArray(3, [10, 20, 30, 40, 50]);

reverseArray(4, [-1, 20, 99, 5]);

reverseArray(2, [66, 43, 75, 89, 47]);