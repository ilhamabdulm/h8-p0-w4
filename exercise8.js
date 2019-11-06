function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var upper = 'ABCDEFHIJKLMNOPQRSTUVWXYZ !@#$%^&*()-_=+?/[]:;'
    var lower = 'abcdefghijklmnopqrstuvwxyz0123456789'
    var result = ''
    
    for(var i=0; i<kalimat.length; i++){
        for(var j=0; j<upper.length; j++){
            if(kalimat[i]===upper[j]){
                result += kalimat[i].toLowerCase()
            }
        }
        for(var k=0; k<lower.length; k++){
            if(kalimat[i]===lower[k]){
                result += kalimat[i].toUpperCase()
            }
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"