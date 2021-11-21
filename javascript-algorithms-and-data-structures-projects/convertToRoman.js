// CARA 1
function convertToRoman(num) {
    let result = '';
    while(num > 0){
        if(num < 4){
            result += 'I';
            num -= 1;
        } else if(num === 4){
            result += 'IV';
            num -= 4;
        } else if(num >= 5 && num < 9){
            result += 'V';
            num -= 5;
        } else if(num === 9){
            result += 'IX';
            num -= 9;
        } else if(num >= 10 && num < 40){
            result += 'X';
            num -= 10;
        } else if(num >= 40 && num < 50){
            result += 'XL';
            num -= 40;
        } else if(num >= 50 && num < 60){
            result += 'L';
            num -= 50;
        } else if(num >= 60 && num < 90){
            result += 'LX';
            num -= 60;
        } else if(num >= 90 && num < 100){
            result += 'XC';
            num -= 90;
        } else if(num >= 100 && num < 400){
            result += 'C';
            num -= 100;
        } else if(num >= 400 && num < 500){
            result += 'CD';
            num -= 400;
        } else if(num >= 500 && num < 600){
            result += 'D';
            num -= 500;
        } else if(num >= 600 && num < 900){
            result += 'DC';
            num -= 600;
        } else if(num >= 900 && num < 1000){
            result += 'CM';
            num -= 900;
        } else if(num >= 1000){
            result += 'M';
            num -= 1000;
        }
    }
  return result;
}
console.log(convertToRoman(3999));

// CARA 2
function convertToRomann(num) {
    const rumusRomawi = {
        1:'I',
        4:'IV',
        5:'V',
        9:'IX',
        10:'X',
        40:'XL',
        50:'L',
        90:'XC',
        100:'C',
        400:'CD',
        500:'D',
        900:'CM',
        1000:'M'
    }

    const keys = Object.keys(rumusRomawi).reverse();
    let result = '';
    keys.forEach((key) => {
        while(key <= num){
            result += rumusRomawi[key];
            num -=key;
        }
    });
    return result;
}

console.log(convertToRomann(3999));
// MMMCMXCIX

/*
   Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

convertToRoman(2) should return the string II.

convertToRoman(3) should return the string III.

convertToRoman(4) should return the string IV.

convertToRoman(5) should return the string V.

convertToRoman(9) should return the string IX.

convertToRoman(12) should return the string XII.

convertToRoman(16) should return the string XVI.

convertToRoman(29) should return the string XXIX.

convertToRoman(44) should return the string XLIV.

convertToRoman(45) should return the string XLV.

convertToRoman(68) should return the string LXVIII

convertToRoman(83) should return the string LXXXIII

convertToRoman(97) should return the string XCVII

convertToRoman(99) should return the string XCIX

convertToRoman(400) should return the string CD

convertToRoman(500) should return the string D

convertToRoman(501) should return the string DI

convertToRoman(649) should return the string DCXLIX

convertToRoman(798) should return the string DCCXCVIII

convertToRoman(891) should return the string DCCCXCI

convertToRoman(1000) should return the string M

convertToRoman(1004) should return the string MIV

convertToRoman(1006) should return the string MVI

convertToRoman(1023) should return the string MXXIII

convertToRoman(2014) should return the string MMXIV

convertToRoman(3999) should return the string MMMCMXCIX
*/
