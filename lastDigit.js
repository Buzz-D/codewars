function lastDigit(str1, str2){
    let lastDigit = parseInt(str1.charAt(str1.length - 1));
    let periodes = {
      0: [0],
      1: [1],
      2: [2, 4, 8, 6],
      3: [3, 9, 7, 1],
      4: [4, 6],
      5: [5],
      6: [6],
      7: [7, 9, 3, 1],
      8: [8, 4, 2, 6],
      9: [9, 1],
    };
    let period = periodes[lastDigit].length;
    let mod = parseInt(str2) % period;
    return periodes[lastDigit][mod + 1];
  }
  
  console.log(lastDigit("4", "1"));