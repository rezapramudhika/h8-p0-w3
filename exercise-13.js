function targetTerdekat(arr) {
    var a = 'o';
    var b = 'x';
    var index_O = 0;
    var index_X = 0;

    for(i=0; i<=arr.length-1; i++){
        if(arr[i]==a){
            index_O = i;
            console.log('dump A = '+index_O);
        }else if(arr[i]==b){
            index_X = i;
            console.log('dump B = '+index_X);
        }
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2


var numbers= ["2", "3", "5","7","1","2","3","4","8"];
var x ="5";
var y ="8";
var firstIndex = numbers.indexOf(x);

var minD = numbers.length;

var x= numbers.forEach(function(item,index){
    if((item == x) || (item == y)){
    if((index != firstIndex) && (index-firstIndex < minD)){
        minD = index-firstIndex;
        firstIndex = index;
    }else{
        firstIndex = index;
    }
 }
});
alert(minD);

 /**FAIL**/