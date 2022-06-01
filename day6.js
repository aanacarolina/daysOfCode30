function processData(s) {
    let even = "";
    let odd = "";
   // let answer = `${even} ${odd}`

  
    for (let i = 0; i < s.length; i++) {
      if (i % 2 == 0) {
        even += s[i];
      } else {
        odd += s[i];
      }
    }
    console.log(even, odd);
}

processData("ABCDEF");
