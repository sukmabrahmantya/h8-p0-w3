//input "hello world!"
//output
// "!dlrow olleh"

function balikString(string) {
    var string
    var tampung = ''
    for (var i = 0; i < string.length; i++){
        tampung = string[i] + tampung
    }
    return tampung
}

console.log(balikString('hello world!'))
