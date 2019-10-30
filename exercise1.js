function angkaPrima(angka) {
    // you can only write your code here!
    bilanganPrima = true
    for(var i=2; i<angka; i++){
        console.log(angka%i)
        if(angka%i===0){
            bilanganPrima=false
            break
        }
    }
    if(angka<2){
        bilanganPrima=false
    }
    return bilanganPrima
  }
  
  // TEST CASES
  console.log(angkaPrima(2)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false