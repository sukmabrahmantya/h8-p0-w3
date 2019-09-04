function pasanganTerbesar(number) {
  var result = []
  var temp = ''
  var numString = String(number)

  for (var i = 0; i <= numString.length; i++){
    if (temp.length === 2){
      result.push(Number(temp))
      temp = ''
      i -= 2
    } else {
      temp = temp + numString[i]
    }
  }
  result.sort(function(a,b){return b-a});
  return result[0];
}  


  //TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99