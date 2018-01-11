/*Problem
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang 
paling besar diantara yang lainnya.*/

function pasanganTerbesar(num) {
    var numToString = ''+num;
    var pasanganAngka = 0;
    var array = [];
    
    for (var i=0; i<=numToString.length-1; i++){
        pasanganAngka = numToString[i]+numToString[i+1];
        array [i] = parseInt(pasanganAngka);
    }

    array.sort(function(value1, value2) { return value1 < value2 });

    return array[0];
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99