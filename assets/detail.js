$(document).ready(function() {
	tampil_detail_peserta();

	function tampil_detail_peserta() {
        var url=$(location).attr('href');
        var id=url.split('?param_id=');
        console.log(id)
        // console.log(id[1])
        $.ajax({
            type: 'POST',
            url: 'http://localhost:80/api_magang/peserta/detail',
            data: {
                'param_id': id[1],
            },
            success: function(result) {
                // console.log(result);
                var objResult = JSON.parse(result);
                $('[name="nama"]').text(': ' + objResult[0].nama);
                $('[name="no_nik"]').text(': ' + objResult[0].no_nik);
                $('[name="no_telp"]').text(': ' + objResult[0].no_telp);
                $('[name="email"]').text(': ' + objResult[0].email);
                $('[name="asal_sekolah"]').text(': ' + objResult[0].asal_sekolah);
                $('[name="alamat_sekolah"]').text(': ' + objResult[0].alamat_sekolah);
                $('[name="jurusan"]').text(': ' + objResult[0].jurusan);
                $('[name="jumlah_peserta"]').text(': ' + objResult[0].jumlah_peserta);
                $('[name="tgl_input"]').text(': ' + objResult[0].tgl_input);
                $('[name="tgl_magang_awal"]').text(': ' + objResult[0].tgl_magang_awal);
                $('[name="tgl_magang_akhir"]').text(': ' + objResult[0].tgl_magang_akhir);
                // $('[name="file_ktp"]').html(': <a href="http://localhost/api_magang/asset/upload/ktp/' + objResult[0].file_ktp + '">KTP</a>');
                $('[name="file_ktp"]').html(': <a href="' + baseURL + '/api_magang/asset/upload/ktp/' + objResult[0].file_ktp + '"><img src="' + baseURL + '/api_magang/asset/upload/ktp/' + objResult[0].file_ktp + '" alt="KTP"></a>');

                // $('[name="file_permohonan"]').html(': <a href="' + objResult[0].file_permohonan + '"></a>');
                $('[name="file_permohonan"]').html(': <a href="' + baseURL + objResult[0].file_permohonan + '"><img src="' + baseURL + objResult[0].file_permohonan + '" alt="Surat Permohonan"></a>');

            }
        });
        $('#data_id').show();
    }
})