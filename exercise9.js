function checkAB(str) {
    // you can only write your code here!
    var hasil = false
    var checkA = 0
    var checkB = 0

    for(var i=0; i<str.length; i++){
        var temp = 0
        if(str[i]==='a'){
            checkA=i;
        }
        if(str[i]==='b'){
            checkB=i;
        }
        // console.log(checkA, checkB)
        if(checkA>checkB){
            temp = checkA-checkB
        }else{
            temp = checkB-checkA
        }
        if(temp>3){
            hasil = true
            if((checkA==0 || checkB==0)){
                continue
            }else{
                break
            }
        }
    }
    if(checkA==0 || checkB==0){
        hasil = false
    }
    return hasil
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  console.log(checkAB('abjksiabh')); // true