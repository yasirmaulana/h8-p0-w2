// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!",
// yang kemudian akan ditampilkan di console.
function shoutOut(){
  greeti = "Halo Function!";
  return greeti;
}
console.log(shoutOut()); // Menampilkan "Halo Function!" di console

// ===========================================================================================
// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter
// yang dikirim.
function calculateMultiply(num1,num2){
  hasil = num1 * num2;
  return hasil;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// ===========================================================================================
// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi
// satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address],
// dan saya punya hobby yaitu [hobby]!"
function processSentence(name,age,address,hobby){
  sentence = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby;
  return sentence;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
