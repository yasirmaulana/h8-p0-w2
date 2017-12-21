// Tugas 1
// SIMPAN 'nama'
// SIMPAN 'angka pembilang'
// SIMPAN 'angka penyebut'
// HITUNG 'hasil bagi' dari 'angka pembilang' dibagi 'angka penyebut'
// TULISKAN "Halo 'nama', 'angka pembilang' dibagi 'angka penyebut' adalah sama dengan 'hasil bagi'
var nama = 'yasir'
var angkaPembilang = 10
var angkaPenyebut = 2

hasilBagi = angkaPembilang/angkaPenyebut
console.log('Halo ' + nama + ', ' + angkaPembilang + ' dibagi ' + angkaPenyebut + ' adalah sama dengan ' + hasilBagi)

// ================================================================================
// Tugas 2
// SIMPAN 'alas' dari segitiga
// SIMPAN 'tinggi' dari segitiga
// HITUNG 'luas segitiga' dari 'alas' dikali 'tinggi' dibagi 2
// TULISKAN "Luas Segitiga: 'luas segitiga'"
var alas = 5
var tinggi = 5

luasSegitiga = (alas * tinggi)/2
console.log('Luas Segitiga: ' + luasSegitiga)

// ================================================================================
// Tugas 3
// MASUKKAN sebuah tahun pada `tahun`
// IF `tahun` habis dibagi 4 THEN:
//     IF `tahun` tidak habis dibagi 100 THEN:
//         TULISKAN "`tahun` adalah tahun kabisat"
//     ELSE:
//         IF `tahun` habis dibagi 400 THEN:
//             TULISKAN "`tahun` adalah tahun kabisat"
//         ELSE:
//             TULISKAN "`tahun` adalah bukan tahun kabisat"
//         ENDIF
//     ENDIF
// ELSE:
//     TULISKAN "`tahun` adalah bukan tahun kabisat"
// ENDIF
var tahun = prompt('masukan tahun!')
tahun = Number(tahun)

if (tahun%4 === 0){
  if(tahun%100 !== 0){
    console.log(tahun + ' adalah tahun kabisat')
  }
  else{
    if (tahun%400 ===0){
          console.log(tahun + ' adalah tahun kabisat')
    }
    else{
        console.log(tahun + ' adalah bukan tahun kabisat')
    }
  }
}
else {
  console.log(tahun + ' adalah bukan tahun kabisat')
}
