// script.js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// Alert dan prompt
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
alert("Halo, " + namaPengguna + "!");
document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
alert("Nama belum diisi.");
}

// Function dan operasi aritmetika
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// — Seleksi kondisi if–else
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (inputNilai === null || inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
alert("Lulus");
} else {
alert("Belum lulus");
}

// Seleksi kondisi switch
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

// Form bilangan genap atau ganjil
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");
if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
} else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
} else {
    hasil.textContent = "Bilangan ganjil";
    }
}


// Mengubah warna latar belakang
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// DOM dan checkbox menu makanan
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// Project: Kalkulator Nilai
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputTugas = document.getElementById("tugas").value;
    const inputUTS = document.getElementById("uts").value;
    const inputUAS = document.getElementById("uas").value;
    const hasil = document.getElementById("hasilNilai");

    if (
        inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === ""
    ) {
        hasil.textContent = "Semua nilai harus diisi.";
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);

    if (
        !Number.isFinite(tugas) ||
        !Number.isFinite(uts) ||
        !Number.isFinite(uas) ||
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Setiap nilai harus berada pada rentang 0–100.";
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.innerHTML =
        "<h3>Hasil Perhitungan</h3>" +
        "<p>Nilai akhir: " + akhir.toFixed(2) + "</p>" +
        "<p>Predikat: " + predikat + "</p>" +
        "<p>Status: " + status + "</p>";

    console.log("Nilai akhir:", akhir.toFixed(2));
    console.log("Predikat:", predikat);
    console.log("Status:", status);
});

// Ekperimen mandiri 1 Menginput dua bilangan dari prompt
function eksperimenAritmetika() {
    const inputA = prompt("Masukkan bilangan pertama:");

    if (inputA === null || inputA.trim() === "") {
        alert("Bilangan pertama harus diisi.");
        return;
    }

    const inputB = prompt("Masukkan bilangan kedua:");

    if (inputB === null || inputB.trim() === "") {
        alert("Bilangan kedua harus diisi.");
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        alert("Masukkan bilangan yang valid.");
        return;
    }

    operasiDasar(a, b);
}


// Ekperimen mandiri 8 Funtion cek genap
function cekGenap(angka) {
    return Number.isInteger(angka) && angka % 2 === 0;
}

function ujiGenap() {
    console.log("4 genap:", cekGenap(4));
    console.log("7 genap:", cekGenap(7));
    console.log("0 genap:", cekGenap(0));
}

// Ekperimen mandiri 9 Validasi from
document.getElementById("formValidasi").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const inputNilai = document.getElementById("nilai").value;
    const nilai = Number(inputNilai);
    const hasil = document.getElementById("hasilValidasi");

    if (nama === "" || inputNilai.trim() === "") {
        hasil.textContent = "Nama dan nilai wajib diisi.";
    } else if (
        !Number.isFinite(nilai) ||
        nilai < 0 ||
        nilai > 100
    ) {
        hasil.textContent = "Nilai harus berada pada rentang 0–100.";
    } else {
        hasil.textContent =
            "Data valid. Nama: " + nama + ", nilai: " + nilai;
    }
});

// Ekperimen mandiri 11 Sembunyikan dan tampilkan teks
function toggleTeks() {
    const teks = document.getElementById("teksEksperimen");

    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}