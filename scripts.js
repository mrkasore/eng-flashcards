const words = [];
const container = document.querySelector('.container');
const addWordBtn = document.querySelector('#add-word-btn');

function Word(original, translate) {
    this.original = original;
    this.translate = translate;
}

let sub = new Word('subway', 'метро');
let train = new Word('train', 'поезд');

words.push(sub);
words.push(train);

//Create page from start
function createPage() {
    for(let i = 0; i < words.length; i++) {
        addDomCard(words, i);
    }
}


//For button form. Add new word
function addNewWord() {
    let original_word = document.querySelector('#original-word').value;
    let translate_word = document.querySelector('#translate-word').value;

    let newWord = new Word(original_word, translate_word);
    words.push(newWord);

    addDomCard(words, words.length-1);

    event.preventDefault();

}

//Take control of Dom after creating a new card
function addDomCard(words, i) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let original = document.createElement('div');
    original.innerText = words[i].original;

    let translate = document.createElement('div');
    translate.innerHTML = words[i].translate;

    card.append(original);
    card.append(translate);
    container.append(card);
}

addWordBtn.addEventListener('click', addNewWord);

createPage();
