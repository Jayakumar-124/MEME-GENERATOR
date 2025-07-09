const generateMemeBtn = document.querySelector(
  ".meme-gentrator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-gentrator img");
const MemeTitle = document.querySelector(".meme-gentrator .meme-title");
const MemeAuthor = document.querySelector(".meme-gentrator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url)
    MemeTitle.innerHTML = title;
    MemeAuthor.innerHTML = `Meme by: ${author}`;
}

const generateMeme = () => {
  fetch(" https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);


generateMeme();