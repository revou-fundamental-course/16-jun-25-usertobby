function luasSegitiga(event) {
    event.preventDefault();

    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const hasil = document.getElementById("luas");

    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Mohon masukkan angka yang valid untuk alas dan tinggi.");
        return;
    }

    if (alas <= 0 || tinggi <= 0) {
        alert("Mohon masukkan angka yang lebih besar dari 0 untuk alas dan tinggi.");
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

function kelilingSegitiga(event) {
    event.preventDefault();

    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);

    const hasilKeliling = document.getElementById("keliling");

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
        alert("Mohon masukkan angka yang valid untuk semua sisi.");
        return;
    }

    if (sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        alert("Mohon masukkan angka yang lebih besar dari 0 untuk semua sisi.");
        return;
    }

    const keliling = sisi1 + sisi2 + sisi3;
    hasilKeliling.textContent = `Keliling Segitiga = ${keliling} cm`;
}

function resetKeliling() {
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("keliling").textContent = "";
}
