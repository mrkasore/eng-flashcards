let words = [];
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

console.log(localStorage.getItem("user") && localStorage.getItem("user"));

if(localStorage.getItem("user") && localStorage.getItem("user") != '[]') {
    words = JSON.parse(localStorage.getItem("user"));
}





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

    //localStorage.user = JSON.stringify(words);

    
    // немного позже
    //let user = JSON.parse( localStorage.user );
    //alert( user.name ); // John

    addDomCard(words, words.length-1);

    document.querySelector('.addWord').style.display = 'none';
    document.querySelector('.main_container').style.opacity = 1;

    event.preventDefault();

    localStorage.setItem('user', JSON.stringify(words));



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
    words.splice(parseInt(e.target.parentElement.getAttribute('data')), 1);
    localStorage.setItem('user', JSON.stringify(words));
    e.target.parentElement.remove();
        
    refreshData();
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
    document.querySelector('.addWord').style.display = 'block';
    document.querySelector('.main_container').style.opacity = 0.3;
})

createPage();
