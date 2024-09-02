function processData(input) {
    const splittedInput = input.split('\n') ;
    const shiftedInput = splittedInput.shift()
 
    
 for (let i = 0; i < splittedInput.length; i++) {
    let word = splittedInput[i];
    let odd = "";
    let even = "";
for (let i = 0 ; i < word.length; i++ ){
        if (i % 2  == 0 ){
            even += word[i]
        }else{
            odd += word[i]
        }
        
    } console.log(even, odd) }
} 

processData("1 \nhacker \nrank ")