function palindrome(kata) {
    // var cek = /[^A-Za-z0-9]/g
    // kata = kata.toLowerCase().replace(cek, '')

    var leng = kata.length

    for (var i = 0; i < leng/2; i ++){
      if (kata[i] !== kata[leng - 1 - i]){
        return false
      }
      return true
    }
    
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log(palindrome('81'))