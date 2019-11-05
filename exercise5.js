function ubahHuruf(kata) {
    // you can only write your code here!
    var check = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''

    for(var i=0; i<kata.length; i++){
        for(var j=0; j<check.length; j++){
            if(kata[i]=='z'){
                result+=check[0]
                break
            }else if(kata[i]==check[j]){
                result+=check[j+1]
            }
        }
    }

    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wowz')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu