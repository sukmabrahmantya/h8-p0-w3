function targetTerdekat(arr) {
    var o = ''
    var x = []
    var distance = []


    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 'x' ){
            x.push(i)
        } else if (arr[i] == 'o'){
            o = o + i
        }   
    }

    for (var i = 0; i < x.length; i++){
        var temp_length = Math.abs(x[i] - o)
        distance.push(temp_length)
    }


    for (var i = 0; i < distance.length; i++){
        var min = distance[0]
        if (distance[i] < min){
            min = distance[i]
        }
    }

    if (x.length == 0){
        return 0
    }
    return min
}

// TEST CASES                0    1    2    3    4    5    6    7
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3

//                            0    1    2    3    4    5    6
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4


//                            0    1    2    3    4    5    6    7
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2