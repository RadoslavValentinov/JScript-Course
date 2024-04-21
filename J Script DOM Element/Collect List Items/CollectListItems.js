function extractText() {
   
    let getAllLi = document.getElementsByTagName('li');
    let area = document.getElementById('result');

    let allText = Array.from(getAllLi);

  for (const item of allText) {
    
     area.textContent += item.textContent + '\n';
  }
}