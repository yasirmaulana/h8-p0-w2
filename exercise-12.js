// SOAL
// Buatlah sebuah fungsi dengan nama balikString.
// Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
//
// Hints
// Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array yang akan memberikan panjang
// dari array-nya. Ingat, indeks sebuah array pada JavaScript dimulai dari 0. Untuk tugas ini, kamu wajib menggunakan
// looping dan dilarang menggunakan sintaks .reverse!

// simpan variable makanan array
// konversi ke string dan simpan ke variable argumen
// kirim nilai argumen ke fungsi blaikString
// mencari length argumen
// ambil length argumen -1 dengan looping dan simpan di vArgumen
// cetak dan kembalikan nilai vArgumen
function balikString(argumen){
    var batas = argumen.length
    var vArgumen = ''
    for(var i=1; i<=batas; i++){
      vArgumen = vArgumen + argumen[batas-i]
    }
    vArgumen = console.log(vArgumen)
    return vArgumen
}

var makanans = ['i am', 'student', 'at hacktiv8'];
argumen = makanans.join(' ');
balikString(argumen)
