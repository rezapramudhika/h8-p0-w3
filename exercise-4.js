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

//without regex
function xo(str) {
    var temp = str.split('');
    var count_x = 0;
    var count_o = 0;
    for(var i=0; i<=str.length-1; i++){
        if(str[i]==='x'){
            count_x += 1;
        }else if(str[i]==='o'){
            count_o += 1;
        }
    }
    if(count_x == count_o){
        return true;
    }else{
        return false
    }
    
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true