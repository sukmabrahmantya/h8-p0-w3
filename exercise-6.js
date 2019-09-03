function angkaPalindrome(num) {
    num++
    while (true){
      var cek = num === Number(num.toString().split('').reverse().join(''))
      if (!cek){
        num++
      } else {
        return num
      }

    }
  }

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
