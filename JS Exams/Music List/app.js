window.addEventListener('load', solve);

function solve() {
    
    const genre = document.getElementById('genre');
    const names = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');

    const allSong = document.getElementsByClassName("all-hits-container");
    const saveSong = document.getElementsByClassName("saved-container");
    const likes = document.getElementsByClassName("likes");

    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', AddHandler);

    let county = 0;

    function AddHandler(event) {
        
        event.preventDefault();

        let div = document.createElement('div');
        div.className = 'hits-info';

        let image = document.createElement('img');
        image.setAttribute("src","./static/img/img.png");
        
        let h2Genre = document.createElement('h2');
        h2Genre.textContent =`Genre: ${genre.value}`;

        let h2Name = document.createElement('h2');
        h2Name.textContent =`Name: ${names.value}`;

        let h2Author = document.createElement('h2');
        h2Author.textContent =`Author: ${author.value}`;

        let h3Date = document.createElement('h3');
        h3Date.textContent =`Date: ${date.value}`;

        let savedBtn = document.createElement('button');
        savedBtn.className = 'save-btn';
        savedBtn.textContent = 'Save song';
        savedBtn.addEventListener('click',Save);

        let LikeBtn = document.createElement('button');
        LikeBtn.className = 'like-btn';
        LikeBtn.textContent = 'Like song';
        LikeBtn.addEventListener('click',LikeSong);

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';


        div.appendChild(image);
        div.appendChild(h2Genre);
        div.appendChild(h2Name);
        div.appendChild(h2Author);
        div.appendChild(h3Date);

        div.appendChild(savedBtn);
        div.appendChild(LikeBtn);
        div.appendChild(deleteBtn);

        allSong[0].appendChild(div);

        genre.value = '';
        names.value = '';
        author.value = '';
        date.value = '';
    }

    function Save(event) {
        
        const getDiv = document.querySelector(".hits-info");
        const btnSave = getDiv.querySelector('.save-btn');
        const btnLike = getDiv.querySelector('.like-btn');

        btnSave.remove();
        btnLike.remove();
       

        saveSong[0].appendChild(getDiv);
    }

    function LikeSong(event) {
        
        let LikeBtn = event.currentTarget;
        LikeBtn.disabled = true;
        let children =likes[0].children;
        children[0].textContent = `Total Likes: ${++county}`;
    }
}