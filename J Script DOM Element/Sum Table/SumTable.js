function sumTable() {

    let result = document.getElementById('sum');
    let allTr = document.querySelectorAll('td');

    let sum = 0;

    for (let i = 0; i < allTr.length; i++) {

        if (Number(allTr[i].textContent)) {
            
            sum +=Number(allTr[i].textContent); 
        }
    }

    result.textContent = sum;
}