function processArray(arr) {
    return arr.map(num => {
      if (num % 2 === 0) {
        return num ** 2;
      } else {
        return num * 3;
      }
    });
  }
  
  function formatArrayStrings(stringArr, numArr) {
    return stringArr.map((str, index) => {
      if (numArr[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
