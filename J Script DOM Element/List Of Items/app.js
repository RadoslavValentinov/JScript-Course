function addItem() {
    
    let ulList = document.getElementById('items');
    let getInput = document.getElementById('newItemText');

    let createLi = document.createElement('li');
    createLi.textContent = getInput.value;


    ulList.appendChild(createLi);
    getInput.value = '';
}