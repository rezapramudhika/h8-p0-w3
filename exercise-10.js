function angkaPalindrome(num) {
    var numToString = num.toString();
    var reverseNum ='';
    for(var i=numToString.length-1; i>=0; i--){
        reverseNum += parseInt(numToString[i]);
    }

    var hell = Number(reverseNum);

    if (num != hell){
        hell = false;
    }else if (num==hell){
        hell = hell+1;
    }

    return hell;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  /**FAIL**/