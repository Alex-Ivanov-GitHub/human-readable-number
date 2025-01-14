module.exports = function toReadable (number) {
  const Numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
     };
  
  const hundred = 'hundred';  

  function toReadableTo99 (number) {
  	if (number <= 20 || number%10 === 0) {
  		return Numbers[number];
  	}else return `${Numbers[parseInt(number/10) * 10]} ${Numbers[number%10]}`;
  }	

  if (number <= 99) {
    return toReadableTo99(number);
  }else if (number <= 999 && number%100 === 0) {
    return `${Numbers[parseInt(number/100)]} ${hundred}`;
  }else return `${Numbers[parseInt(number/100)]} ${hundred} ${toReadableTo99(number%100)}`;
}
