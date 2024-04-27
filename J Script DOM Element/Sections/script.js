function create(words) {
   
   let arr = [...words];
   let getdiv = document.getElementById("content");
  

   for (const sec of arr) {
      
      let createDiv = document.createElement('div');
      let createP = document.createElement('p');
      createP.style.display = 'none';
      createP.textContent = sec;
      createDiv.addEventListener('click',Show);

      createDiv.appendChild(createP);
      getdiv.appendChild(createDiv);

   }

   function Show(e){
      
      let cur = e.currentTarget.children;
      cur[0].style.display = 'block';
   }
}