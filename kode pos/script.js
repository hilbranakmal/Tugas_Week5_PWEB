// Data Kode Pos (contoh sebagian dari Surabaya)
const dataKodePos = [
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60111", info: "Kepuh, Kecamatan Sukolilo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60112", info: "Mulyorejo, Kecamatan Mulyorejo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60113", info: "Dukuh Sutorejo, Kecamatan Mulyorejo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60114", info: "Kalisari, Kecamatan Mulyorejo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60115", info: "Kejawan Putih, Kecamatan Mulyorejo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60116", info: "Gebang Putih, Kecamatan Sukolilo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60117", info: "Medokan Semampir, Kecamatan Sukolilo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60118", info: "Keputih, Kecamatan Sukolilo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60119", info: "Nginden Jangkungan, Kecamatan Sukolilo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60121", info: "Menur Pumpungan, Kecamatan Sukolilo, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60122", info: "Pucangsewu, Kecamatan Gubeng, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60123", info: "Airlangga, Kecamatan Gubeng, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60124", info: "Kertajaya, Kecamatan Gubeng, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60125", info: "Baratajaya, Kecamatan Gubeng, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60126", info: "Mojolangu, Kecamatan Gubeng, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60127", info: "Pucang Anom, Kecamatan Gubeng, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60128", info: "Kedung Cowek, Kecamatan Bulak, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60129", info: "Tambak Wedi, Kecamatan Kenjeran, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60131", info: "Bulak Banteng, Kecamatan Kenjeran, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60132", info: "Sidotopo Wetan, Kecamatan Kenjeran, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60133", info: "Tanah Kali Kedinding, Kecamatan Kenjeran, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60134", info: "Pacar Keling, Kecamatan Tambaksari, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60135", info: "Ploso, Kecamatan Tambaksari, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60136", info: "Kapasmadya, Kecamatan Tambaksari, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60137", info: "Rangkah, Kecamatan Tambaksari, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60138", info: "Tambakrejo, Kecamatan Tambaksari, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60139", info: "Ngaglik, Kecamatan Tambaksari, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60141", info: "Dukuh Setro, Kecamatan Tambaksari, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60142", info: "Simokerto, Kecamatan Simokerto, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60143", info: "Sidodadi, Kecamatan Simokerto, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60144", info: "Ampel, Kecamatan Semampir, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60145", info: "Pegirian, Kecamatan Semampir, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60146", info: "Wonokusumo, Kecamatan Semampir, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60147", info: "Ujung, Kecamatan Semampir, Surabaya" },
  { provinsi: "Jawa Timur", kota: "Surabaya", kode: "60148", info: "Bongkaran, Kecamatan Pabean Cantikan, Surabaya" }
];

// Event listener form
document.getElementById("kodeposForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let provinsi = document.getElementById("provinsi").value;
  let kota = document.getElementById("kota").value;
  let kode = document.getElementById("kodepos").value.trim();

  let hasilDiv = document.getElementById("hasil");

  if (provinsi === "" || kota === "" || kode === "") {
    alert("Semua field harus diisi!");
    return;
  }

  // Cari data
  let hasilCari = dataKodePos.find(item =>
    item.provinsi === provinsi &&
    item.kota === kota &&
    item.kode === kode
  );

  if (hasilCari) {
    hasilDiv.innerHTML = `
      <h3>Hasil Pencarian</h3>
      <p><strong>Kode Pos:</strong> ${hasilCari.kode}</p>
      <p><strong>Provinsi:</strong> ${hasilCari.provinsi}</p>
      <p><strong>Kota/Kabupaten:</strong> ${hasilCari.kota}</p>
      <p><strong>Informasi:</strong> ${hasilCari.info}</p>
    `;
    hasilDiv.style.background = "#d4edda";
    hasilDiv.style.color = "#155724";
  } else {
    hasilDiv.innerHTML = `<p style="color:red;">Data tidak ditemukan, periksa kembali input Anda.</p>`;
    hasilDiv.style.background = "#f8d7da";
    hasilDiv.style.color = "#721c24";
  }
});
