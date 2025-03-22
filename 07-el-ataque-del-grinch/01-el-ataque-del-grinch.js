
function fixPackages(packages) {
    let newString = packages;
    let firstEndParenthesis = newString.indexOf(')');
    
    while (firstEndParenthesis != -1) {
  
      const openingParenthesis = newString.lastIndexOf('(', firstEndParenthesis);
      const firstSlice = newString.slice(0, openingParenthesis);
      const lastSlice = newString.slice (firstEndParenthesis + 1);
      const toReverse = newString.slice(openingParenthesis + 1, firstEndParenthesis);
      const midleSlice =  toReverse.split('').reverse().join('');
      newString = firstSlice + midleSlice + lastSlice;
      firstEndParenthesis = newString.indexOf(')');
  
    }
      return newString
  }