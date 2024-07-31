function calculate() {
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  var hasil = document.getElementById("result");
  var angka = document.getElementById("results");
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore);
  if (name1 && name2 != "") {
    angka.innerHTML = loveScore + "%";

    if (loveScore >= 90) {
      hasil.innerHTML =
        " Kamu " + name1 + " dan pasangan mu " + name2 + " couple goals ";
    } else if (loveScore >= 70) {
      hasil.innerHTML =
        " Kamu " + name1 + " dan pasangan mu " + name2 + " cocok banget ";
    } else if (loveScore >= 50) {
      hasil.innerHTML =
        " Kamu " + name1 + " dan pasangan mu " + name2 + " kurang PDKT ";
    } else {
      hasil.innerHTML =
        " Kamu " + name1 + " dan pasangan mu " + name2 + " masih asing ";
    }
  } else {
    hasil.innerHTML = "Masukin nama nya dulu lah cuk !!!";
    angka.innerHTML = "";
  }
}
