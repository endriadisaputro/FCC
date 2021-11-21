function fearNotLetter(str) {
    const source = str.split('').map(angka => angka.charCodeAt(0));
    const compare = [];
    const hurufAwal = str.charCodeAt(0);
    const hurufAkhir = str.charCodeAt(str.length -1);
    
    for(let i = hurufAwal; i <= hurufAkhir; i++){
        compare.push(i);
    }

    const hasil = compare.filter(el => !source.includes(el))[0];
    return hasil ? String.fromCharCode(hasil) : undefined;
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("abcde"));





/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/