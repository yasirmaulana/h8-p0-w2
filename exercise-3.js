// var hari = prompt('masukan hari! (1-31)');
// if (hari>0 && hari<32){
//   alert('hari yang kamu masukan adalah '+ hari)
// }
// else{
//   alert('hari yang kamu masukan salah! seharusnya antara 1-31');
//   hari = prompt('ulangi memasukan hari, (1-31)');

//   if (hari<0 || hari>31){
//     alert('kamu tuh bener-bener ngeyel, ya sudah lah ngga jadi'); end;
//   }
// }

var bulan = prompt('masukan bulan! (1-12)');
if (bulan>0 && bulan<13){
  alert('bulan yang kau masukan adalah '+ bulan);
}
else{
  alert('bulan yang kamu masukan salah! seharusnya antara 1-12');
  bulan = prompt('ulangi memasukan bulan, (1-12)');

  if(bulan<0 || bulan>12){
    alert('kamu tuh bener-bener ngeyel, ya sudah lah ngga jadi'); end;
  }
}
// alert (bulan);
switch (bulan){
  case 1: bulan = 'Januari'; break;
  case 2: bulan = 'Februari'; break;
  case 3: bulan = 'Maret'; break;
  case 4: bulan = 'April'; break;
  case 5: bulan = 'Mei'; break;
  case 6: bulan = 'Juni'; break;
  case 7: bulan = 'Juli'; break;
  case 8: bulan = 'Agustus'; break;
  case 9: bulan = 'September'; break;
  case 10: bulan = 'Oktober'; break;
  case 11: bulan = 'November'; break;
  case 12: bulan = 'Desember'; break;
}

alert('atau bulan '+ bulan)

// var tahun = prompt('masukan tahun! (1900-2200)');
// if (tahun>=1900 && tahun<=2200){
//   alert('tahun yang kamu masukan adalah '+ tahun)
// }
// else{
//   alert('tahun yang kamu masukan salah! seharusnya antara 1900-2200');
//   tahun = prompt('ulangi memasukan tahun, (1900-2200)');

//   if (tahun<1900 || tahun>2200){
//     alert('kamu tuh bener-bener ngeyel, ya sudah lah ngga jadi'); end;
//   }
// }

// alert('jadi tanggal yang kamu masukan adalah '+ hari + ' ' + tahun)
// console.log('jadi tanggal yang kamu masukan adalah '+ hari + ' ' + tahun)
