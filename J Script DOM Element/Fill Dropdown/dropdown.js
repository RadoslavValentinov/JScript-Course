function addItem() {
    
    let newOption = document.getElementById('menu');

    let getText = document.getElementById('newItemText').value;
    let getValue = document.getElementById('newItemValue').value;


    let create = document.createElement('option');
    create.textContent = getText;
    create.setAttribute('value',getValue);

    newOption.appendChild(create);


    getText.textContent = '';
    getValue.textContent='';

}