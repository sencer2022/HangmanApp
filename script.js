const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const message2_el = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again');

const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();


function getRandomWord(){
    const words = ["karanfil", "gül", "papatya"];

    return words[Math.floor(Math.random() * words.length)];
}


function displayWord(){

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter =>`
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    `; //join harften sonraki virgülü kaldırarak string ifadeye çevirir.

    const w = word_el.innerText.replace(/\n/g, '') // Satır atlama işlevi olan \n 'i bulur ve g ile hepsini bulur yerine '' koyduğumuz için yerine bir şey koymaz. Böylelikle innerText'i yanyana yazdırırız.
    if (w === selectedWord){
        popup.style.display = 'flex';
        message_el.innerText = 'Congrats you won!';
    }
}

function updateWrongLetters(){
    wrongLetters_el.innerHTML = `
        ${wrongLetters.length>0?'<h3>Wrong words:</h3>':''}
        ${wrongLetters.map(letter =>`<span>${' '+letter}</span>`)}`;

    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if(index < errorCount){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

    if(wrongLetters.length === items.length){
        popup.style.display = 'flex';
        message_el.innerText = 'Unfortunately you lost :(';
    }
}

function displayMessage() {
    message2_el.classList.add('show');

    setTimeout(function(){
        message2_el.classList.remove('show');
    }, 2000);

}

playAgainBtn.addEventListener('click', function(){

    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();

    popup.style.display = 'none';
});

window.addEventListener('keydown', function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90 || e.key == 'i' || e.key == 'ö' || e.key == 'ç' || e.key == 'ğ' || e.key == 'ş' || e.key == 'ü'){
        //console.log(e.key);
        //console.log(e.keyCode);

        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                displayMessage();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }else{
                displayMessage();
            }
        }
    }
});

displayWord();