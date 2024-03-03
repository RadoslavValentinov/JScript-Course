function rotationArray (numbers,rotation) {
    let array = [];
    array = numbers;
    let count =Number(rotation);

    for (let i = 0; i < count; i++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }

    console.log(array.join(" "));
}

rotationArray([51, 47, 32, 61, 21], 2);

rotationArray([32, 21, 61, 1], 4);

rotationArray([2, 4, 15, 31], 5);