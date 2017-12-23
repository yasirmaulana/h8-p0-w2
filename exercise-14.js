function dataHandling2(input){

  // constraint 1
  var nama = input[1] = 'Roman Alamsyah Elsharawy'
  var prov = input[2] = 'Provinsi Bandar Lampung'
  var arry = input.pop(input.splice(1, 2, nama, prov))
  input.push('Pria', 'SMA Internasional Metro')
  console.log(input)

  // constraint 2
  var vtgl = input[3]
  var vtgl2 = vtgl.split('/')
  var vtgl3 = Number(vtgl2[1])
  // console.log(vtgl3)
  switch (vtgl3){
    case 1 : vtgl3 = 'Januari'; break;
    case 2 : vtgl3 = 'Februari'; break;
    case 3 : vtgl3 = 'Maret'; break;
    case 4 : vtgl3 = 'April'; break;
    case 5 : vtgl3 = 'Mei'; break;
    case 6 : vtgl3 = 'Juni'; break;
    case 7 : vtgl3 = 'Juli'; break;
    case 8 : vtgl3 = 'Agustus'; break;
    case 9 : vtgl3 = 'September'; break;
    case 10 : vtgl3 = 'Oktober'; break;
    case 11 : vtgl3 = 'November'; break;
    case 12 : vtgl3 = 'Desember'; break;
  }
  console.log(vtgl3)

  // constraint 3
  var vtgl4 = Number(vtgl2[0])
  var vtgl5 = Number(vtgl2[1])
  var vtgl6 = Number(vtgl2[2])
  var vtgl7 = []
  vtgl7.push(vtgl6, vtgl4, vtgl5)
  console.log(vtgl7)

  // constraint 4
  var vtgl8 = vtgl2.join('-')
  console.log(vtgl8)

  // constraint 5
  var jmlChar = input[1]
  // console.log(jmlChar.length)
  console.log(jmlChar.slice(0,14))

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
