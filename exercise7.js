function urutkanAbjad(str) {
    // you can only write your code here!
    var hasil = ''
    var arr = str.split('')
    var temp

    //Sorting
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    
    //Hasil
    for(var i=0; i<arr.length; i++){
        hasil+=arr[i]
    }

    return hasil
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'