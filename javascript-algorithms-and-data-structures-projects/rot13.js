function rot13(str) {
    const abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for(let i = 0; i < str.length; i++ ){
        if(abjad.indexOf(str[i]) === -1){
            result += str[i];
        } else{
            let indexAwal = abjad.indexOf(str[i]);
            let indexAkhir = (indexAwal + 13) % 26;
            result += abjad[indexAkhir];
        }
    }

    return result;
}

console.log(rot13("SERR PBQR PNZC!?"));

/*
  Caesars Cipher
  https://en.wikipedia.org/wiki/ROT13
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

rot13("SERR YBIR?") should decode to the string FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/
