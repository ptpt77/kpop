let transaksi = [];

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
}

function pilihProduk(nama, harga) {
    showPage('transaksi');
    document.getElementById('namaProduk').value = nama;
    document.getElementById('harga').value = harga;
}

document.getElementById('transaksiForm').addEventListener('submit', function(e){
    e.preventDefault();

    const nama = namaProduk.value;
    const jumlah = parseInt(jumlahInput.value = document.getElementById('jumlah').value);
    const harga = parseInt(document.getElementById('harga').value);
    const total = jumlah * harga;

    transaksi.push({ nama, jumlah, total });
    updateTabel();
});

function updateTabel() {
    const tbody = document.getElementById('tabelTransaksi');
    tbody.innerHTML = '';

    transaksi.forEach((t, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${t.nama}</td>
                <td>${t.jumlah}</td>
                <td>Rp ${t.total.toLocaleString('id-ID')}</td>
            </tr>
        `;
    });
}
