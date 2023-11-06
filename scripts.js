const words = [];
const container = document.querySelector('.container');

function Word(original, translate) {
    this.original = original;
    this.translate = translate;
}

let sub = new Word('subway', 'метро');
let train = new Word('train', 'поезд');

words.push(sub);
words.push(train);

function addWordToPage() {
    for(let i = 0; i < words.length; i++) {
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
}

function addNewWord() {

}

addWordToPage();