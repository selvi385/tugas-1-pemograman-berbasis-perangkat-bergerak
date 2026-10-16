"use strict";
const nim = "054762352";
console.log(`=========================================`);
console.log(`NIM yang digunakan: ${nim}`);
console.log(`=========================================\n`);
// ============================================================================
// SOAL 1: Pola Segitiga Angka
// ============================================================================
console.log("--- Soal 1: Pola Segitiga Angka ---");
const tinggiSegitiga = parseInt(nim.charAt(nim.length - 1)); // Digit terakhir = 2
console.log(`Tinggi Segitiga: ${tinggiSegitiga}\n`);
for (let i = 1; i <= tinggiSegitiga; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
        baris += j + " ";
    }
    console.log(baris.trim());
}
console.log("\n");
// ============================================================================
// SOAL 2: Deret Aritmatika
// ============================================================================
console.log("--- Soal 2: Deret Aritmatika ---");
const duaDigitTerakhir = parseInt(nim.substring(nim.length - 2)); // 52
const digitKetigaBelakang = parseInt(nim.charAt(nim.length - 3)); // 3
const beda = digitKetigaBelakang + 1; // 3 + 1 = 4
console.log(`Angka Awal: ${duaDigitTerakhir}`);
console.log(`Beda/Step: ${beda}\n`);
const jumlahDeret = 10;
let deret = [];
for (let i = 0; i < jumlahDeret; i++) {
    const angka = duaDigitTerakhir + i * beda;
    deret.push(angka);
}
console.log("Output Deret:", deret.join(", "));
console.log("\n");
// ============================================================================
// SOAL 3: Bilangan Prima
// ============================================================================
console.log("--- Soal 3: Bilangan Prima ---");
const batasAkhirPrima = duaDigitTerakhir + 10; // 52 + 10 = 62
console.log(`Batas Akhir Pencarian Bilangan Prima: ${batasAkhirPrima}\n`);
let kumpulanPrima = [];
function apakahPrima(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
for (let i = 1; i <= batasAkhirPrima; i++) {
    if (apakahPrima(i)) {
        kumpulanPrima.push(i);
    }
}
console.log("Output Bilangan Prima:", kumpulanPrima.join(", "));
console.log(`=========================================`);
