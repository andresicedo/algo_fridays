words = ["elephant", "cat", "penguin", "bird", "dog", "rabbit", "lion", "parrot"];
newWords = [];
//using the for each method, for each word, check if the word incudes the letter "e"
//if the word contains the letter "e", push the word to the new words function
words.forEach(word => {
    if(word.toLowerCase().includes("e")) {
        newWords.push(word);
    }
    return newWords;
});

console.log(newWords);//[ 'elephant', 'penguin' ]