async function solve(params) {
    
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const GET_BY_ID = 'http://localhost:3030/jsonstore/tasks/:id';

    const classList = document.getElementById('list');

    const btnAdd = document.getElementById('add-course');
    const loadInfo = document.getElementById('load-course');
    const btnEdit = document.getElementById('edit-course');

    loadInfo.addEventListener('click',loadAllInfo);
    btnAdd.addEventListener('click',AddCourse);
    btnEdit.addEventListener('click',editCourse);


    const courseName = document.getElementById('course-name');
    const corType = document.getElementById('course-type');
    const descriptionC = document.getElementById('description');
    const teacherName = document.getElementById('teacher-name');

    let currentId = null;

    
    async function loadAllInfo(event) {
        const getAllDiv = document.querySelectorAll(".container");
        if (getAllDiv.length > 0) {

            for (const item of getAllDiv) {
                classList.removeChild(item);
            }     
        }
       
        let info =await fetch(BASE_URL);
        let convert =await info.json();

        let allValues = Object.values(convert);

       for (const {_id,title,type,description,teacher} of allValues) {
            let div = document.createElement('div');
            div.className = 'container';
            div.setAttribute('id',_id);

            let h2name = document.createElement('h2');
            h2name.textContent = title;
        
            let h3name = document.createElement('h3');
            h3name.textContent = teacher;

            let typeCourse = document.createElement('h3');
            typeCourse.textContent = type;

            let content = document.createElement('h4');
            content.textContent = description;

            let btnEdit = document.createElement('button');
            btnEdit.className = 'edit-btn';
            btnEdit.textContent = 'Edit Course';
            btnEdit.addEventListener('click',Edit)

            let btnFinish = document.createElement('button');
            btnFinish.className = 'finish-btn'
            btnFinish.textContent = 'Finish Course';
            btnFinish.addEventListener('click',deleted);

            div.appendChild(h2name);
            div.appendChild(h3name);
            div.appendChild(typeCourse);
            div.appendChild(content);

            div.appendChild(btnEdit);
            div.appendChild(btnFinish); 

            classList.appendChild(div);
       }
    }

    async function Edit(event) {
        
        const currentDiv = event.currentTarget.parentNode;
        const childe =Array.from(currentDiv.children);

        currentDiv.style.display = 'none';
        currentId  =  currentDiv.id;

        courseName.value = childe[0].textContent;
        corType.value = childe[2].textContent; 
        descriptionC.value = childe[3].textContent;
        teacherName.value = childe[1].textContent;

        btnAdd.disabled = true; 
        btnEdit.disabled = false;

        return currentId;
    }

    async function editCourse(event) {
        event.preventDefault();

        let obj = {
            title: courseName.value,
            type: corType.value,
            description: descriptionC.value,
            teacher:teacherName.value,
            _id: currentId
        };
      

        const httpHeader = {
            method: 'PUT',
            body: JSON.stringify(obj)
        }

        let upload = await fetch(BASE_URL+currentId,httpHeader); 

        btnAdd.disabled = false;
        btnEdit.disabled = true;

        courseName.value = '';
        corType.value = '';
        descriptionC.value = '';
        teacherName.value = '';

       return loadAllInfo();
    }
    

    async function deleted (event) {
        
        const id = event.currentTarget.parentNode.id;

        const httpHeader = {
            method: 'Delete'
        }

        let rest = await fetch(BASE_URL + id, httpHeader)
        await loadAllInfo();
    }

    async function AddCourse(event) {
        event.preventDefault();

        title = courseName.value;
        type = corType.value;
        description = descriptionC.value;
        teacher = teacherName.value;

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ title, type, description, teacher }),
        }
        
        let set = await fetch(BASE_URL, httpHeaders)
        await loadAllInfo();

        courseName.value ='';
        corType.value = '';
        descriptionC.value ='';
        teacherName.value ='';
    }
       
}



solve();