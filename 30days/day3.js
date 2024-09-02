//odd - always weird 
//num is odd if module is != 0
// even - weird
//num is even if module is == 0
//??? (number % 2 != 0 && number >= 2 && number<= 5) ||
function weirdo(number) {

    if ((number % 2 != 0) //If  is odd, print Weird
        || (number % 2 == 0 && number >= 6 && number <= 20)) {
        //If  is even and in the inclusive range of 6 to 20 , print Weird

        console.log("Weird")
    }
    else if ((number % 2 == 0) || (number % 2 == 0 && number >= 2 && number<= 5) ||  (number % 2 == 0 && number > 20)) {
        //if even 
        //If  is even and in the inclusive range of 2 to 5 , print Not Weird
        //If  is even and greater than , print Not Weird

        console.log("Not Weird")

    }
}

weirdo(3) //weird
weirdo(24) //not weird
// weirdo(20) //not weird
// weirdo(21) //not weird
// weirdo(6) //weird
// weirdo(3) // weird