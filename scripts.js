const words = [];
const container = document.querySelector('.container');
const addWordBtn = document.querySelector('#add-word-btn');
const removeBtns = document.querySelectorAll('.remove-btn');

const addWordSection = document.querySelector('.addWord');

function Word(original, translate) {
    this.original = original;
    this.translate = translate;
}

let sub = new Word('subway', 'метро');
let train = new Word('train', 'поезд');
let cat = new Word('cat', 'кот');

words.push(sub);
words.push(train);
words.push(cat);

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

    document.querySelector('.open_form').style.display = 'block';
    document.querySelector('.addWord').style.display = 'none';

    event.preventDefault();

}

//Take control of Dom after creating a new card
function addDomCard(words, i) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    //Add data attribute
    card.setAttribute('data', i);

    let original = document.createElement('div');
    original.innerText = words[i].original;

    let translate = document.createElement('div');
    translate.innerHTML = words[i].translate;

    let remove_btn = document.createElement('button');
    remove_btn.setAttribute('class', 'remove-btn');
    remove_btn.innerHTML = 'Remove';



    remove_btn.addEventListener('click', removeCard);
    

    card.append(original);
    card.append(translate);
    card.append(remove_btn);
    container.append(card);
    
}

function removeCard(e) {
    console.log(e.target);

    console.log(parseInt(e.target.parentNode.getAttribute('data')));
    words.splice(parseInt(e.target.parentElement.getAttribute('data')), 1);
    e.target.parentElement.remove();
        
    refreshData();
    console.log(words);
}


function refreshData() {
    let allCards = document.querySelectorAll('.card');
    for (let i = 0; i < words.length; i++) {
        allCards[i].removeAttribute('data');
        allCards[i].setAttribute('data', i);
    }
}

addWordBtn.addEventListener('click', addNewWord);

document.querySelector('.addWord').style.display = 'none';
document.querySelector('.open_form').addEventListener('click', function(e) {
    document.querySelector('.open_form').style.display = 'none';
    document.querySelector('.addWord').style.display = 'block';
})

createPage();
