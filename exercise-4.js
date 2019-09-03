function dataHandling2(input){
    // SOAL NOMOR 1
    var input
    input.splice(1, 1, "Roman Alamsyah Elsharawy")
    input.splice(2, 1, "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA Internasional Metro" )
    console.log(input)


    // SOAL NOMOR 2
    var bulan = input[3]
    var splitBulan = bulan.split("/"); // split => membuat array [];

    var namaBulan = splitBulan[1]
    switch (splitBulan[1]){
        case "01" :
            console.log('Januari')
            break;
        case "02" :
            console.log('Februari')
            break
        case "03" :
            console.log('Maret')
            break;
        case "04" :
            console.log('April')
            break 
        case "05" :
            console.log('Mei')
            break;
        case "06" :
            console.log('Juni')
            break
        case "07" :
            console.log('Juli')
            break;
        case "08" :
            console.log('Agustus')
            break
        case "09" :
            console.log('September')
            break;
        case "10" :
            console.log('Oktober')
            break
        case "11" :
            console.log('November')
            break;
        case "12" :
            console.log('Desember')
            break
        default :
            console.log('Bulan tidak tersedia')
    }
    

    // SOAL NOMOR 3
    var tahunSort = splitBulan.sort(function(a, b){return b-a})
    console.log(tahunSort)
    

    // SOAL NOMOR 4
    var spliteBulanStrip = bulan.split("/")
    var joinBulanStrip = spliteBulanStrip.join("-")
    console.log(joinBulanStrip)


    // SOAL NOMOR 5
    var namaRohan = input[1]
    console.log(namaRohan.slice(0, 14))
    
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */