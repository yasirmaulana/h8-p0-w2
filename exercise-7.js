// Tugas 1
// Buatlah sebuah pseudocode yang mengambil dua angka, dan menghitung serta menampilkan hasil perkalian dari kedua bilangan tersebut.
// hint: Gunakan kata kunci SIMPAN, HITUNG, dan TULISKAN.

SIMPAN "angka pertama"
SIMPAN "angka kedua"
HITUNG "angka pertama" dikali "angka kedua"
SIMPAN hasil hitungan
TULISKAN hasil hitungan

//========================================================================
// Tugas 2
// Buatlah sebuah pseudocode yang mengambil sebuah kata, dan jika kata yang diambil bertuliskan "Saya Belajar JavaScript!", tampilkan "Pasti Bisa!".
// hint: Gunakan kata kunci SIMPAN, IF, dan TULISKAN.

SIMPAN "kata"
IF "kata" = "Saya Belajar JavaScript"
  maka TULISKAN "Pasti Bisa!"
END IF
//========================================================================
// Tugas 3
// Buatlah sebuah pseudocode yang mengambil sebuah angka. Tampilkan sebuah deret angka yang habis dibagi 3 dan dimulai dari angka 1.
// Deret angka akan berhenti sampai deret angka tersebut mencapai angka yang disimpan sebelumnya.
// hint: Gunakan kata kunci SIMPAN, ULANGI, dan TAMPILKAN.

SIMPAN "BatasAngka"
ULANGI (SIMPAN "angka" = 1,"angka" <= "BatasAngka", "angka"++)
  IF ("angka"/3 = 0)
    maka TAMPILKAN "angka"
