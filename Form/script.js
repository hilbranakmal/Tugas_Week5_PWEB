document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value.trim();
  let nim = document.getElementById("nim").value.trim();
  let matkul = document.getElementById("matkul").value;
  let dosen = document.getElementById("dosen").value;

  if (nama === "" || nim === "" || matkul === "" || dosen === "") {
    alert("Semua field harus diisi!");
  } else {
    alert(
      "Registrasi berhasil!\n" +
      "Nama: " + nama + "\n" +
      "NIM: " + nim + "\n" +
      "Mata Kuliah: " + matkul + "\n" +
      "Dosen: " + dosen
    );
  }
});
