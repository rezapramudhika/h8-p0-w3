/*Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array 
yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' 
dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', '', 'o', '', '', 'x'], 
maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, 
function akan me-return nilai 0. */

function targetTerdekat(arr) {
    var o = 'o';
    var x = 'x';
    var index_o = arr.indexOf('o');
    var temp = 0;
    var temp2 = 0;
    var pertambahanKeKanan;
    var pertambahanKeKiri;
    var result;

    for(i=index_o; i<=arr.length-1; i++){
        if(arr[i]==x){
            if (temp == 0){
                temp = i;
                pertambahanKeKanan = (index_o - temp);  
            }
        }
    }
    
    for(i=index_o; i>=0; i--){     
        if(arr[i]==x){
            if (temp2 == 0){
                temp2 = i;
                pertambahanKeKiri = (index_o - temp2);  
            }
        }
    }

    if (pertambahanKeKiri < pertambahanKeKanan){
        result = pertambahanKeKiri
    }else{
        result = pertambahanKeKanan
    }
    
    if (pertambahanKeKanan === undefined){
        result = pertambahanKeKiri
    }

    if (pertambahanKeKanan === undefined && pertambahanKeKiri === undefined){
        result = 0;
    }

    return Math.abs(result);
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2