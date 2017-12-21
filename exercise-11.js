var nama = prompt('tuliskan Namamu!')
var peran = prompt('tuliskan Perananmu')
var tahunLahir = prompt('tuliskan Tahun Lahirmu!')
tahunLahir = Number(tahunLahir)

var umurSekarang = 2017 - tahunLahir
var playerHealth = tahunLahir * Math.random()
var monsterHealth = tahunLahir * Math.random()
var kodeMonster = Math.floor(Math.pow(100, Math.random()))

if (peran === '') {
   // console.log("Halo " + nama +", Pilih peranmu untuk memulai game!");
     alert("Halo " + nama +", Pilih peranmu untuk memulai game!")
}
else if (peran === 'Ksatria'){
  // console.log("Selamat datang di Dunia Proxytia,"+ nama)
  // console.log("Halo " + peran +" "+nama +", kamu dapat menyerang dengan senjatamu!");
    alert("Halo " + peran +" "+nama +", kamu dapat menyerang dengan senjatamu!")
    alert("Selamat datang di Dunia Proxytia,"+ nama)
}
else if (peran === 'Tabib'){
  // console.log("Selamat datang di Dunia Proxytia,"+ nama)
  // console.log("Halo " + peran +" "+nama +", kamu akan membantu temanmu yang terluka.!");
    alert("Selamat datang di Dunia Proxytia,"+ nama)
    alert("Halo " + peran +" "+nama +", kamu akan membantu temanmu yang terluka.!")
}
else if (peran === 'Penyihir'){
  // console.log("Selamat datang di Dunia Proxytia,"+ nama)
  // console.log("Halo " + peran +" "+nama +", ciptakan keajaiban yang membantu kemenanganmu!");
    alert("Selamat datang di Dunia Proxytia,"+ nama)
    alert("Halo " + peran +" "+nama +", ciptakan keajaiban yang membantu kemenanganmu!")
}
else {

}

if (nama === ''){
  peran = 'kacung'
}
else {
}

for(var indeks=1; indeks<=tahunLahir; indeks++){
  if(umurSekarang%indeks === 0){
    console.log(peran + ' ' + nama + ' menyerang monster!')
    monsterHealth = monsterHealth - umurSekarang
  }
  else if(kodeMonster%indeks === 0){
    console.log('monster menyerang ' + peran + ' ' + nama + '!')
    playerHealth = playerHealth - kodeMonster
  }
  else if(umurSekarang%indeks === 0 && kodeMonster%indeks === 0){
    console.log('Health keduanya bertambah')
    playerHealth = playerHealth + kodeMonster
    monsterHealth = monsterHealth + umurSekarang
  }
  else{

  }
}

if (playerHealth > monsterHealth){
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
}
else{
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
}
