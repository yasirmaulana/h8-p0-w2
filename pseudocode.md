MENAMPILKAN pesan selamat datang<br/>
SIMPAN respon ke variable nama dari user, jika user ingin melanjutkan, jika tidak aplikasi berhenti<br/>
KONVERSI nilai yang diisi user dengan karakter LowerCase<br/>
CEK nilai yang sudah dikonversi apakah user mengisi null atau kosong<br/>
  jika TRUE, maka aplikasi selesai<br/>
  jika FALSE, MENAMPILKAN pesan hello dan menjelaskan aturan mainnya<br/>
      KONVERSI nilai yang diisi user dengan karakter LowerCase<br/>
      CEK nilai yang diisi user<br/>
      MENAMPILKAN alert sebanyak 3 kali untuk mengetes user terkait 'perintah yang diminta'<br/>
      jika user tidak mengikuti 'perintah yang diinta', aplikasi selesai<br/>
MENAMPILKAN pesan memilih manga<br/>
SIMPAN respon yang diisi user<br/>
KONVERSI respon ke karakter LowerCase<br/>
CEK nilai. <br/>
Jika respon memilih one piece dan jumlah karakternya 1<br/>
maka PUSH nilai ke dalam array<br/>
MENAMPILKAN pesan
dst sampai pertanyaan ke 3<br/>
Jika respon memilih dragon ball dan jumlah karakternya 1<br/> makaPUSH nilai ke dalam array<br/>
MENAMPILKAN pesan
dst sampai pertanyaan ke 3<br/>
Jika respon memilih diluar one piece atau dragon ball atau jumlah karakternya lebih dari 1<br/>
maka MENAMPILKAN pesan salah ketik dan aplikasi keluar<br/><br/>

MENAMPILKAN pesan intermezo<br/><br/>

FUNCTION cekNilai(PARAMETER INPUT nilai)<br/>
CEK dan SIMPAN nilai ke variable untuk jumlah karakter<br/>
SIMPAN nilai total<br/>
LOOPING, jika jumlah karakter > 0<br/>
  SIMPAN nilai total yang ditambah dengan nilai index array<br/>
HITUNG nilai (total/3) * 10<br/>  
KONVERSI ke integer untuk nilai total<br/>
RETURN nilai total<br/><br/>

CALL function cekNilai<br/>
SIMPAN nilai hasil function
MENAMPILKAN pesan selamat dan nilai
