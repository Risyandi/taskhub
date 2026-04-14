# TaskHub+
## Sistem Manajemen Tugas yang Simpel dan Handal

TaskHub+ adalah aplikasi untuk mengatur tugas tim dengan mudah. Dibuat menggunakan Laravel (Backend) dan ReactJS/NextJS (Frontend) supaya aplikasi terasa cepat dan nyaman saat digunakan.

---

## Tentang Aplikasi
TaskHub+ dirancang agar mudah dikembangkan dan dirawat. Kami fokus pada performa yang cepat dan sinkronisasi data yang akurat.

### Filosofi Kami
Kami ingin membuat sistem yang stabil dan mudah dipahami. Setiap bagian aplikasi dibuat supaya gampang dites dan dikelola dalam jangka panjang.

---

## Teknologi yang Digunakan
Kami menggunakan teknologi modern yang sudah umum digunakan di industri:

*   **Backend**: Laravel 10 (PHP 8.1+) - Untuk mengolah data dan keamanan.
*   **Frontend**: ReactJS - Untuk tampilan yang interaktif dan responsif.
*   **Database**: MySQL - Untuk menyimpan data dengan aman.
*   **Tampilan (UI/UX)**: Tailwind CSS - Membuat desain yang cantik dan konsisten dengan cepat.

---

## Cara Install dan Menjalankan

### Persiapan Dasar
*   **PHP**: Minimal versi 8.1
*   **Node.js**: Versi LTS (v18 ke atas)
*   **Composer**: Versi 2.0 ke atas
*   **Database**: MySQL

### Langkah Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/risyandi/taskhub.git
   cd taskhub
   ```

2. **Setup Backend**
   ```bash
   cd example-app
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate --seed
   ```

3. **Setup Frontend**
   ```bash
   pnpm install
   pnpm run dev
   pnpm run build
   ```

---

## Standar Kode
Kami mengikuti standar penulisan kode yang rapi (PSR-12 untuk PHP dan ESLint untuk JavaScript) agar aplikasi tetap berkualitas tinggi.

---

## Pertanyaan Refleksi 
1. **Apa tantangan paling sulit saat membuat tes ini?**
Bagian yang paling sulit adalah saat menghubungkan API dari backend ke tampilan frontend, mulai dari mendesain UI sampai memastikan cara kerja di backend berjalan pas saat diterapkan di frontend.
2. **Jika Anda diberi waktu tambahan 2 jam, fitur apa yang akan Anda tambahkan?**
Saya ingin menambahkan fitur komentar pada tugas, sub-task (tugas turunan), dan halaman detail tugas yang lebih lengkap.
3. **Apa kelebihan struktur kode Anda dibanding hasil copy-paste AI?**
Struktur kode saya sengaja dibuat sederhana dan rapi. Tidak berlebihan, tapi sangat mudah jika ingin ditambah fitur-fitur baru di masa depan (scalable).

---

## Lisensi
TaskHub+ menggunakan lisensi MIT.

---

**Dibuat oleh**: [Risyandi](https://github.com/risyandi)

