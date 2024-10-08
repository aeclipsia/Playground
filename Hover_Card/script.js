const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
    const word = document.createElement("span");

    word.innerHTML = `${text}`;

    word.classList.add("card-subtitle-word");

    word.style.transitionDelay = `${index * 40}ms`

    return word;
}

const addWord = (text,index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("Libero sint, facere excepturi, ratione fugiat ab eveniet tempore natus magni eum dolorum esse necessitatibus enim corrupti aspernatur praesentium facilis. Ex, hic?");