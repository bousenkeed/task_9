const input = document.querySelector('.input');
const analysisButton = document.querySelector('.analysis-button');
const result = document.querySelector('.result');
const words = document.getElementById('words');
const firstTenWords = document.getElementById('firstTenWords');
const sentence = document.getElementById('sentence');
const deleteBtn = document.querySelector('.delete-button');

analysisButton.addEventListener('click', () => {
    const inputValue = input.value;
    const wordsArr = inputValue.split(' ');
    const sentencesArr = inputValue.split('.');

    // Первое предложение из текста
    let firstSentence = sentencesArr[0];
    if (!(firstSentence)) {
        firstSentence = '';
    } else {
        firstSentence = `${firstSentence}.`;
    }

    if (firstSentence) {
        //счетчик количества слов
        let wordCount = 0;
        for (let word of wordsArr) {
            if (word) {
                wordCount += 1;
            }
        }

        // Первые 10 слов
        let tenWords = wordsArr.slice(0, 10);
        const tenWordString = tenWords.join(' ');

        words.textContent = `Общее количество слов в тексте: ${wordCount}`;
        firstTenWords.textContent = `Первые 10 слов: ${tenWordString}`;
        sentence.textContent = `Первое предложение в тексте: ${firstSentence}`;
    } else {
        alert('Введите текст...');
    }
})

deleteBtn.addEventListener('click', () => {
    input.value = '';
    words.textContent = '';
    firstTenWords.textContent = '';
    sentence.textContent = '';
})