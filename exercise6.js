function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var result = 0
    var temp = []
    for(var i=0; i<=angka; i++){
        for(var j=0; j<=angka; j++){
            if(i*j == angka){
                temp.push(String(i)+String(j))
            }
        }
    }
    temp.sort(function(val1, val2){return val1-val2});
    result = temp[0].length;
    return result
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2