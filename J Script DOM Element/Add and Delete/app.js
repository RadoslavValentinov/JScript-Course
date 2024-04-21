function addItem() {
    
    
    let ulList = document.getElementById('items');
    let getInput = document.getElementById('newItemText');

    let createLi = document.createElement('li');
    createLi.textContent = getInput.value;

    let createA = document.createElement('a');
    createA.textContent = '[Delete]';
    createA.setAttribute('href', '#HTML');
    createA.addEventListener('click',Deleted)
    createLi.appendChild(createA)


    ulList.appendChild(createLi);
    getInput.value = '';

    function Deleted(){

        createLi.remove();
    }
}
