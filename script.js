 // Class definitions
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

class Mahasiswa {
    constructor(nama, nim, jurusan, ipk) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.ipk = ipk;
    }
}

class Kalkulator {
    tambah(a, b) { return a + b; }
    kurang(a, b) { return a - b; }
    kali(a, b) { return a * b; }
    bagi(a, b) { return b !== 0 ? a / b : "Error: Tidak bisa dibagi 0"; }
}

class RekeningBank {
    #saldo;
    
    constructor(saldoAwal) {
        this.#saldo = saldoAwal;
    }
    
    getSaldo() {
        return this.#saldo;
    }
    
    deposit(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            return `Deposit berhasil! Saldo: Rp ${this.#saldo.toLocaleString('id-ID')}`;
        }
        return "Jumlah harus positif!";
    }
    
    tarikTunai(jumlah) {
        if (jumlah > this.#saldo) {
            return "Saldo tidak cukup!";
        }
        this.#saldo -= jumlah;
        return `Penarikan berhasil! Saldo: Rp ${this.#saldo.toLocaleString('id-ID')}`;
    }
}

class Manusia {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    
    perkenalan() {
        return `Halo, nama saya ${this.nama}, umur ${this.umur} tahun`;
    }
}

class MahasiswaInherit extends Manusia {
    constructor(nama, umur, nim, jurusan) {
        super(nama, umur);
        this.nim = nim;
        this.jurusan = jurusan;
    }
    
    belajar() {
        return `${this.nama} sedang belajar di jurusan ${this.jurusan}`;
    }
}

class Hewan {
    bersuara() {
        return "Hewan bersuara";
    }
}

class Kucing extends Hewan {
    bersuara() {
        return "🐱 Meong meong!";
    }
}

class Anjing extends Hewan {
    bersuara() {
        return "🐕 Guk guk!";
    }
}

class Sapi extends Hewan {
    bersuara() {
        return "🐄 Mooo!";
    }
}

// Global variables
let rekening = new RekeningBank(100000);
const calc = new Kalkulator();

// Tab functions
function showTab(tabName) {
    const tabs = document.querySelectorAll('.demo-section');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Demo functions
function demoClass() {
    const output = document.getElementById('classOutput');
    output.innerHTML = `
        <div class="output-title">✅ Output:</div>
        <p>Class Mobil telah didefinisikan dengan:</p>
        <p>📌 Attributes: merek, warna, tahun</p>
        <p>📌 Method: info()</p>
        <p style="margin-top: 15px; color: #10b981;">Class adalah template, bukan object yang bisa dipakai langsung. Untuk menggunakannya, kita harus membuat object dari class ini.</p>
    `;
}

function demoObject() {
    const merek = document.getElementById('merekInput').value || "Toyota Avanza";
    const warna = document.getElementById('warnaInput').value || "Hitam";
    const tahun = document.getElementById('tahunInput').value || 2023;
    
    const mobil = new Mobil(merek, warna, tahun);
    const output = document.getElementById('objectOutput');
    
    output.innerHTML = `
        <div class="output-title">✅ Object berhasil dibuat:</div>
        <p style="color: #10b981; font-size: 18px; margin-top: 10px;">${mobil.info()}</p>
        <p style="margin-top: 15px;">Object ini adalah instance dari class Mobil dengan data spesifik yang Anda masukkan.</p>
    `;
}

function demoAttribute() {
    const mhs = new Mahasiswa("Hadyan Moch Haeza", "123456789", "Teknik Informatika", 3.85);
    const output = document.getElementById('attributeOutput');
    
    output.innerHTML = `
        <div class="output-title">✅ Attributes dari Object Mahasiswa:</div>
        <p><span class="highlight">Nama:</span> ${mhs.nama}</p>
        <p><span class="highlight">NIM:</span> ${mhs.nim}</p>
        <p><span class="highlight">Jurusan:</span> ${mhs.jurusan}</p>
        <p><span class="highlight">IPK:</span> ${mhs.ipk}</p>
        <p style="margin-top: 15px; color: #94a3b8;">Setiap attribute menyimpan data spesifik dari object ini.</p>
    `;
}

function demoMethod(operasi) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('methodOutput');
    
    if (isNaN(num1) || isNaN(num2)) {
        output.innerHTML = `
            <div class="output-title">⚠️ Error:</div>
            <p>Silakan masukkan kedua angka terlebih dahulu!</p>
        `;
        return;
    }
    
    let hasil;
    let operasiText;
    
    switch(operasi) {
        case 'tambah':
            hasil = calc.tambah(num1, num2);
            operasiText = `${num1} + ${num2}`;
            break;
        case 'kurang':
            hasil = calc.kurang(num1, num2);
            operasiText = `${num1} - ${num2}`;
            break;
        case 'kali':
            hasil = calc.kali(num1, num2);
            operasiText = `${num1} × ${num2}`;
            break;
        case 'bagi':
            hasil = calc.bagi(num1, num2);
            operasiText = `${num1} ÷ ${num2}`;
            break;
    }
    
    output.innerHTML = `
        <div class="output-title">✅ Hasil Perhitungan:</div>
        <p style="font-size: 20px; color: #10b981; margin-top: 10px;">${operasiText} = <span class="highlight">${hasil}</span></p>
        <p style="margin-top: 15px; color: #94a3b8;">Method <strong>${operasi}()</strong> telah dijalankan!</p>
    `;
}

function demoEncapsulation(aksi) {
    const output = document.getElementById('encapsulationOutput');
    
    if (aksi === 'cek') {
        output.innerHTML = `
            <div class="output-title">💰 Saldo Rekening:</div>
            <p style="font-size: 24px; color: #10b981; margin-top: 10px;">Rp ${rekening.getSaldo().toLocaleString('id-ID')}</p>
            <p style="margin-top: 15px; color: #94a3b8;">Saldo hanya bisa diakses melalui method getSaldo(), bukan langsung!</p>
        `;
        return;
    }
    
    const jumlah = parseFloat(document.getElementById('transaksi').value);
    
    if (isNaN(jumlah) || jumlah <= 0) {
        output.innerHTML = `
            <div class="output-title">⚠️ Error:</div>
            <p>Masukkan jumlah yang valid!</p>
        `;
        return;
    }
    
    let pesan;
    if (aksi === 'deposit') {
        pesan = rekening.deposit(jumlah);
    } else if (aksi === 'tarik') {
        pesan = rekening.tarikTunai(jumlah);
    }
    
    output.innerHTML = `
        <div class="output-title">✅ Transaksi:</div>
        <p style="font-size: 18px; color: #10b981; margin-top: 10px;">${pesan}</p>
        <p style="margin-top: 15px; color: #94a3b8;">🔒 Data saldo dilindungi dengan encapsulation (private #saldo)</p>
    `;
}

function demoInheritance() {
    const output = document.getElementById('inheritanceOutput');
    
    const manusia = new Manusia("Budi", 25);
    const mahasiswa = new MahasiswaInherit("Hadyan", 20, "123456789", "Teknik Informatika");
    
    output.innerHTML = `
        <div class="output-title">✅ Demo Inheritance:</div>
        
        <div class="card">
            <h3>👤 Object Manusia (Class Induk)</h3>
            <p>${manusia.perkenalan()}</p>
            <p style="color: #64748b; margin-top: 10px;">Method yang tersedia: perkenalan()</p>
        </div>
        
        <div class="card">
            <h3>🎓 Object Mahasiswa (Class Anak)</h3>
            <p>${mahasiswa.perkenalan()}</p>
            <p>${mahasiswa.belajar()}</p>
            <p style="color: #64748b; margin-top: 10px;">Mewarisi: perkenalan() + Method baru: belajar()</p>
            <p style="color: #38bdf8; margin-top: 5px;">✨ NIM: ${mahasiswa.nim} | Jurusan: ${mahasiswa.jurusan}</p>
        </div>
        
        <p style="margin-top: 20px; color: #10b981; font-weight: bold;">
            Class Mahasiswa mewarisi semua attribute dan method dari class Manusia, 
            plus punya attribute dan method tambahan sendiri!
        </p>
    `;
}

function demoPolymorphism() {
    const output = document.getElementById('polymorphismOutput');
    
    const kucing = new Kucing();
    const anjing = new Anjing();
    const sapi = new Sapi();
    
    output.innerHTML = `
        <div class="output-title">✅ Polymorphism - Method Sama, Perilaku Beda:</div>
        
        <div class="card">
            <h3>Method bersuara() dipanggil pada berbagai hewan:</h3>
            <p style="font-size: 20px; margin: 10px 0;">${kucing.bersuara()}</p>
            <p style="font-size: 20px; margin: 10px 0;">${anjing.bersuara()}</p>
            <p style="font-size: 20px; margin: 10px 0;">${sapi.bersuara()}</p>
        </div>
        
        <div class="card" style="background: #1e293b;">
            <h3 style="color: #10b981;">🎯 Konsep Polymorphism:</h3>
            <p>• Semua class punya method <span class="highlight">bersuara()</span></p>
            <p>• Tapi hasilnya <strong>berbeda-beda</strong> sesuai jenis hewannya</p>
            <p>• Ini adalah "many forms" - satu method, banyak bentuk implementasi</p>
        </div>
        
        <p style="margin-top: 20px; color: #38bdf8; font-weight: bold;">
            💡 Dalam kehidupan nyata: Semua kendaraan punya method "bergerak()", 
            tapi mobil bergerak dengan roda, pesawat dengan sayap, kapal dengan baling-baling!
        </p>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 OOP Interactive Demo loaded successfully!');
});
