// function hitungJumlahKata(kalimat) {
//     var pisah = kalimat.split(" ")
//     return pisah.length
//   }

function hitungJumlahKata(kalimat) {
  var result = []
  var temp = ''

  for (var i = 0; i <= kalimat.length; i++){
    if (kalimat[i] === ' ' || i == kalimat.length) {
        result.push(temp)
        temp = ''
      } else {
        temp += kalimat[i]
      }
    }
    return result.length
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5