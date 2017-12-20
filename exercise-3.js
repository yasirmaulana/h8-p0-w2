// MENYIMPAN DATA TANGGAL
var hari = prompt('masukan hari! (1-31)');
if (hari>0 && hari<32){
  alert('hari yang kamu masukan adalah '+ hari)
}
else{
  alert('hari yang kamu masukan salah! seharusnya antara 1-31');
  hari = prompt('ulangi memasukan hari, (1-31)');

  if (hari<0 || hari>31){
    alert('kamu tuh bener-bener ngeyel, ya sudah lah ngga jadi'); end;
  }
}

// MENYIMPAN DATA BULAN
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

var bulanInt = parseInt(bulan);
switch (bulanInt){
  case 1: bulanInt = 'Januari'; break;
  case 2: bulanInt = 'Februari'; break;
  case 3: bulanInt = 'Maret'; break;
  case 4: bulanInt = 'April'; break;
  case 5: bulanInt = 'Mei'; break;
  case 6: bulanInt = 'Juni'; break;
  case 7: bulanInt = 'Juli'; break;
  case 8: bulanInt = 'Agustus'; break;
  case 9: bulanInt = 'September'; break;
  case 10: bulanInt = 'Oktober'; break;
  case 11: bulanInt = 'November'; break;
  case 12: bulanInt = 'Desember'; break;
}

// alert('atau bulan '+ bulanInt)

// MENYIMPAN DATA TAHUN
var tahun = prompt('masukan tahun! (1900-2200)');
if (tahun>=1900 && tahun<=2200){
  alert('tahun yang kamu masukan adalah '+ tahun)
}
else{
  alert('tahun yang kamu masukan salah! seharusnya antara 1900-2200');
  tahun = prompt('ulangi memasukan tahun, (1900-2200)');

  if (tahun<1900 || tahun>2200){
    alert('kamu tuh bener-bener ngeyel, ya sudah lah ngga jadi'); end;
  }
}

alert('jadi tanggal yang kamu masukan adalah '+ hari + bulanInt + tahun)
console.log('jadi tanggal yang kamu masukan adalah '+ hari + ' ' + bulanInt + ' ' + tahun)
