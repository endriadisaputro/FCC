// CARA PERTAMA
function pairElement(str) {
    const strArr = str.split('');
    const result = [];
    strArr.forEach(el => {
        if(el === 'G'){
            result.push(['G','C']);
        } else if(el === 'C'){
            result.push(['C','G']);
        } else if(el === 'A'){
            result.push(['A','T']);
        } else if(el === 'T'){
            result.push(['T','A'])
        }
    })
    return result;
  }
  
  console.log(pairElement("GCAT"));
  
  //CARA KEDUA
  const pairElement2 = (str) => {
      const pair = {
          G:'C',
          C:'G',
          A:'T',
          T:'A'
        }
        return str.split('').map(el => [el, pair[el]]);
    }
    
  console.log(pairElement2("GCAT"));


/**********
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
***********/
