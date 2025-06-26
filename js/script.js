// Luas Segitiga
function luasSegitiga(event) {
    event.preventDefault();

    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const hasil = document.getElementById("luas");

    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Masukkan angka yang valid untuk Alas dan Tinggi");
        return;
    }

    if (alas <= 0 || tinggi <= 0) {
        alert("Angka harus lebih besar dari 0");
        return;
    }

    const luas = 0.5 * alas * tinggi;
    hasil.textContent = `Luas Segitiga = ${luas} cm²`;
}

function resetLuas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luas").textContent = "";
}

// Keliling Segitiga
function kelilingSegitiga(event) {
    event.preventDefault();

    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);

    const hasilKeliling = document.getElementById("keliling");

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert("Masukkan angka yang valid untuk semua sisi");
        return;
    }

    if (sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
        alert("Angka harus lebih besar dari 0");
        return;
    }

    const keliling = sisiA + sisiB + sisiC;
    hasilKeliling.textContent = `Keliling Segitiga = ${keliling} cm`;
}

function resetKeliling() {
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("keliling").textContent = "";
}
