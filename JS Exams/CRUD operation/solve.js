function attachEvents() {
  
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const searchById_URL = 'http://localhost:3030/jsonstore/tasks/';

    const AddBtn = document.getElementById('add-button');
    const LoadBtn = document.getElementById('load-button');

    const inputField = document.getElementById('title');
    const list = document.getElementById('todo-list');


    LoadBtn.addEventListener('click',LoadAll);
    AddBtn.addEventListener('click',AddElement);


    function LoadAll(event) {
        if (event) {
            event.preventDefault()
        }
        // event?.preventDefault()--- other way not refresh and return method of other method//// ????!!!!!
        list.innerHTML = '';

        let allTask =  fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) =>{

                const values = Object.values(data);

                for (const {_id,name} of values) {
                    
                    const li = document.createElement('li');
                    let span = document.createElement('span');
                    let RemoveBtn = document.createElement('button');
                    let editBtn = document.createElement('button');

                    li.id = _id;
                    span.textContent =  name;
                    RemoveBtn.textContent = 'Remove';
                    editBtn.textContent = 'Edit';

                    RemoveBtn.addEventListener('click',Remove)
                    editBtn.addEventListener('click',LoadEditForm);

                    li.append(span,RemoveBtn,editBtn);
                    list.appendChild(li);
                }
            })
            .catch((err) => {
                console.error(err);
            })

    }


    function LoadEditForm(event) {
        let parent = event.currentTarget.parentNode;
        let [span, _removeBtn, editBtn] = Array.from(parent.children); 
       
        let crInput = document.createElement('input');
        crInput.value = span.textContent;
        parent.prepend(crInput);

        let btnSubmit = document.createElement('button');
        btnSubmit.textContent = 'Submit';
        parent.appendChild(btnSubmit);
        btnSubmit.addEventListener('click',submit);

        span.remove();
        editBtn.remove();
    }

    function submit(event) {
        // get id of parent element
        const ids = event.currentTarget.parentNode.id;
        // get parent element
        const parLi = event.currentTarget.parentNode;

        // get input field from current Li-id
        let [ input ] = Array.from(parLi.children);

        // this method is http header of new name element
        const httpHeader = {
            method:'PATCH',
            body: JSON.stringify({
                name: input.value
            })
        }

        // PATCH request to new name of input.value and load all item
        fetch(`${BASE_URL}${ids}`,httpHeader)
            .then(() => LoadAll())
            .catch((err) => {
                console.error(err)
            })
    }

    function AddElement(event) {
        
        if (inputField.value !== '') {
             // not refresh page 
             event.preventDefault();

            // get value to new task
            const name = inputField.value;

             // header to post method to add new task
            const httpHeader = {
                method: 'POST',
                body: JSON.stringify({name})
            }

            // request from add new task
            fetch(BASE_URL,httpHeader)
             .then((res) => {
                    LoadAll();
                    inputField.value = '';
                })
                .catch((err) => {
                   console.error(err)
                })
        }
    }


    function Remove(event) {
        
        event.preventDefault();

        let id = event.currentTarget.parentNode.id;
        
        // header to delete task
        const httpHeader = {
            method: 'DELETE',
        }

        // request to delete task by id
        fetch(`${BASE_URL}${id}`,httpHeader)
            .then((data) => {
                LoadAll();
            })
            .catch((err) => {
                console.error(err)
            })
    }
       
}

attachEvents();
