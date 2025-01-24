const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter something: ', (input) => {
    // input=answer;
    const words =  input.trim().split(/\s+/);

    let max_vowels = -1;
    let max_words =[]
    words.forEach((word)=>{
        let num =  word.toLowerCase().match(/[aeiou]/gi);
        if(num)
            num = num.length;
        else 
            num = 0;
        if(num > max_vowels){
            max_vowels=num ;
            max_words=[word];
        }
        else if(num == max_vowels){
            max_words.push(word)
        }
    })

    console.log(`You entered: ${input}`);
    console.log(`The word with max vowel is ${max_words}`)
    rl.close();
});

// function isvowel(char){
//     if(char ==='a' || char ==='e' || char==='i' || char==='o' ||char==='u'){
//         return true;
//     }
//     return false;
// }
// rl.question('Enter the sentence',(input)=>{
//     let i = 0;
//     let n = input.length;
//     let maxi = -1;
//     // let max_word = ""
//     let curr_word =""
//     let curr_length=0;
//     let arr = []
//     while(i < n){
//         while(i < n && input[i]!==' '){
//             if(isvowel(input[i])){
//                 curr_length++;
//             }
//             curr_word+=input[i];
//             i++;
//         }
//         if(curr_length>maxi){
//             maxi =  curr_length;
//             arr=[curr_word]
//         }
//         else if(curr_length===maxi){
//             arr.push(curr_word);
//         }
//         curr_length=0;
//         curr_word=""
//         i++;
//     }
//     console.log(arr)
//     rl.close();

// })