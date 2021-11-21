function convertHTML(str) {
    const strArr = str.split('');
    const hasil = strArr.map(huruf => {
        switch(huruf){
            case '&' : return '&amp;'
            case '<' : return '&lt;'
            case '>' : return '&gt;'
            case '"' : return '&quot;'
            case "'" : return '&apos;'
            default : return huruf
        }

    })
    return hasil.join('');
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Schindler's List"));
  console.log(convertHTML("Dolce <> Gabbana"));



/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List") should return the string Schindler&apos;s List.

convertHTML("<>") should return the string &lt;&gt;.

convertHTML("abc") should return the string abc.
*/