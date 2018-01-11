/*Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o, 
dan false jika tidak. */

function xo(str) {
    var find_x = str.match(/x/g);
    var find_o = str.match(/o/g);
    if (find_x.length===find_o.length){
        return true;
    }else
        return false;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true