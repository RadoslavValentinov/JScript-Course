window.addEventListener("load", solve);

function solve() {
  
    const ulId = document.getElementById('review-list');
    const pubUl = document.getElementById('published-list');

    const title = document.getElementById('task-title');
    const category = document.getElementById('task-category');
    const textarea = document.getElementById('task-content');

    const button = document.getElementById('publish-btn');

    button.addEventListener('click',publish);

    function publish() {
        
        if (title.value !== '' && category.value !== '' && textarea.value !== '') {
            
            let li = document.createElement('li');
            li.className = "rpost";

            let article = document.createElement('article');

            let h4 = document.createElement('h4');
            h4.textContent = title.value;

            let p1 = document.createElement('p');
            p1.textContent = `Category: ${category.value}`;

            let p2 = document.createElement('p');
            p2.textContent = `Content: ${textarea.value}`;

            article.appendChild(h4);
            article.appendChild(p1);
            article.appendChild(p2);
            li.appendChild(article);

            let btnEdit = document.createElement('button');
            btnEdit.className = 'action-btn edit';
            btnEdit.textContent = 'Edit';
            btnEdit.addEventListener('click',edit)

            let btnPost = document.createElement('button');
            btnPost.className = 'action-btn post';
            btnPost.textContent = 'Post';
            btnPost.addEventListener('click',post);

            li.appendChild(btnEdit);
            li.appendChild(btnPost);

            ulId.appendChild(li);

            title.value = ' '; 
            category.value = ' ';
            textarea.value = ' ';
        }

        function edit() {
            
            const getArticle = document.querySelector('article');
            const getLi = document.querySelector('li');

            let child = Array.from(getArticle.children);

            title.value = child[0].textContent;
            category.value = child[1].textContent;
            textarea.value = child[2].textContent

            ulId.removeChild(getLi);
        }

        function post() {
            
            const infoLi = document.querySelector('li');

            const btnEdit = infoLi.querySelector(".action-btn.edit");
            const btnPost = infoLi.querySelector(".action-btn.post");

            btnEdit.remove();
            btnPost.remove();

            pubUl.appendChild(infoLi);
        }
    }

}