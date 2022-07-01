const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
//const wrongLetters_el = document.getElementById('wrong-letters');

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

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
    `;

    const w = word_el.innerText.replace(/\n/g, '') // Satır atlama işlevi olan \n 'i bulur ve g ile hepsini bulur yerine '' koyduğumuz için yerine bir şey koymaz. Böylelikle innerText'i yanyana yazdırırız.
    if (w === selectedWord){
        popup.style.display = 'flex';
        message_el.innerText = 'Congrats you won!'
    }
}

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
                console.log('The letter you enter typed before.');
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                console.log('Hatalı harfleri güncelle.');
            }else{
                console.log('The letter you enter typed before.');
            }
        }
    }
});

displayWord();