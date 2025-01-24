const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Enter Sentence',(input)=>{
    const words = input.split(/\s+/);
    let max_words = [];
    let max_length = 0;

    words.forEach(word => {
        if(word.length>max_length){
            max_length=word.length
            max_words=[word]
        }
        else if(word.length===max_length){
            max_words.push(word)
        }
    });

    console.log('Input Sentence\n',input);
    console.log('Answer\n',max_words);
    rl.close();
})