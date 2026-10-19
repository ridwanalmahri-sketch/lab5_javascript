# LAPORAN PRAKTIKUM PEMROGRAMAN WEB
## Pertemuan 6 — JavaScript Dasar

### A. Identitas Praktikum

- Nama: M.Ridwan Al Mahri
- NIM: 312510157
- Program Studi: Teknik Informatika
- Mata Kuliah: Pemrograman Web
- Repository: `Lab5JavaScript`

### B. Tujuan Praktikum

Praktikum ini bertujuan untuk memahami dasar-dasar JavaScript, mulai dari menampilkan output, menerima input pengguna, operasi aritmetika, percabangan, function, manipulasi DOM, event listener, validasi form, hingga perulangan.

### C. Bahasa Pemrograman dan Teknologi

| Teknologi | Kegunaan |
|---|---|
| HTML | Membuat struktur halaman dan elemen input |
| JavaScript | Mengatur logika program dan interaksi pengguna |
| Browser | Menjalankan halaman web dan menampilkan Console |
| GitHub | Menyimpan kode dan dokumentasi praktikum |

### D. Langkah Menjalankan Program

1. Buat folder `Lab5Web`.
2. Simpan kode HTML dengan nama `index.html`.
3. Simpan kode JavaScript dengan nama `script.js`.
4. Pastikan file HTML memanggil JavaScript menggunakan `<script src="script.js"></script>`.
5. Buka `index.html` melalui browser.
6. Jalankan setiap latihan dan amati hasilnya.
7. Ambil screenshot hasil pengujian dan simpan di folder `screenshots`.

---

## E. Hasil Praktikum

### 1. Latihan 1 — Menampilkan Output

**Bahasa pemrograman:** JavaScript

**Kode program (`script.js`):**

```javascript
function latihan1() {
    document.getElementById("pesan").textContent = "Hello World";
    console.log("Hello World");
}

```

**Elemen HTML:**

```html
<p id="pesan">Teks awal</p>
<button type="button" onclick="latihan1()">
    Jalankan Latihan 1
</button>
```

**Penjelasan:**

`getElementById()` digunakan untuk memilih elemen dengan ID `pesan`. Properti `textContent` mengubah teks pada halaman, sedangkan `console.log()` menampilkan pesan di Console browser.

**Hasil yang diharapkan:**

- Teks `Teks awal` berubah menjadi `Hello World`.
- Console menampilkan `Hello World`.

**Screenshot:**

<img width="1919" height="277" alt="Screenshot 2026-10-19 192620" src="https://github.com/user-attachments/assets/69afce28-e0bd-47a0-a1e6-1577e63fc50d" />

### 2. Latihan 2 — Alert dan Prompt

**Bahasa pemrograman:** JavaScript

**Kode program (`script.js`):**

```javascript
function latihan2() {
    const namaPengguna = prompt("Masukkan nama Anda:", "");

    if (namaPengguna && namaPengguna.trim() !== "") {
        alert("Halo, " + namaPengguna + "!");
        document.getElementById("pesan").textContent =
            "Selamat datang, " + namaPengguna + ".";
    } else {
        alert("Nama belum diisi.");
    }
}
```

**Elemen HTML:**

```html
<h3>Alert dan Prompt</h3>
<button type="button" onclick="latihan2()">Masukkan Nama</button>
```

**Penjelasan:**

`prompt()` meminta pengguna memasukkan nama. Jika nama diisi, `alert()` menampilkan sapaan dan teks pada halaman diperbarui. Jika pengguna menekan Cancel atau memasukkan teks kosong, program menampilkan pesan bahwa nama belum diisi.

**Hasil yang diharapkan:**

Jika nama yang dimasukkan adalah Andi, program menampilkan `Halo, Andi!` dan teks halaman menjadi `Selamat datang, Andi.`

**Screenshot:**

<img width="1919" height="310" alt="Screenshot 2026-10-19 140624" src="https://github.com/user-attachments/assets/a8714b67-c86c-41f9-b523-d24f779c91ad" />

<img width="1918" height="245" alt="Screenshot 2026-10-19 140651" src="https://github.com/user-attachments/assets/98608726-e9b9-4ece-b468-6dd5c2fa2fd7" />

<img width="1919" height="352" alt="Screenshot 2026-10-19 192958" src="https://github.com/user-attachments/assets/172d79c3-f145-4a08-b4b2-0085e24743c8" />


### 3. Latihan 3 — Function dan Operasi Aritmetika

**Bahasa pemrograman:** JavaScript

**Kode program (`script.js`):**

```javascript
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

function latihan3() {
    operasiDasar(9, 4);
}
```

**Elemen HTML:**

```html
<button type="button" onclick="latihan3()">
    Jalankan Operasi Aritmetika
</button>
```

**Penjelasan:**

Function `operasiDasar(a, b)` menerima dua parameter dan menghitung lima operasi aritmetika. Hasil ditampilkan melalui Console browser.

**Hasil pengujian dengan angka 9 dan 4:**

| Operasi | Hasil |
|---|---:|
| Penjumlahan | 13 |
| Pengurangan | 5 |
| Perkalian | 36 |
| Pembagian | 2.25 |
| Modulus | 1 |

**Screenshot:**

<img width="1914" height="115" alt="Screenshot 2026-10-19 193045" src="https://github.com/user-attachments/assets/de2e632f-46b1-42e6-bcde-8c35b6d8a2af" />


### 4. Latihan 4 — Seleksi Kondisi if–else

**Bahasa pemrograman:** JavaScript

**Kode program (`script.js`):**

```javascript
function latihan4() {
    const inputNilai = prompt("Masukkan nilai (0–100):");
    const nilaiMahasiswa = Number(inputNilai);

    if (
        inputNilai === null ||
        inputNilai.trim() === "" ||
        Number.isNaN(nilaiMahasiswa) ||
        nilaiMahasiswa < 0 ||
        nilaiMahasiswa > 100
    ) {
        alert("Input nilai tidak valid.");
    } else if (nilaiMahasiswa >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}
```

**Elemen HTML:**

```html
<button type="button" onclick="latihan4()">Periksa Nilai</button>
```

**Penjelasan:**

Program meminta nilai menggunakan `prompt()`, lalu mengubah input menjadi number dengan `Number()`. Kondisi `if–else` menentukan apakah nilai valid, lulus, atau belum lulus.

**Hasil pengujian:**

| Input | Hasil |
|---|---|
| 80 | Lulus |
| 50 | Belum lulus |
| 110 | Input nilai tidak valid |
| Kosong atau Cancel | Input nilai tidak valid |

**Screenshot:**

<img width="1919" height="277" alt="Screenshot 2026-10-19 141025" src="https://github.com/user-attachments/assets/ddc75c14-9e90-41e2-866d-481471ef1c4d" />

<img width="1918" height="240" alt="Screenshot 2026-10-19 141048" src="https://github.com/user-attachments/assets/e4134dd7-b5a5-4281-b773-50f580c6e085" />

<img width="1919" height="250" alt="Screenshot 2026-10-19 193308" src="https://github.com/user-attachments/assets/52a7c1bf-7270-4ec3-b9f7-7a734c8353a4" />


### 5. Latihan 5 — Seleksi Kondisi switch

**Bahasa pemrograman:** JavaScript

**Kode program (`script.js`):**

```javascript
function latihan5() {
    const inputPilihan = prompt("Masukkan angka 1–5:");

    switch (inputPilihan) {
        case "1":
            alert("Bilangan satu");
            break;
        case "2":
            alert("Bilangan dua");
            break;
        case "3":
            alert("Bilangan tiga");
            break;
        case "4":
            alert("Bilangan empat");
            break;
        case "5":
            alert("Bilangan lima");
            break;
        default:
            alert("Pilihan tidak tersedia");
    }
}
```

**Elemen HTML:**

```html
<button type="button" onclick="latihan5()">Pilih Bilangan 1-5</button>
```

**Penjelasan:**

`switch` membandingkan input dengan beberapa pilihan. `break` menghentikan proses pada pilihan yang cocok, sedangkan `default` dijalankan jika tidak ada pilihan yang sesuai.

**Hasil yang diharapkan:**

Input `3` menampilkan `Bilangan tiga`. Input selain 1–5 menampilkan `Pilihan tidak tersedia`.

**Screenshot:**

<img width="1919" height="228" alt="Screenshot 2026-10-19 193435" src="https://github.com/user-attachments/assets/ad4ed68d-8b29-49bc-8886-ea80dc15226b" />

<img width="1919" height="235" alt="Screenshot 2026-10-19 193445" src="https://github.com/user-attachments/assets/51ec59f8-ee10-4fd8-ac17-00e72122e17e" />


### 6. Latihan 6 — Bilangan Genap atau Ganjil

**Bahasa pemrograman:** HTML dan JavaScript

**Kode HTML (`index.html`):**

```html
<label for="bilangan">Masukkan bilangan bulat:</label>
<input type="number" id="bilangan" step="1">
<button type="button" onclick="cekBilangan()">Periksa</button>
<p id="hasilBilangan"></p>
```

**Kode JavaScript (`script.js`):**

```javascript
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
```

**Penjelasan:**

HTML menyediakan input bilangan dan tombol pemeriksaan. JavaScript menggunakan `Number.isInteger()` untuk memeriksa bilangan bulat dan operator modulus untuk menentukan genap atau ganjil.

**Hasil pengujian:**

| Input | Hasil |
|---:|---|
| 4 | Bilangan genap |
| 7 | Bilangan ganjil |
| -2 | Bilangan genap |
| 0 | Bilangan genap |
| 2.5 | Masukkan bilangan bulat yang valid |
| Kosong | Masukkan bilangan bulat yang valid |

**Screenshot:**

<img width="1919" height="122" alt="Screenshot 2026-10-19 193549" src="https://github.com/user-attachments/assets/7064e9bc-ab31-49ad-a63d-30d522e84866" />

<img width="1919" height="124" alt="Screenshot 2026-10-19 193625" src="https://github.com/user-attachments/assets/dbfae1c3-adff-4bd8-a2d7-b7946277679e" />

### 7. Latihan 7 — Mengubah Warna Halaman

**Bahasa pemrograman:** HTML dan JavaScript

**Kode HTML (`index.html`):**

```html
<button type="button" onclick="ubahWarnaLatar('lightgreen')">
    Latar Hijau
</button>

<button type="button" onclick="ubahWarnaLatar('white')">
    Latar Putih
</button>

<button type="button" onclick="ubahWarnaLatar('lightyellow')">
    Latar Kuning
</button>
```

**Kode JavaScript (`script.js`):**

```javascript
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}
```

**Penjelasan:**

Function menerima parameter `warna`, lalu mengubah properti `backgroundColor` pada elemen `body`. Dengan satu function, ketiga tombol dapat menggunakan logika yang sama.

**Hasil yang diharapkan:**

Latar halaman berubah menjadi hijau muda, putih, atau kuning muda sesuai tombol yang ditekan.

**Screenshot:**

![Latihan 7](screenshots/latihan-7.png)

### 8. Latihan 8 — DOM dan Checkbox Menu Makanan

**Bahasa pemrograman:** HTML dan JavaScript

**Kode HTML (`index.html`):**

```html
<h3>Daftar Menu Makanan</h3>

<label>
    <input type="checkbox" class="menu" value="5000">
    Ayam Goreng — Rp5.000
</label>
<br>

<label>
    <input type="checkbox" class="menu" value="500">
    Tempe — Rp500
</label>
<br>

<label>
    <input type="checkbox" class="menu" value="2500">
    Telur Dadar — Rp2.500
</label>
<br>

<p>Total: Rp<span id="total">0</span></p>
```

**Kode JavaScript (`script.js`):**

```javascript
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}
```

**Penjelasan:**

`querySelectorAll()` memilih seluruh checkbox dengan class `menu`. Event `change` menjalankan `hitungTotal()` setiap kali pilihan berubah. Total harga ditampilkan dengan format angka Indonesia.

**Hasil pengujian:**

| Pilihan | Total |
|---|---:|
| Tidak ada menu dipilih | Rp0 |
| Ayam Goreng | Rp5.000 |
| Ayam Goreng dan Tempe | Rp5.500 |
| Semua tiga menu | Rp8.000 |

Dua menu tambahan pada Eksperimen Mandiri, yaitu Bakwan Rp3.000 dan Es Teh Rp4.000, juga masuk ke perhitungan karena memakai class `menu` yang sama.

**Screenshot:**

![Latihan 8](screenshots/latihan-8.png)

---

## F. Mini Project — Kalkulator Nilai Mahasiswa

**Bahasa pemrograman:** HTML dan JavaScript

### 1. Kode HTML

```html
<form id="formNilai">
    <label for="tugas">Nilai Tugas:</label>
    <input type="number" id="tugas" min="0" max="100" required>
    <br><br>

    <label for="uts">Nilai UTS:</label>
    <input type="number" id="uts" min="0" max="100" required>
    <br><br>

    <label for="uas">Nilai UAS:</label>
    <input type="number" id="uas" min="0" max="100" required>
    <br><br>

    <button type="submit">Hitung Nilai</button>
</form>

<div id="hasilNilai"></div>
```

### 2. Kode JavaScript

```javascript
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
```

Kode di atas merupakan dua function dasar. Kode lengkap pada `script.js` juga mencakup pengambilan nilai dari form, validasi rentang, penentuan status, dan penampilan hasil pada halaman.

### 3. Penjelasan

Nilai akhir dihitung dengan bobot tugas 30%, UTS 30%, dan UAS 40%. Function `tentukanPredikat()` menentukan predikat berdasarkan nilai akhir. Program menetapkan status lulus jika nilai akhir minimal 60.

### 4. Hasil pengujian

| Tugas | UTS | UAS | Nilai akhir | Predikat | Status |
|---:|---:|---:|---:|:---:|---|
| 85 | 78 | 88 | 83,20 | B | Lulus |
| 50 | 55 | 45 | 49,50 | E | Belum lulus |
| 90 | 90 | 90 | 90,00 | A | Lulus |

**Screenshot pengujian:**

![Mini Project - Pengujian 1](screenshots/mini-project-1.png)

![Mini Project - Pengujian 2](screenshots/mini-project-2.png)

![Mini Project - Pengujian 3](screenshots/mini-project-3.png)

---

## G. Eksperimen Mandiri

### 1. Nomor 1 — Operasi Aritmetika dengan Prompt

**Bahasa pemrograman:** JavaScript

```javascript
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
```

**Penjelasan:** program menerima dua input, mengubahnya menjadi number, lalu memanggil `operasiDasar()`.

**Hasil:** seluruh operasi aritmetika ditampilkan pada Console.

![Eksperimen 1](screenshots/eksperimen-1.png)

### 2. Nomor 7 — Tabel Perkalian Angka 7

**Bahasa pemrograman:** JavaScript

```javascript
function tabelPerkalian() {
    for (let i = 1; i <= 10; i++) {
        console.log("7 x " + i + " = " + (7 * i));
    }
}
```

**Penjelasan:** perulangan `for` menjalankan perhitungan dari 1 sampai 10.

**Hasil yang diharapkan:** Console menampilkan `7 x 1 = 7` sampai `7 x 10 = 70`.

![Eksperimen 7](screenshots/eksperimen-7.png)

### 3. Nomor 8 — Function cekGenap()

**Bahasa pemrograman:** JavaScript

```javascript
function cekGenap(angka) {
    return Number.isInteger(angka) && angka % 2 === 0;
}

function ujiGenap() {
    console.log("4 genap:", cekGenap(4));
    console.log("7 genap:", cekGenap(7));
    console.log("0 genap:", cekGenap(0));
}
```

**Penjelasan:** function mengembalikan `true` jika parameter berupa bilangan bulat genap. Selain itu, hasilnya `false`.

**Hasil pengujian:** angka 4 menghasilkan `true`, angka 7 menghasilkan `false`, dan angka 0 menghasilkan `true`.

![Eksperimen 8](screenshots/eksperimen-8.png)

### 4. Nomor 9 — Validasi Form

**Bahasa pemrograman:** HTML dan JavaScript

```javascript
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
```

**Penjelasan:** program memeriksa nama dan nilai. Nama tidak boleh kosong, sedangkan nilai harus berada di antara 0 dan 100.

**Hasil:** data valid menampilkan informasi nama dan nilai. Input kosong atau nilai di luar rentang menampilkan pesan kesalahan.

![Eksperimen 9](screenshots/eksperimen-9.png)

### 5. Nomor 10 — Penambahan Menu Makanan

**Bahasa pemrograman:** HTML

```html
<label>
    <input type="checkbox" class="menu" value="3000">
    Bakwan — Rp3.000
</label>
<br>

<label>
    <input type="checkbox" class="menu" value="4000">
    Es Teh — Rp4.000
</label>
<br>
```

**Penjelasan:** dua pilihan menu ditambahkan menggunakan class `menu` dan nilai harga masing-masing. JavaScript Latihan 8 menghitung menu tambahan ini bersama menu awal.

**Hasil:** ketika Bakwan dipilih, total bertambah Rp3.000. Ketika Es Teh dipilih, total bertambah Rp4.000.

![Eksperimen 10](screenshots/eksperimen-10.png)

### 6. Nomor 11 — Menyembunyikan dan Menampilkan Elemen

**Bahasa pemrograman:** HTML dan JavaScript

```html
<p id="teksEksperimen">
    Ini adalah teks yang bisa disembunyikan.
</p>

<button type="button" onclick="toggleTeks()">
    Sembunyikan / Tampilkan Teks
</button>
```

```javascript
function toggleTeks() {
    const teks = document.getElementById("teksEksperimen");

    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}
```

**Penjelasan:** JavaScript mengubah properti `display` untuk menyembunyikan atau menampilkan kembali elemen paragraf.

**Hasil:** teks menghilang saat tombol ditekan dan dapat ditampilkan kembali dengan menekan tombol tersebut sekali lagi.

![Eksperimen 11](screenshots/eksperimen-11.png)

---

## H. Kesimpulan

Praktikum ini memperkenalkan penggunaan JavaScript untuk membuat halaman web yang interaktif. Melalui latihan yang dilakukan, dipelajari penggunaan output, input pengguna, operasi aritmetika, percabangan, function, manipulasi DOM, event listener, validasi form, dan perulangan.

Mini project menunjukkan penerapan JavaScript untuk menghitung nilai akhir mahasiswa, menentukan predikat, serta memeriksa status kelulusan berdasarkan ketentuan nilai.

## I. Pengumpulan

File yang dikumpulkan dalam repository `Lab5Web`:

- `index.html`
- `script.js`
- `README.md`
- Folder `screenshots`

**URL Repository GitHub:** [Masukkan URL repository di sini]
