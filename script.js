const button=document.querySelector('.button');
const title=document.querySelector('.title');
const memeImage=document.querySelector('.memeImage')
const author=document.querySelector('.author');

const updatememe=(url,title,author)=>{
    memeImage.setAttribute("src",url);
    title.innerHTML=title;
    author.innerHTML=author;

}

const generator=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(response=>response.json())
    .then(data=>{
        updatememe(data.url,data.title,data.author)
    })
}

button.addEventListener("click",generator);
generator();