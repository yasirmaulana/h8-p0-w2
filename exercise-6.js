console.log('LOOPING PERTAMA - CEK GANJIL/GENAP');
for(var angka = 1; angka <= 100; angka++) {
  if(angka%2 == 0){
    console.log(angka +' GENAP');
  }
  else{
    console.log(angka +' GANJIL');
  }
}

// console.log('LOOPING KEDUA - PENAMBAHAN 2 CEK KELIPATAN 3');
// var count = 2;
// for(var angka2 = 1; angka2 < 100; angka2++) {
//   angka2 += count;
//   console.log(angka2)
// }

console.log('LOOPING KEDUA - PENAMBAHAN 2 CEK KELIPATAN 3');
var count = 2;
for(var angka2 = 1; angka2 < 100; angka2++) {
  angka2 += count;
  if((angka2/3) !== 0){
    console.log(angka2 + ' KELIPATAN 3')
  }
  else{}
}

console.log('LOOPING KETIGA - PENAMBAHAN 5 CEK KELIPATAN 6');
var count = 5;
for(var angka3 = 1; angka3 < 100; angka3++) {
  angka3 += count;
  if((angka3/6) !== 0){
    console.log(angka3 + ' KELIPATAN 6')
  }
  else{}
}

console.log('LOOPING KEEMPAT - PENAMBAHAN 9 CEK KELIPATAN 10');
var count = 9;
for(var angka4 = 1; angka4 < 100; angka4++) {
  angka4 += count;
  if((angka4/10) !== 0){
    console.log(angka4 + ' KELIPATAN 10')
  }
  else{}
}
