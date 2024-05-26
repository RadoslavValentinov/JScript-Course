window.addEventListener("load", solve);

function solve() {
  
  /// if one of all item is empty program show noting
  const btnPublish = document.getElementById('form-btn');
  const ulPreview = document.getElementById('preview-list');

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');

  const storyTitle = document.getElementById('story-title');
  const selectOption = document.getElementById('genre');
  const textarea = document.getElementById('story');

  const divMain = document.getElementById('main');
  const formInner =document.getElementsByClassName("form-wrapper");
  const divSide = document.getElementById('side-wrapper');

  btnPublish.addEventListener('click',publish);

  let allInput = [];
  //btnPublish.setAttribute('disabled','');

  function publish() {

    if (firstName.value !== '' && lastName.value !== '' && age.value !== '' && storyTitle.value !== '' 
      && textarea.value !== '') {
      
      let li = document.createElement('li');

      let article = document.createElement('article');

      let h4 = document.createElement('h4');
      h4.textContent = `Name: ${firstName.value} ${lastName.value}`;

      let pAge = document.createElement('p');
      pAge.textContent = `Age: ${Number(age.value)}`;

      let pTitle = document.createElement('p');
      pTitle.textContent =`Title: ${storyTitle.value}`;

      let pGenre = document.createElement('p');
      pGenre.textContent = `Genre: ${selectOption.value}`;

      let pTextarea = document.createElement('p');
      pTextarea.textContent = textarea.value;

      article.appendChild(h4);
      article.appendChild(pAge);
      article.appendChild(pTitle);
      article.appendChild(pGenre);
      article.appendChild(pTextarea);

      li.appendChild(article);
      li.setAttribute('class','story-info');   
    
      allInput = [
        firstName.value,
        lastName.value,
        age.value,
        storyTitle.value,
        selectOption.value,
        textarea.value
      ]

      let save = document.createElement('button');
      save.textContent = 'Save Story';
      save.setAttribute('class','save-btn');
      save.addEventListener('click',clickSave);

      let edit = document.createElement('button');
      edit.textContent = 'Edit Story';
      edit.setAttribute('class','edit-btn');
      edit.addEventListener('click',clickEdit);

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete Story';
      deleteBtn.setAttribute('class','delete-btn');
      deleteBtn.addEventListener('click',clickDelete);

      li.appendChild(save);
      li.appendChild(edit);
      li.appendChild(deleteBtn);

      ulPreview.appendChild(li);    

      // maybe querySelectorAll(input) is to good way to clean
      firstName.value = '';
      lastName.value = '';
      age.value = '';
      storyTitle.value = '';
      textarea.value = '';    

      btnPublish.setAttribute('disabled','');
    }
    
  }

  function clickSave() {
    formInner[0].style.display = 'none';
    divSide.style.display = 'none';

    let h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    divMain.appendChild(h1); 
  }

  function clickEdit() {
    
    // let getArticle = document.getElementsByTagName('h4');
    // let getP =Array.from(document.getElementsByTagName('p'));

    // let sss = getP[0].textContent;
    // let split = sss.split(' ');
    // // how to get all value of element

    firstName.value = allInput[0];
    lastName.value = allInput[1];
    age.value = allInput[2];
    storyTitle.value = allInput[3];
    selectOption.value = allInput[4];
    textarea.value = allInput[5];


    let li =document.querySelector('li');
    ulPreview.removeChild(li);

    btnPublish.disabled = false;
  }

  function clickDelete() {
    
    let child = ulPreview.children;
    let li = document.querySelector('li');
    ulPreview.removeChild(li);

    btnPublish.disabled = false;
  }
}
