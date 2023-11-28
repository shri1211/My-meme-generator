const generateMemeBtn = document.querySelector('.generate-meme-btn')
const image = document.querySelector('img')
const Memeauthor = document.querySelector('.meme-author')
const memeTitle = document.querySelector('.meme-title')


function updateDetails(url, title,author){
  image.setAttribute('src',url)
  memeTitle.innerHTML = title;
  Memeauthor.innerHTML = `Meme by : ${author}`;
}

function generateMeme(){
  fetch('https://meme-api.com/gimme/wholesomememes')
  .then(response => response.json())
  .then(data =>
    updateDetails(data.url, data.title, data.author )
    )
}

generateMemeBtn.addEventListener('click',generateMeme)

generateMeme()