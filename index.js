alert(`Selamat datang di permainan tebak angka!!! Silahkan masukan angka
dari 1-3, tidak boleh kurang dari angka 1 atau lebih dari angka 3 ya :)
Permainan ini hanya berjumlah 5 rounde saja.
Silahkan di coba!!!

Goodluck :)`);

var skorP1 = 0;
var skorP2 = 0;
var ronde = 1;
var stop = true;

while (stop) {
    var p1 = parseInt(prompt("Pemain 1 anda harus memasukan angka 1-3"));
    var p2 = parseInt(prompt("Pemain 2 anda harus memasukan angka 1-3"));
  
    var random = getRandom();
    var ulangi = validasi(p1, p2);
    if (!ulangi) {
      stop = window.confirm("try again ?");
    } else {
      if (p1 !== random && p2 !== random) {
        alert("sorry, tebakannya tidak ada yang benar :)");
      } else {
        if (p1 === random) {
          alert("Pemain 1 Menang, Anda hebat :)");
          skorP1++;
        }
        if (p2 === random) {
          alert("Pemain 2 Menang, Anda hebat :)");
          skorP2++;
        }
      }
  
      alert(`
      Nilai tebakannya adalah : ${random}
      
      - Pemain 1 skornya = ${skorP1}
      - Pemain 2 skornya = ${skorP2}`);
  
      ronde++;
      if (ronde <= 5) {
        stop = window.confirm("Ronde " + ronde + "?");
      } else {
        if (skorP1 > skorP2) {
          alert("Selamat Pemain 1 menang, Anda Hebat :)");
          stop = false;
        } else if (skorP1 < skorP2) {
          alert("Selamat Pemain 2 menang, Anda Hebat :)");
          stop = false;
        } else {
          alert(`Pertarungan yang sangat seru!!!`);
          ronde = 1;
          skorP1 = 0;
          skorP2 = 0;
          stop = window.confirm("Doyou want Play again?");
        }
      }
    }
  }
  
  function validasi(pemain1, pemain2) {
    if (pemain1 === pemain2) {
      alert("tebakan tidak boleh sama");
      return false;
    }
  
    if (pemain1 < 1 || pemain2 < 1) {
      alert("tebakan tidak boleh lebih kecil dari 1");
      return false;
    }
  
    if (pemain1 > 3 || pemain2 > 3) {
      alert("tebakan tidak boleh lebih besar dari 3");
      return false;
    }
  
    if (isNaN(pemain1) || isNaN(pemain2)) {
      alert("salah satu pemain belum menebak");
      return false;
    }
  
    return true;
}
  
  function getRandom() {
    const range = [1, 2, 3];
    var isNotRandom = true;
    while (isNotRandom) {
      var random = Math.floor(Math.random() * 10);
      var ketemu = range.find((r) => r === random);
      if (ketemu) {
        isNotRandom = false;
        return random;
      }
    }
}
  
  