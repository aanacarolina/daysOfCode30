// function reverse(a) {
//     let reversedArray = a.reverse()
//     let reverse = ""
//     for (let i = 0; i < a.length; i++) {
//          reverse += reversedArray[i];

//     }
//     console.log(reverse)
// }

function reverse(a) {
    //console.log(a)
    let reversed = ""
for (let i = a.length-1; i >= 0; i--) { //i = 3; enquanto 3 >= 0, faz o q tiver e ...; i2 
    //console.log(a[i])
            reversed += a[i]+" ";

    }
    console.log(reversed)
}
reverse([1, 2, 3, 5])