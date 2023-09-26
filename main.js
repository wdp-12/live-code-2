let currentInput = ''; // Variabel untuk menyimpan ekspresi saat ini

function appendToDisplay(value) {
    currentInput += value; // Tambahkan nilai ke ekspresi saat ini
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = ''; // Hapus ekspresi saat ini
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(currentInput); // Hitung ekspresi saat ini dgn eval utk eksekusi kode JavaScript yang ada dalam bentuk string
        document.getElementById('display').value = result;
        currentInput = result.toString(); // Simpan hasil sebagai ekspresi baru
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = ''; // Set ekspresi saat ini menjadi kosong jika terjadi kesalahan
    }
}