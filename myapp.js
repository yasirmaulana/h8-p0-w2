// APLIKASI UJI PENGETAHUAN TETANG MANGA
// pseudocode aplikasi ini ada di file pseudocode.md 

alert('selamat datang di Know MangaKu. \nKnow MangaKu adalah sebuah portal uji pengetahuan tentang manga.')
var txt;
var nama = prompt('Jika anda ingin mengikuti uji pengetahuan \nsilakan isikan nama kamu: \natau tekan tombol cancel untuk keluar')
var vnama = nama.toLowerCase()
// alert(vnama)
// end
if (vnama ===null || vnama === '') {
  alert('Have a nice day bro...!')
  end
}
else {
  var rule = prompt('Hello ' + vnama + '! sebelum kamu memulai, berikut beberapa aturan dalam Know MangaKu \n1. Jika kamu ingin keluar dari permainan ini tekan tombol cancel. \n2. Untuk menjawab, kamu hanya perlu mengetik karakter A atau B saja. \n3. Ikuti perintah yang diminta. \n4. Jangan menekan tombol ESC \n \n thats it! \n \n are you ready? \n \n ketik Y')
  vrule = rule.toLowerCase()

  if(vrule === 'y' && vrule.length === 1){
    var rule2 = prompt('are you reaaaady \n \n ketik Y?')
    vrule2 = rule2.toLowerCase()

    if(vrule2 === 'y' && vrule2.length === 1){
      var rule3 = prompt('serious... are you reaaaady?')
      vrule3 = rule3.toLowerCase()

      if(vrule === 'y' && vrule.length === 1){
        alert('hahaha... cuma ngetes aturan nomor 3')
      }
      else{
        alert('kamu tidak mengetik Y atau karakter lebih dari 1')
        end
      }


    }
    else{
      alert('kamu tidak mengetik Y atau karakter lebih dari 1')
      end
    }
  }
  else{
    alert('kamu tidak mengetik Y atau karakter lebih dari 1')
    end
  }
}


// memulai
var pilih = prompt('silakan pilih manga yang ingin diuji! \n A. One Piece \n B. Dragon Ball \n \n ketik A atau B')
vpilih = pilih.toLowerCase()
nilai = []
// pilihan One Piece
if(vpilih === 'a' && vpilih.length === 1){

  // pertanyaan ke 1
  var op = prompt('OK, karena kamu memilih manga One Piece, berikut pertanyaan pertama: \n \n siapakah mangaka dari manga One Piece? \nA. Eiichiro Oda \nB. Akira Toriyama \n \n ketik A atau B')
  var vop = op.toLowerCase()
  if(vop === 'a' && vop.length === 1){
    nilai.push(10)
    alert('Good jobs! kamu mendapat point 10 ')
  }
  else if(vop === 'b' && vop.length === 1){
    alert('bad! jawaban kamu salah.')
  }
  else{
    alert('kamu tidak mengetik karakter yang diminta')
    end
  }

  // pertanyaan ke 2
  var op2 = prompt('lanjut ke pertanyaan ke 2 \n \n Dimanakah Eiichiro Oda dilahirkan? \nA. Prefektur Kumamoto, Jepang \nB. Prefektur Aichi, Jepang \n \n ketik A atau B')
  var vop2 = op2.toLowerCase()
  if(vop2 === 'a' && vop2.length === 1){
    nilai.push(10)
    alert('Good jobs! kamu mendapat point 10 lagi')
  }
  else if(vop2 === 'b' && vop2.length === 1){
    alert('poor! jawaban kamu salah lagi.')
  }
  else{
    alert('kamu tidak mengetik karakter yang diminta')
    end
  }

  // pertanyaan ke 3
  var op3 = prompt('lanjut ke pertanyaan ke 3 \n \n Tanggal berapa Eiichiro Oda dilahirkan? \nA. tgl 1 \nB. tgl 5 \n \n ketik A atau B')
  var vop3 = op3.toLowerCase()
  if(vop3 === 'a' && vop3.length === 1){
    nilai.push(10)
    alert('Good jobs! kamu mendapat point 10 lagi')
    console.log(nilai)
  }
  else if(vop3 === 'b' && vop3.length === 1){
    alert('poor! jawaban kamu salah lagi.')
  }
  else{
    alert('kamu tidak mengetik karakter yang diminta')
    end
  }

}


// pilihan Dragon Ball
else if(vpilih === 'b' && vpilih.length === 1){

  // pertanyaan ke 1
  var db = prompt('OK, karena kamu memilih manga Dragon Ball, berikut pertanyaan pertama: \n \n siapakah mangaka dari manga Dragon Ball? \nA. Eiichiro Oda \nB. Akira Toriyama \n \n ketik A atau B')
  var vdb = db.toLowerCase()
  if(vdb === 'b' && vdb.length === 1){
    nilai.push(10)
    alert('Good jobs! kamu mendapat point 10')
  }
    else if(vdb === 'a' && vdb.length === 1){
    alert('bad! jawaban kamu salah.')
  }
  else{
    alert('kamu tidak mengetik karakter yang diminta')
    end
  }

  // pertanyaan ke 2
  var db2 = prompt('lanjut ke pertanyaan ke 2 \n \n Dimanakah Akira Toriyama dilahirkan? \nA. Prefektur Aichi, Jepang \nB. Prefektur Kumamoto, Jepang \n \n ketik A atau B')
  var vdb2 = db2.toLowerCase()
  if(vdb2 === 'a' && vdb2.length === 1){
    nilai.push(10)
    alert('Good jobs! kamu mendapat point 10 lagi')
  }
  else if(vdb2 === 'b' && vdb2.length === 1){
    alert('poor! jawaban kamu salah lagi.')
  }
  else{
    alert('kamu tidak mengetik karakter yang diminta')
    end
  }

  // pertanyaan ke 3
  var db3 = prompt('lanjut ke pertanyaan ke 3 \n \n Tanggal berapa Akira Toriyama dilahirkan? \nA. tgl 5 \nB. tgl 1 \n \n ketik A atau B')
  var vdb3 = db3.toLowerCase()
  if(vdb3 === 'a' && db3.length === 1){
    nilai.push(10)
    alert('Good jobs! kamu mendapat point 10 lagi')
  }
  else if(vdb3 === 'b' && vdb3.length === 1){
    alert('poor! jawaban kamu salah lagi.')
  }
  else{
    alert('kamu tidak mengetik karakter yang diminta')
    end
  }

}

// pilihan yang salah
else{
  alert('kamu tidak mengetik karakter yang diminta')
  end
}

alert('pertanyaan selesai, kita akan lihat nilai jawaban kamu. \n \n catatan: \nPeraturan no 4. Jangan menekan tombol ESC')
alert('nilai kamu adalah....')
alert('adalah....')
alert('jengjreng....')
alert('wait... loading...')
alert('masih loading...')

function cekNilai(nilai){
  var Pnilai = nilai.length
  var total = 0
  for(i=0; i<Pnilai; i++){
    total += nilai[i];
  }
  total = (total/3) * 10
  total = parseInt(total)
  return total
  // console.log(total)
}

// nilai = [10, 10, 10]
var nilaiAkhir = cekNilai(nilai)
// console.log(nilaiAkhir)
alert('SELAMAT NILAI KAMU ADALAH ' + nilaiAkhir)
