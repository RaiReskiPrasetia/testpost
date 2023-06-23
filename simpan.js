function tambahPeserta() {
    var container = document.getElementById("pesertaContainer");
    var pesertaCount = document.querySelectorAll("[name^='param_namaPeserta[]']").length;

    if (pesertaCount < 10) {
        var pesertaDiv = document.createElement("div");
        pesertaDiv.innerHTML = '<label>Peserta ' + (pesertaCount + 1) + ':</label>' +
            '<input type="text" name="param_namaPeserta[]" placeholder="Nama Peserta"><br>' +
            '<input type="text" name="param_nikPeserta[]" placeholder="NIK Peserta"><br><br>';
        container.appendChild(pesertaDiv);
    }
}

$(document).ready(function() {
    $("#permohonanForm").submit(function(event) {
        event.preventDefault();

        // Membuat FormData objek untuk mengirim data form dengan tipe multipart/form-data
        var formData = new FormData(this);

        $.ajax({
            url: "simpan",
            type: "POST",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            success: function(response) {
                console.log(response);
                // Lakukan tindakan setelah permintaan berhasil
            },
            error: function(xhr, status, error) {
                console.error(error);
                // Lakukan tindakan jika terjadi kesalahan
            }
        });
    });
});