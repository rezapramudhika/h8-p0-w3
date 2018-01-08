function perpangkatanDua(str) {
    var num = 1;
    var result ='';

    while (num<str){
        num = num*2;
        result += 'a';
    }
    
    if (num!==str){
        return -1;
    }else{
        return result.length;
    }
    
  } 
  
  // TEST CASES
  console.log(perpangkatanDua(64)); // 6
  console.log(perpangkatanDua(22)); // -1
  console.log(perpangkatanDua(16)); // 4
  console.log(perpangkatanDua(222)); // -1
  console.log(perpangkatanDua(1)); // 0