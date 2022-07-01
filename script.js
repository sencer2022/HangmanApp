const word_el = document.getElementById('word');

const correctLetters = ['g','ü','l'];
const wrongLetters = [];

function getRandomWord(){
    const words = ["karanfil", "gül", "papatya"];

    return words[Math.floor(Math.random() * words.length)];
}


function displayWord(){
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter =>`
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    `;

    const w = word_el.innerText.replace(/\n/g, '') // Satır atlama işlevi olan \n 'i bulur ve g ile hepsini bulur yerine '' koyduğumuz için yerine bir şey koymaz. Böylelikle innerText'i yanyana yazdırırız.
    if (w === selectedWord){
        console.log("Correct!");
    }
}

displayWord();