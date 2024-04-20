function toggle() {
    
    let text = document.getElementById('extra');
    let getBtn = document.getElementsByClassName('button');

    text.style.display = 'block';
    getBtn[0].textContent ='Less';
    getBtn[0].addEventListener('click', hideDiv );


    function hideDiv(){

        text.style.display = 'none';
        getBtn[0].textContent ='More';
    }
}