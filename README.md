# KonsepOOP
Blog pembelajaran 7 Konsep Object Oriented Programming (OOP) menggunakan Java.

# Blog Interaktif 7 Konsep Object Oriented Programming (OOP)

## 👤 Identitas
- **Nama** : Hadyan Moch Haeza  
- **NIM** : 123456789  
- **Jurusan** : Teknik Informatika  
- **Mata Kuliah** : Pemrograman Berorientasi Objek  
- **Bahasa Pemrograman** : JavaScript  

---

## 🧠 Deskripsi Proyek

Repository ini berisi **Blog Interaktif 7 Konsep Dasar Object Oriented Programming (OOP)** yang dibuat menggunakan **HTML, CSS, dan JavaScript**.  
Proyek ini bertujuan untuk membantu mahasiswa memahami konsep OOP **tidak hanya secara teori**, tetapi juga melalui **contoh program langsung dan hasil tampilannya**.

Setiap konsep OOP dijelaskan dengan:
- Penjelasan sederhana (bahasa manusia)
- Contoh program JavaScript
- Demo interaktif (output langsung di browser)
- Analogi kehidupan sehari-hari

---

## 🎯 Tujuan Pembelajaran

Setelah mempelajari blog ini, diharapkan mahasiswa mampu:
1. Memahami 7 konsep dasar OOP
2. Menjelaskan perbedaan Class dan Object
3. Mengimplementasikan Attribute dan Method
4. Menerapkan Encapsulation untuk keamanan data
5. Menggunakan Inheritance dan Polymorphism
6. Melihat langsung hasil program OOP secara interaktif

---

## 📚 Daftar 7 Konsep OOP

| No | Konsep | Penjelasan Singkat |
|----|-------|------------------|
| 1 | Class | Cetak biru atau blueprint |
| 2 | Object | Hasil nyata dari class |
| 3 | Attribute | Ciri atau data object |
| 4 | Method | Perilaku atau aksi object |
| 5 | Encapsulation | Pengamanan data |
| 6 | Inheritance | Pewarisan sifat |
| 7 | Polymorphism | Banyak bentuk perilaku |

---

## 🧩 Penjelasan Program & Contoh Output

### 1️⃣ Class
**Penjelasan:**  
Class adalah **template atau rancangan** untuk membuat object.  
Class belum bisa digunakan langsung sebelum dibuat object-nya.

**Contoh Program:**
```javascript
class Mobil {
    constructor(merek, warna, tahun) {
        this.merek = merek;
        this.warna = warna;
        this.tahun = tahun;
    }

    info() {
        return `Mobil ${this.merek} warna ${this.warna} tahun ${this.tahun}`;
    }
}

