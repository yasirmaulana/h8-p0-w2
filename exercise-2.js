// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran.
// Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 peran berbeda
// yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi
// variabel tersebut.
//
// Hints
//
//     Variabel tetap di-input secara manual.
//     Variabel nama dan peran dapat diisi apa saja.
//     Nama tidak perlu dicek sama persis seperti contoh input/output
//     Buat If-Else berbeda masing-masing untuk mengecek peran

var nama = prompt('tuliskan Namamu!');
var peran = prompt('tuliskan Perananmu');

if (peran === '') {
  // console.log("Halo " + nama +", Pilih peranmu untuk memulai game!");
  alert("Halo " + nama +", Pilih peranmu untuk memulai game!");
}
else if (peran === 'Ksatria'){
  // console.log("Selamat datang di Dunia Proxytia,"+ nama)
  // console.log("Halo " + peran +" "+nama +", kamu dapat menyerang dengan senjatamu!");
  alert("Selamat datang di Dunia Proxytia,"+ nama)
  alert("Halo " + peran +" "+nama +", kamu dapat menyerang dengan senjatamu!");
}
else if (peran === 'Tabib'){
  // console.log("Selamat datang di Dunia Proxytia,"+ nama)
  // console.log("Halo " + peran +" "+nama +", kamu akan membantu temanmu yang terluka.!");
  alert("Selamat datang di Dunia Proxytia,"+ nama)
  alert("Halo " + peran +" "+nama +", kamu akan membantu temanmu yang terluka.!");
}
else if (peran === 'Penyihir'){
  // console.log("Selamat datang di Dunia Proxytia,"+ nama)
  // console.log("Halo " + peran +" "+nama +", ciptakan keajaiban yang membantu kemenanganmu!");
  alert("Selamat datang di Dunia Proxytia,"+ nama)
  alert("Halo " + peran +" "+nama +", ciptakan keajaiban yang membantu kemenanganmu!");
}
else {

}
