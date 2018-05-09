function lastDigit(str1, str2){
    if(str2 === "0") return 1;
    let lastDigit = parseInt(str1.charAt(str1.length - 1));
    let periodes = {
      0: [0],
      1: [1],
      2: [6, 2, 4, 8],
      3: [1, 3, 9, 7],
      4: [6, 4],
      5: [5],
      6: [6],
      7: [1, 7, 9, 3],
      8: [6, 8, 4, 2],
      9: [1, 9],
    };
    let period = periodes[lastDigit].length;
    return period > 1 ? periodes[lastDigit][stringModulo(str2, period)] : periodes[lastDigit][0];
  }
  
function stringModulo(divident, divisor) {
    let partLength = 10;
    while (divident.length > partLength) {
        let part = divident.substring(0, partLength);
        divident = (part % divisor) +  divident.substring(partLength);          
    }
    return divident % divisor;
}

console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "78787878787826346642299382"));