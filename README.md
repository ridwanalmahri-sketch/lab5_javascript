# Praktikum Pemrograman Web - Pertemuan 6
## JavaScript Dasar

### A. Identitas Praktikum

- **Nama:** M.Ridwan Al Mahri
- **NIM:** 312510157
- **Program Studi:** Teknik Informatika
- **Mata Kuliah:** Pemrograman Web
- **Pertemuan:** 6
- **Repository:** Lab5javascript

### B. Tujuan Praktikum

Praktikum ini bertujuan untuk memahami dasar-dasar JavaScript dan penerapannya pada halaman web. Materi yang dipelajari meliputi output, input pengguna, operasi aritmetika, percabangan, function, manipulasi DOM, event listener, validasi form, dan perulangan.

### C. Perangkat yang Digunakan

1. Laptop atau komputer.
2. Sistem operasi Windows.
3. Browser Google Chrome atau browser lainnya.
4. Text editor, seperti Visual Studio Code.
5. GitHub untuk menyimpan kode dan dokumentasi praktikum.

### D. Langkah Kerja

1. Membuat repository GitHub dengan nama `Lab5Web`.
2. Membuat file `index.html` untuk menyusun elemen halaman web.
3. Membuat file `script.js` untuk menuliskan kode JavaScript.
4. Menghubungkan kedua file menggunakan tag `<script src="script.js"></script>`.
5. Menjalankan file `index.html` melalui browser.
6. Menguji setiap latihan sesuai instruksi modul.
7. Mengambil screenshot hasil pengujian dan menyimpannya pada folder `screenshots`.
8. Menambahkan file HTML, JavaScript, screenshot, dan README.md ke repository GitHub.

### E. Hasil Praktikum

#### 1. Latihan 1 — Menampilkan Output

Pada latihan ini, JavaScript digunakan untuk mengubah teks pada halaman menjadi "Hello World" menggunakan `textContent`. Perintah `console.log()` digunakan untuk menampilkan pesan yang sama pada Console browser.

**Hasil:** teks pada halaman berubah menjadi Hello World dan pesan dapat dilihat melalui Console setelah tombol dijalankan.

**Dokumentasi:**

![Latihan 1 - Menampilkan Output](screenshots/latihan-1.png)

#### 2. Latihan 2 — Alert dan Prompt

Latihan ini menggunakan `prompt()` untuk menerima nama pengguna dan `alert()` untuk menampilkan pesan. Program memeriksa apakah nama telah diisi. Jika nama tersedia, halaman menampilkan pesan selamat datang. Jika input kosong atau pengguna menekan Cancel, program menampilkan pesan bahwa nama belum diisi.

**Hasil:** program dapat menerima nama dan memberikan respons sesuai input pengguna.

**Dokumentasi:**

![Latihan 2 - Alert dan Prompt](screenshots/latihan-2.png)

#### 3. Latihan 3 — Function dan Operasi Aritmetika

Latihan ini menggunakan function `operasiDasar(a, b)` untuk menghitung penjumlahan, pengurangan, perkalian, pembagian, dan modulus. Function dijalankan menggunakan bilangan 9 dan 4.

**Hasil pengujian:**

- Penjumlahan: 13
- Pengurangan: 5
- Perkalian: 36
- Pembagian: 2,25
- Modulus: 1

Hasil operasi ditampilkan pada Console browser.

**Dokumentasi:**

![Latihan 3 - Operasi Aritmetika](screenshots/latihan-3.png)

#### 4. Latihan 4 — Seleksi Kondisi if–else

Program meminta pengguna memasukkan nilai antara 0 dan 100. Nilai dikonversi menjadi tipe number, kemudian diperiksa menggunakan kondisi `if–else`.

**Hasil:** nilai minimal 60 dinyatakan lulus. Nilai di bawah 60 dinyatakan belum lulus. Input kosong, pembatalan prompt, dan nilai di luar rentang ditolak.

**Dokumentasi:**

![Latihan 4 - Seleksi Kondisi](screenshots/latihan-4.png)

#### 5. Latihan 5 — Seleksi Kondisi switch

Latihan ini menggunakan `switch` untuk memeriksa pilihan angka 1 sampai 5. Setiap pilihan menampilkan nama bilangan yang sesuai.

**Hasil:** angka 1–5 menampilkan nama bilangan masing-masing, sedangkan pilihan lain menampilkan pesan "Pilihan tidak tersedia".

**Dokumentasi:**

![Latihan 5 - Switch](screenshots/latihan-5.png)

#### 6. Latihan 6 — Bilangan Genap atau Ganjil

Program menerima bilangan melalui input HTML. JavaScript memeriksa apakah input berupa bilangan bulat, kemudian menggunakan operator modulus (`%`) untuk menentukan apakah bilangan tersebut genap atau ganjil.

**Hasil:** program menampilkan hasil pemeriksaan pada halaman. Bilangan positif, negatif, dan nol dapat diperiksa, sedangkan bilangan desimal dan input kosong ditolak sebagai input yang tidak valid.

**Dokumentasi:**

![Latihan 6 - Genap atau Ganjil](screenshots/latihan-6.png)

#### 7. Latihan 7 — Mengubah Warna Halaman

Latihan ini menggunakan function `ubahWarnaLatar(warna)` dengan parameter warna. Tiga tombol disediakan untuk mengubah warna latar halaman menjadi hijau muda, putih, dan kuning muda.

**Hasil:** warna latar halaman berubah sesuai tombol yang ditekan.

**Dokumentasi:**

![Latihan 7 - Mengubah Warna](screenshots/latihan-7.png)

#### 8. Latihan 8 — DOM dan Checkbox Menu Makanan

Latihan ini menggunakan checkbox untuk memilih menu makanan. JavaScript memanfaatkan `querySelectorAll()` dan `addEventListener()` untuk mendeteksi perubahan pilihan, kemudian menghitung total harga menu yang dicentang.

Menu yang tersedia:

- Ayam Goreng: Rp5.000
- Tempe: Rp500
- Telur Dadar: Rp2.500

**Hasil:** total harga berubah otomatis saat checkbox dipilih atau dilepas. Dua menu tambahan, yaitu Bakwan Rp3.000 dan Es Teh Rp4.000, juga dihitung dalam total yang sama.

**Dokumentasi:**

![Latihan 8 - Checkbox Menu Makanan](screenshots/latihan-8.png)

### F. Mini Project — Kalkulator Nilai Mahasiswa

Mini project ini menghitung nilai akhir mahasiswa berdasarkan nilai tugas, UTS, dan UAS. Bobot yang digunakan adalah 30% untuk tugas, 30% untuk UTS, dan 40% untuk UAS.

Predikat ditentukan berdasarkan nilai akhir:

| Nilai akhir | Predikat |
|---|---|
| 85–100 | A |
| 75–kurang dari 85 | B |
| 60–kurang dari 75 | C |
| 50–kurang dari 60 | D |
| Di bawah 50 | E |

Status kelulusan ditentukan berdasarkan nilai akhir minimal 60. Program juga memvalidasi agar setiap nilai berada dalam rentang 0–100.

**Contoh pengujian:**

| Tugas | UTS | UAS | Nilai akhir | Predikat | Status |
|---:|---:|---:|---:|:---:|---|
| 85 | 78 | 88 | 83,20 | B | Lulus |
| 50 | 55 | 45 | 49,50 | E | Belum lulus |
| 90 | 90 | 90 | 90,00 | A | Lulus |

**Dokumentasi pengujian:**

![Mini Project - Pengujian 1](screenshots/mini-project-1.png)

![Mini Project - Pengujian 2](screenshots/mini-project-2.png)

![Mini Project - Pengujian 3](screenshots/mini-project-3.png)

### G. Eksperimen Mandiri

#### 1. Nomor 1 — Operasi Aritmetika dengan Prompt

Program meminta dua bilangan melalui `prompt()`, mengonversinya menjadi number, lalu menjalankan function `operasiDasar()`.

**Hasil:** operasi aritmetika ditampilkan pada Console browser.

![Eksperimen 1 - Operasi Aritmetika](screenshots/eksperimen-1.png)

#### 2. Nomor 7 — Tabel Perkalian Angka 7

Program menggunakan perulangan `for` untuk menampilkan perkalian angka 7 dari 1 sampai 10.

**Hasil:** tabel perkalian ditampilkan pada Console browser.

![Eksperimen 7 - Tabel Perkalian](screenshots/eksperimen-7.png)

#### 3. Nomor 8 — Function cekGenap()

Function `cekGenap(angka)` mengembalikan nilai `true` jika bilangan bulat yang diberikan adalah genap dan `false` jika bukan bilangan bulat genap.

**Hasil:** fungsi diuji menggunakan angka 4, 7, dan 0 melalui Console.

![Eksperimen 8 - Cek Genap](screenshots/eksperimen-8.png)

#### 4. Nomor 9 — Validasi Form

Program memeriksa apakah kolom nama dan nilai telah diisi. Nilai harus berada dalam rentang 0–100.

**Hasil:** data yang sesuai akan menampilkan pesan bahwa data valid, sedangkan data kosong atau nilai di luar rentang akan menghasilkan pesan kesalahan.

![Eksperimen 9 - Validasi Form](screenshots/eksperimen-9.png)

#### 5. Nomor 10 — Penambahan Menu Makanan

Dua pilihan menu tambahan dimasukkan ke dalam daftar checkbox, yaitu Bakwan dan Es Teh. Kedua menu menggunakan class `menu` yang sama sehingga total harga dihitung bersama menu sebelumnya.

**Hasil:** harga menu tambahan ikut diperhitungkan secara otomatis.

![Eksperimen 10 - Menu Tambahan](screenshots/eksperimen-10.png)

#### 6. Nomor 11 — Menyembunyikan dan Menampilkan Elemen

Program menggunakan function `toggleTeks()` untuk mengubah properti `display` pada elemen HTML.

**Hasil:** teks dapat disembunyikan dan ditampilkan kembali menggunakan tombol.

![Eksperimen 11 - Toggle Teks](screenshots/eksperimen-11.png)

### H. Kesimpulan

Berdasarkan praktikum yang dilakukan, JavaScript dapat digunakan untuk membuat halaman web lebih interaktif. Materi yang dipelajari mencakup penampilan output, pengambilan input, operasi aritmetika, percabangan, function, manipulasi DOM, event listener, validasi form, dan perulangan.

Melalui latihan dan mini project, konsep dasar JavaScript diterapkan untuk membuat pemeriksaan bilangan, perubahan warna halaman, perhitungan harga menu, serta kalkulator nilai mahasiswa.

